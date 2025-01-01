import mongoose, { Document, Schema } from "mongoose";

interface IActivity extends Document {
	activityname: string;
	imageURL: string;
	location: string;
	date: string;
	time: string;
	otherInfo?: string;
	attendees: string[];
}

const ActivitySchema: Schema = new Schema(
	{
		activityname: {
			type: String,
			required: [true, "Aktivitetsnamn är obligatoriskt."],
			validate: {
				validator: function (v: string) {
					return /^[a-zA-ZåäöÅÄÖ\s-]{3,50}$/.test(v); // Tillåter bokstäver, siffror, mellanslag och bindestreck, 3-50 tecken
				},
				message: (props: { value: string }) =>
					`"${props.value}" är inte ett giltigt aktivitetsnamn. Använd endast bokstäver, mellanslag och bindestreck.`,
			},
			minlength: [3, "Aktivitetsnamnet måste vara minst 3 tecken långt."],
			maxlength: [50, "Aktivitetsnamnet får inte vara längre än 50 tecken."],
		},
		imageUrl: {
			type: String,
			required: [true, "Bild-URL är obligatorisk."],
			validate: {
				validator: function (v: string) {
					return /^(http|https):\/\/[^ "]+$/.test(v); // Validerar för giltig url
				},
				message: (props: { value: string }) =>
					`${props.value} är ingen giltig URL!`,
			},
		},
		location: {
			type: String,
			required: [true, "Plats är obligatorisk."],
			validate: {
				validator: function (v: string) {
					return v.length > 2 && v.length < 100; // Platsnamnet ska vara mellan 3 och 100 tecken
				},
				message: (props: { value: string }) =>
					`Platsens namn "${props.value}" måste vara mellan 3 och 100 tecken långt!`,
			},
		},
		date: {
			type: String,
			required: [true, "Datum är obligatoriskt."],
			validate: {
				validator: function (v: string) {
					return /^\d{4}-\d{2}-\d{2}$/.test(v) && !isNaN(Date.parse(v)); // Validerar ISO-format och giltigt datum
				},
				message: (props: { value: string }) =>
					`"${props.value}" är inte ett giltigt datum (format: YYYY-MM-DD)!`,
			},
		},
		time: {
			type: String,
			required: [true, "Tid är obligatorisk."],
			validate: {
				validator: function (v: string) {
					return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v); // Validerar HH:MM-format
				},
				message: (props: { value: string }) =>
					`"${props.value}" är inte en giltig tid (format: HH:MM)!`,
			},
		},
		otherInfo: {
			type: String,
			validate: {
				validator: function (v: string) {
					return v.length <= 500; // Max 500 tecken
				},
				message: (props: { value: string }) =>
					`Den extra informationen är för lång! Max 500 tecken tillåts.`,
			},
		},
		attendees: { type: [String], default: [] },
	},
	{ timestamps: true }
);

const Activity = mongoose.model<IActivity>("Activity", ActivitySchema);

export default Activity;
