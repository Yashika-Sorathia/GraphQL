import authResolvers from "./auth.resolvers";
import { loadGQlFile } from "../../utilis/gqlLoader";
import authModle from "./auth.modle";


export default {
    model: authModle,
    resolvers: authResolvers,
    typeDefs: loadGQlFile('auth/auth.graphql')
}