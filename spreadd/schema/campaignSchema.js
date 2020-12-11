import { buildSchema } from "graphql";

 const typeDefs = buildSchema(`
    scalar Date
    type campaign {
        id: Int!
        name: String!
        location: [location!]!
        startDate: Date!
        dueDate: Date!
        description: String!
        budget: Int!
        isFavourit: Boolean!
        socialMedias: [socialMedias!]!
        owner: Int!
        totalSpent: Int!
        numberOfParticipants: Int!
        categories: [Int]!
        videoURL: String!
        thumbImage: String!
        imageURL: [String]!
        totalSpreadd: Int!
        maxEarning: Int!
        ownerIncome: Int!
        criteria: criteria!
    }

    type location {
        city: String!
        state: String!
        country: String!
        coordinates: [String]!
    }

    type socialMedias {
        platform: platform!
        link: String!
        startDate: Date!
        endDate: Date!
    }
    enum platform{
        FACEBOOK,
        INSTAGRAM,
        TWITTER
    }

    type criteria {
        gender: ['Male', 'Female', 'Any']!
        age: {
        minimum: Int!
        maximum: Int!
        }!
        language: String! 
        followers: {
        minimum: Int!
        maximum: Int!
        }!
        location: [location!]!
    }

    type Query {
        getAllCampaign: [campaign]
        getCampaignById(id: String!): campaign
    }
`);

// console.log(typeDefs);
export default typeDefs;