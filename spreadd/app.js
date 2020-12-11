var express = require('express')
var graphqlHTTP = require('express-graphql');
import {buildSchema} from 'graphql';
import mongoose from 'mongoose';
import GraphqlSchema from './schema';
import resolvers from './resolvers/campaignResolver'

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: buildSchema(GraphqlSchema),
    rootValue: resolvers,
    graphiql: true
}))

app.listen(3000);
console.log('Server running on port 3000..!');