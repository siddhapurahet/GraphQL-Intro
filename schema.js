import gql from "graphql-tag";

export const typeDefs = gql`
    type Game {
        id: ID!      # ! is used as required field
        title: String!
        platform: [String!]!
        reviews: [Review!]   #this is used to connect Game with reviews table
        authors: [Author!]
    
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!   #this is used to connect Review with author table
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        review: [Review!]
    }
    type Query {
        reviews: [Review]  #this Query type is compulsory to write as it tells GrqpgQL to load the data int he format that first reviews will be shown and all other fields mentioned i.e games and author that is because it can be used to link with the reviews and data can be fetched combinely.
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
        games: [Game]
        game(id: ID!): Game
    }

    type Mutation {
        deleteGame(id: ID!): [Game]
        addGame(game: addGameValues): Game
        updateGame(id: ID!, edit: editGameValues): Game
    }

    input addGameValues {
        title: String!,
        platform: [String!]!
    }

    input editGameValues {
        title: String,
        platform: [String!]
    }
`

//export default {typeDefs};