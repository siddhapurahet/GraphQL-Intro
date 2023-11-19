import gql from "graphql-tag";

export const typeDefs = gql`
    type Game {
        id: ID!      # ! is used as required field
        title: String!
        platform: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        reviews: [Review]  #this Query type is compulsory to write as it tells GrqpgQL to load the data int he format that first reviews will be shown and all other fields mentioned i.e games and author that is because it can be used to link with the reviews and data can be fetched combinely.
        authors: [Author]
        games: [Game]
    }
`

//export default {typeDefs};