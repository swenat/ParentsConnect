import mongoose, { Document, Schema } from "mongoose";

interface IActivity extends Document {
	activityname: string;
	location: string;
	time: string;
	otherInfo?: string;
}

const ActivitySchema: Schema = new Schema(
	{
		activityname: { type: String, required: true },
		location: { type: String, required: true },
		time: { type: String, required: true },
		otherInfo: { type: String },
	},
	{ timestamps: true }
);

const Activity = mongoose.model<IActivity>("Activity", ActivitySchema);

export default Activity;
