import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
	name: string;
	email: string;
	password: string;
}

const UserSchema = new Schema<IUser>({
	name: { type: String, required: [true, "Name is required"] },
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
		match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
	},
	password: { type: String, required: [true, "Password is required"] },
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
