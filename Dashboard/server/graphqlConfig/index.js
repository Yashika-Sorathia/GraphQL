import auth from './auth';
import project from './project';


export default {
    typeDefs: [project.typeDefs].join(' '),
    resolvers: Object.assign({},project.resolvers),
    context: {
        models: {
            project: project.model,
        }
    }
}
