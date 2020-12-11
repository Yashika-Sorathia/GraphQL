import typeDefs from './projectSchema';
import resolvers from './projectResolver';
import projectModel from './projectModel';

export default {
    model: projectModel,
    typeDefs,
    resolvers
}