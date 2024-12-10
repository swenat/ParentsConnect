import argon2 from "argon2";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";

const router = express.Router();

// Skapa en användare
router.post("/", async (req: Request, res: Response) => {
	try {
		const { name, email, password } = req.body;

		const userExists = await User.findOne({ email });
		if (userExists) {
			return res
				.status(400)
				.json({ error: "Användaren finns redan med den e-postadressen." });
		}

		const hashedPassword = await argon2.hash(password);

		const user = new User({ name, email, password: hashedPassword });
		await user.save();

		console.log("User created:", user);
		res.status(201).json({ message: "User created", user });
	} catch (error) {
		if (error instanceof mongoose.Error.ValidationError) {
			const errors = Object.keys(error.errors).reduce((acc, key) => {
				acc[key] = error.errors[key].message;
				return acc;
			}, {} as Record<string, string>);
			return res.status(400).json({ errors });
		}
		console.error("Error creating user:", error);
		res
			.status(500)
			.json({ error: "An error occurred while creating the user." });
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
