import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectModel = new Schema({
    Project_Name: {
        type: String,
        require: true
    },
    Company_Name: {
        type: String,
        require: true
    },
    Contect_Name: {
        type: String,
        require: true
    },
    Designer: {
        type: String,
        require: true
    },
    Manager: {
        type: String,
        require: true
    },
    Contect_Person_phonenumber: {
        type: String,
        require: true
    },
    Designer_phonenumber: {
        type: String,
        require: true
    },
    Manager_phonenumber: {
        type: String,
        require: true
    },
    Contect_Person_email: {
        type: String,
        require: true
    },
    Designer_email: {
        type: String,
        require: true
    },
    Manager_email: {
        type: String,
        require: true
    },
    Website_Links: {
        type: String,
        require: true
    },
    Technology_Used: {
        type: Array,
        require: true
    },
    Start_Date: {
        type: Date,
        require: true
    },
    End_Date: {
        type: Date,
        require: true
    },
    Deleted: {
        type: Boolean,
        require: true
    }
});

export default mongoose.model('Project', projectModel);