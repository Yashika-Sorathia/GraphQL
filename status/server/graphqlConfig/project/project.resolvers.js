import projectModel from './project.model';
export default {
    Query: {
        projectID: (obj, args, ctx, info)=>{
            return projectModel.findById(args.id).exec();
        },

        projects: (root, ctx, info)=> {
            return projectModel.find({}).sort('-id');
        },
        // pagination: (root, {after, first})=> {

        //     const index = projectModel.find()
        //     .map(i => i.id)
        //     .toArray(err=>console.log('Array', err))
        //     .indexOf(after) + 1;
           
        //     const count = projectModel.count(err => {
        //         console.log('Count Error', err);
        //     });
        //     // console.log(count)
        //     const edges = projectModel.slice(index, index + first)
        //     .map(m => ({
        //         cursor : m.id,
        //         node: {...m}
        //     }));
        //     // console.log(edges)
        //     const endCursor = edges[edges.count() -1].node.id
        //     const pageInfo = {
        //         endCursor,
        //         hasNextPage: projectModel.count() + first > endCursor + first
        //     }
        //     return {
        //         count,
        //         pageInfo,
        //         edges
        //     }
        // }
    },

    Mutation: {
        createProject: (parent,{input} ,ctx)=> {
            console.log(input);
            return projectModel.create(input);
        },
        updateProject: (parent,{input},args, ctx)=> {
            return projectModel.findByIdAndUpdate(args.id, input, {new: false});
        },
        deleteProject: (parent,args,ctx)=>{
            return projectModel.findByIdAndDelete(args.id).exec();
        }
    }
};

