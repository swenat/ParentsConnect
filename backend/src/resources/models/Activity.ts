import mongoose, { Document, Schema } from "mongoose";

interface IActivity extends Document {
	activityname: string;
	imageURL: string;
	location: string;
	date: string;
	time: string;
	otherInfo?: string;
}

const ActivitySchema: Schema = new Schema(
	{
		activityname: { type: String, required: true },
		imageUrl: {
			type: String,
			required: true,
			validate: {
				validator: function (v: string) {
					return /^(http|https):\/\/[^ "]+$/.test(v); // Validerar för giltig url
				},
				message: (props: { value: string }) =>
					`${props.value} is not a valid URL!`,
			},
		},
		location: { type: String, required: true },
		date: { type: String, required: true },
		time: { type: String, required: true },
		otherInfo: { type: String },
	},
	{ timestamps: true }
);

const Activity = mongoose.model<IActivity>("Activity", ActivitySchema);

export default Activity;
