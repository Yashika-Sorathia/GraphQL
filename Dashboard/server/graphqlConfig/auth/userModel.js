import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userModel = new Schema({
    id: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

export default mongoose.model('User', userModel);
