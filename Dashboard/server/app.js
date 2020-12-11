// import {makeExecutableSchema} from 'graphql-tools';
import mongoose from 'mongoose';
import graphqlConfig from './graphqlConfig';
import jwt from 'express-jwt';
import {GraphQLServer} from 'graphql-yoga';

console.log(graphqlConfig);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Raj:1234567890@demo1-hjgya.mongodb.net/Project?retryWrites=true&w=majority');

const options = {
    tracing: true,
    debug: true,
    port: 3000,
    endpoint: '/graphql',
    playgroung: '/docs'
}
const server = new GraphQLServer(graphqlConfig);
server.start(options, ()=> console.log('Serve is running on port 3000...!'));


// app.listen(3000);




// var typeDefs = [`
//     type Query {
//         hello: String!
//     }
//     schema {
//         query: Query
//     }
// `];

// var resolvers = {
//     Query: {
//         hello(root){
//             return 'World';
//         }
//     }
// };

// var schema = makeExecutableSchema({
//     typeDefs,
//     resolvers
// });
// app.use('/graphql', jwt({secret: auth}))


