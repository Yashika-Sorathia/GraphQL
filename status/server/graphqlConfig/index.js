import project from './project';
import auth from './auth';
import merge from 'lodash';

// const schema = merge([project.typeDefs, auth.typeDefs]);

export default {
    resolvers: Object.assign({},[project.resolvers]),
    typeDefs: [project.typeDefs].join(' ')
}

// console.log([project.resolvers, auth.resolvers])