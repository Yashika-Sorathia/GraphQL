import typeDefs from './userSchema';
import resolvers from './userResolver';
import userModel from './userModel';

export default {
    model: userModel,
    typeDefs,
    resolvers
}

