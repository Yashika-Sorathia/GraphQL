import resolvers from './projectResolver'

const typeDefs = `
    scalar Date
    type Project {
        id: String!
        Project_Name: String!
        Company_Name: String!
        Contect_Name: String!
        Designer: String!
        Manager: String!
        Contect_Person_phonenumber: String!
        Designer_phonenumber: String!
        Manager_phonenumber: String!
        Contect_Person_email: String!
        Designer_email: String!
        Manager_email: String!
        Website_Links: String!
        Technology_Used: [String]!
        Start_Date: Date
        End_Date: Date!
        Deleted: Boolean
    }

    type PageInfo {
        endCursor: String!
        hasNextPage: Boolean!
    }

    type Page {
        edges: [Project]!
        pageInfo: PageInfo!
        count: Int! 
    }
    type Edge {
        cursor: String!
        node: [Project!]!
    }

    type Query {
        projectID(id: ID): Project!
        projects: [Project]
        pagination(after: String, first: Int): [Page]!
    }

    input InsertProject {
        Project_Name: String!
        Company_Name: String!
        Contect_Name: String!
        Designer: String!
        Manager: String!
        Contect_Person_phonenumber: String!
        Designer_phonenumber: String!
        Manager_phonenumber: String!
        Contect_Person_email: String!
        Designer_email: String!
        Manager_email: String!
        Website_Links: String!
        Technology_Used: [String]!
        Start_Date: Date!
        End_Date: Date!
    }

input UpdateProject {
    Project_Name: String!
    Company_Name: String!
    Contect_Name: String!
    Designer: String!
    Manager: String!
    Contect_Person_phonenumber: String!
    Designer_phonenumber: String!
    Manager_phonenumber: String!
    Contect_Person_email: String!
    Designer_email: String!
    Manager_email: String!
    Website_Links: String!
    Technology_Used: [String]!
    Start_Date: Date!
    End_Date: Date!
}

type Mutation {
    createProject(input :InsertProject): Project!
    updateProject(id: String!,input: UpdateProject): Project!
    deleteProject(id: String!): Project!
}
` ; 

export default {
    typeDefs,
    resolvers
}
// console.log(typeDefs)

// export default typeDefs;

// projects(limit: Int, skip: Int, cursor: String, Start_Date: Date): [Project!]!
