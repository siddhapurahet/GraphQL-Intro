import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './db.js'

let length = db.games.length;

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        game(_, args) {
            return db.games.find((game) => game.id ==args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id) 
        },
        authors() {
            return db.authors
        },
        author(_, args) {
            return db.authors.find((author) => author.id ==args.id)
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((singleid) => singleid.game_id === parent.id)
        },
        authors(parent) {
            return db.authors.filter((singleid) => singleid.game_id === parent.id)
        }
    },
    Author: {
        review(parent) {
            return db.reviews.filter((singleid) => singleid.author_id === parent.id)
        }
    },
    Mutation: {
        deleteGame(_, args) {
            db.games = db.games.filter((singleid) => singleid.id !== args.id)
            return db.games;
        },
        addGame(_, args) {
            let newGameObject = {
                ...args.game,
                id: length + 1
            }

            db.games.push(newGameObject);
            return newGameObject
        },
        updateGame(_, args) {
            db.games = db.games.map((singleObj) => {
                if(singleObj.id === args.id) {
                    return {...singleObj, ...args.edit}
                }
                return singleObj
            })
            return db.games.find((editedObject) => editedObject.id === args.id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: {port: 3000}
})

console.log('Server set up at port', 3000);