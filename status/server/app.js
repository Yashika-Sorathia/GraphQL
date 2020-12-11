import {GraphQLServer} from 'graphql-yoga';
import mongoose from 'mongoose';
// import schema from './project/projectSchema';
import graphqlConfig from './graphqlConfig';

mongoose.connect('mongodb+srv://Raj:1234567890@demo1-hjgya.mongodb.net/Status?retryWrites=true&w=majority').catch((err)=>{
    throw new Error(err);
});

// const typeDefs = `
//     type Query {
//         hello(name: String): String
//     }
// `

// const resolvers = {
//     Query: {
//         hello: (_,{name})=> `Hello ${name || 'World'}`
//     }
// };

const options = {
    tracing: true,
    debug: true,
    port: 4000,
    enpoint: '/graphql',
    playground: '/docs'
};

const server = new GraphQLServer(graphqlConfig);
server.start(options,()=>console.log('Server is running on port 4000...!!'));
