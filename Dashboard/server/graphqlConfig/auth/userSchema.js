export const typeDefs = (`

    type User {
        id: String!
        username: String!
        email: String!
        password: String!
    }

    type authPayload {
        token: String!
        user: User! 
    }

    input userInput{
        username: String!
        email: String!
        password: String!
    }
    type Mutation {
        signup(input: userInput!): authPayload
    }
`);

 