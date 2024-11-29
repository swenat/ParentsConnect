import cors from "cors";
import express from "express";
import Activity from "../models/Activity";

const router = express.Router();

router.use(cors({ origin: "http://localhost:5173" }));

router.post("/", async (req, res) => {
	try {
		const { activityname, imageUrl, location, time, otherInfo } = req.body;
		const newActivity = new Activity({
			activityname,
			imageUrl,
			location,
			time,
			otherInfo,
		});
		const savedActivity = await newActivity.save();
		res
			.status(201)
			.json({ message: "Activity created", activity: savedActivity });
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unknown error occurred";
		res.status(500).json({ error: errorMessage });
	}
});

router.get("/", async (req, res) => {
	try {
		const activities = await Activity.find();
		res.json(activities);
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unknown error occurred";
		res.status(500).json({ error: errorMessage });
	}
});

export default router;
