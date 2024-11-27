import argon2 from "argon2";
import express from "express";
import User from "../models/User";

const router = express.Router();

// Skapa en användare
router.post("/", async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const hashedPassword = await argon2.hash(password);

		const user = new User({ name, email, password: hashedPassword });
		await user.save();

		console.log("User created:", user);
		res.status(201).json({ message: "User created", user });
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({ error: error.message });
		} else {
			res.status(500).json({ error: "An unknown error occurred" });
		}
	}
});

// Hämta alla användare
router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({ error: error.message });
		} else {
			res.status(500).json({ error: "An unknown error occurred" });
		}
	}
});

// Ta bort en användare
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		await User.findByIdAndDelete(id);
		res.json({ message: "User deleted" });
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({ error: error.message });
		} else {
			res.status(500).json({ error: "An unknown error occurred" });
		}
	}
});

export default router;
