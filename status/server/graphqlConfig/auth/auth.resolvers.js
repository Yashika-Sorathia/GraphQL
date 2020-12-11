import bcrypt from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken';
import {JWT_SECRET} from '../../config';
import authModle from './auth.modle';

export default {

    Query: {
        user: (root, ctx)=> {
            return authModel.find({});
        }
    },
    Mutation: {
        signup: async (root, {input},ctx) => {
            const password = await bcrypt.hash(input.password,10)
            let user =  new authModle({
                username: input.username,
                email: input.email,
                password: password
            })           
            authModle.create(user);
            console.log(user);
            //     const user = await Object.assign(authModle.create({
            //     username: 'input.username',
            //     email: 'input.email',
            //     password: 'password'

            // }, (err)=> {
            //     console.log(err);
            // }));
            console.log(user._id);

            const token = jsonwebtoken.sign({id: user._id}, JWT_SECRET);
            return {
                token,
                user: {
                    username: user.username,
                    email: user.email,
                    id: user._id,
                    password: user.password
                }
            } 
        } 
    }
};