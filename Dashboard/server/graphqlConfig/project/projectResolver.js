import projectModel from './projectModel';
import typeDefs from './projectSchema';
import {connectionArgs} from 'graphql-relay';
import { parse } from 'path';

const resolvers = {
    Project: (ctx,info)=>{
        return ctx.models.project.find();
    },
    Query: {
        project: (obj, args, ctx, info)=>{
            return ctx.models.project.findById(args.id).exec();
        },

        projects: (root, ctx, info)=> {
            return ctx.models.project.find().sort('-id');
        },

        pagination: (root, {after, first})=> {

            const projectMap = projectModel.find()
            .map(i => i.id)
            .toArray()
            .indexOf(after) + 1;
           
            const count = projectModel.count(err => {
                console.log('Count Error', err);
            });
            // console.log(count)
            const edges = projectModel.slice(index, index + first)
            .map(m => ({
                cursor : m.id,
                node: {...m}
            }));
            // console.log(edges)
            const endCursor = edges[edges.count() -1].node.id
            const pageInfo = {
                endCursor,
                hasNextPage: projectModel.count() + first > endCursor + first
            }
            return {
                count,
                pageInfo,
                edges
            }
        }

        // pagination: (root, {after, first})=> {
        //     if (first < 0) {
        //         throw new Error('It should be positive number!')
        //     };
        //     const count = projectModel.count();
        //     console.log(count)

        //     let projectArray = [Project];
        //     console.log(projectArray)
        //     let start = 0;
        //     if(after !== undefined){
        //         const buff = new Buffer(after, 'base64');
        //         const id = buff.toString('ascii');
        //         const index = projectModel.findById((pointer)=> pointer.id === id);
        //         // console.log(index);
        //         if(index === -1){
        //             throw new Error('After does not exist!')
        //         };
        //         start = indext + 1;

        //     }
        //     projectArray = first === undefined ? projectModel : projectModel.slice(start, start + first);

        //     let endCursor =  String;
        //     const edges = projectArray.map((pointer)=>{
        //         const buffer = new Buffer(pointer.id);
        //         endCursor = buffer.toString('base64');
        //         return({
        //             cursor: endCursor,
        //             node: pointer
        //         });
        //     });

        //     const hasNextPage = start + first < count;
        //     const pageInfo = endCursor !== undefined ? {
        //         endCursor,
        //         hasNextPage
        //     }: {
        //         hasNextPage
        //     };
        //     const result = {
        //         edges,
        //         pageInfo,
        //         count
        //     };
        //     return result;
        // }
        // pagination: (root, {first, cursor},info)=>{
        //     const query = {};
        //     if(cursor) {
        //         query.Start_Date = {$lt: cursor}
        //     }
        //     console.log(query);
        //    const data= projectModel.find(query, (read)=>{console.log(read)}).limit(first).sort('-StartDate').exec();
        //    console.log(data);
        //    return data;
            // console.log(data)

            // const hasNextPage = data.length > limit;
            // const edges = hasNextPage ? data.slice(0,-1) : data;
            // return{
            //     edges,
            //     pageInfo: {
            //         hasNextPage,
            //         endCursor: edges[edges.length -1].Start_Date,
            //     }
            // }
            
        // }

    },

    Mutation: {
        createProject: (parent, ctx,{input})=> {
            return ctx.models.project.create(input);
        },
        updateProject: (parent, ctx,args,{input})=> {
            return ctx.models.project.findByIdAndUpdate(args.id, input, {new: false});
        },
        deleteProject: (parent,ctx, args)=>{
            return ctx.models.project.findByIdAndDelete(args.id).exec();
        }
    }
   
}; 

console.log(resolvers.Query.projects)
export default resolvers