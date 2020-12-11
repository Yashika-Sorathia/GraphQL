import userModel from './userModel';
import bcrypt from 'bcrypt-nodejs';
import jsonwebtoken from 'jsonwebtoken';
import {JSON_SECRET} from '../../config';

const resolvers = {
    // Query: {
    //     me: ({args}, user) => {
    //         if(!user){
    //             throw new Error ('You are not authenticated!');
    //         }
    //         return userModel.findById(user.id);
    //     }
    // },

    Mutation: {
        signup: (root, args,ctx) => {
            const user = ctx.models.user.create({
                usernmae: args.usernmae,
                email: args.email,
                password: bcrypt.hash(args.password, 10)

            });

            const token = jsonwebtoken.sign({id: user.id}, JSON_SECRET);
            return {
                token,
                user: {
                    id,
                    usernmae,
                    email
                }
            } 
        }

        // login: (root, args) => {
        //     const user = userModel.findOne({where: {email}});
        //     if(!user){
        //         throw new Error('Invalid email!');
        //     }
        //     const valid = bcrypt.compare(args.password, user.password);
        //     if(!valid){
        //         throw new Error('Invalid Password!');
        //     }
        //     return jsonwebtoken.sign(
        //         {id: user.id, email: user.email},
        //         process.env.JWT_SECRET,
        //         {expiresIn: '10min'}
        //     )
        // }
    }
}

export default resolvers;