import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
	name: string;
	email: string;
	role: string; // "admin" eller "user"
}

const UserSchema: Schema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	role: { type: String, default: "user" },
});

export default mongoose.model<IUser>("User", UserSchema);
