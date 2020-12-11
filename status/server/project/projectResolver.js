import projectModel from '../graphqlConfig/project/project.model';

const resolvers = {
    Query: {
        projectID: (obj, args, ctx, info)=>{
            return projectModel.findById(args.id).exec();
        },

        projects: (root, ctx, info)=> {
            return projectModel.find().sort('-id');
        },

    },

    Mutation: {
        createProject: (parent,{input} ,ctx)=> {
            return projectModel.create(input);
        },
        updateProject: (parent,{input},args, ctx)=> {
            return projectModel.findByIdAndUpdate(args.id, input, {new: false});
        },
        deleteProject: (parent,args,ctx, )=>{
            return projectModel.findByIdAndDelete(args.id).exec();
        }
    }
};

export default resolvers;