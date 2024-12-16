import cors from "cors";
import express from "express";
import Activity from "../models/Activity";

const router = express.Router();

router.use(cors({ origin: "http://localhost:5173" }));

// Skapar en aktivitet
router.post("/", async (req, res) => {
	try {
		const { activityname, imageUrl, location, date, time, otherInfo } =
			req.body;

		const selectedDate = new Date(date);
		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); // Jämför endast datum (inte tid)

		if (selectedDate < currentDate) {
			return res.status(400).json({ error: "Datumet måste vara i framtiden." });
		}

		const newActivity = new Activity({
			activityname,
			imageUrl,
			location,
			date,
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

// Hämtar alla aktiviteter
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

// Filtrerar aktiviteter baserat på datum
router.get("/filter", async (req, res) => {
	try {
		const { date } = req.query;
		const filteredActivities = await Activity.find({ date });
		res.json(filteredActivities);
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "An unknown error occurred";
		res.status(500).json({ error: errorMessage });
	}
});

// Lägger till en användare till en aktivitets deltagarlista
router.post("/attend/:id", async (req, res) => {
	try {
		const activityId = req.params.id;
		const userId = req.body.userId; // Skicka användarens ID via request body

		const activity = await Activity.findById(activityId);
		if (!activity) {
			return res.status(404).json({ error: "Activity not found" });
		}

		// Lägg till användarens ID i listan av anmälda (om de inte redan är anmälda)
		if (!activity.attendees.includes(userId)) {
			activity.attendees.push(userId);
			await activity.save();
		}

		res.status(200).json({
			message: "User registered for activity",
			attendees: activity.attendees.length,
		});
	} catch (error) {
		// Typkontroll för att hantera 'error' säkert
		if (error instanceof Error) {
			res.status(500).json({ error: error.message });
		} else {
			res.status(500).json({ error: "An unknown error occurred" });
		}
	}
});

export default router;
