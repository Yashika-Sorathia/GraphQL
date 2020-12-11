import projectModel from "./project.model";
import projectResolvers from "./project.resolvers";
import { loadGQlFile } from "../../utilis/gqlLoader";


export default {
    model: projectModel,
    resolvers: projectResolvers,
    typeDefs: loadGQlFile('project/project.graphql')
};