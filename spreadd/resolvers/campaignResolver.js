import campaignData from '../mongoModels/campaignModel';


export const resolvers = {
    Query: {
        getCampaignById: (root, args, ctx, info)=> {
            return campaignData.findById(args.id);
        },
        getAllCampaign: (root, ctx, info)=>{
            return campaignData.find({});
        }
    }
}