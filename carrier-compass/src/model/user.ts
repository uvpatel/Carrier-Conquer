import mongoose , { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "@/types/modeltype";

const userSchema = new  Schema<IUser> ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    }
})


const User = models.User || model<IUser>("User", userSchema) ;

export default User