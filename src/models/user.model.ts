import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    username : {
        type : String
    },
    password : {
        type : String
    },
    bio : {
        type : String
    },
    image : {
        type : String
    }
})

export class User extends mongoose.Document {
    email: string;
    username: string;
    bio: string;
    image: string;
    password: string;
}