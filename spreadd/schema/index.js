// import typeDefs from './campaignSchema';
import {makeExecutableSchema} from 'graphql-tools';

// // import {makeSchemaExecutable} from 'graphql-tools';
// const schema = makeExecutableSchema({
//     typeDefs: [typeDefs]
// })
// module.exports =  schema

import campaignSchema from './campaignSchema';

const schema = makeExecutableSchema({
    typeDefs: campaignSchema
})
console.log(schema)

