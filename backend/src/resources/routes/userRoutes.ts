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
			return res.status(400).json({
				errors: { email: "E-postadressen är redan registrerad." },
			});
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

// Logga in en användare
router.post("/login", async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		//Hitta användaren baserat på e-post
		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(400)
				.json({ message: "Felaktig e-post eller lösenord." });
		}

		//Verifiera lösenord
		const validPassword = await argon2.verify(user.password, password);
		if (!validPassword) {
			return res
				.status(400)
				.json({ message: "Felaktig e-post eller lösenord." });
		}

		res.status(200).json({ message: "Inloggning lyckades!", user });
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ message: "Något gick fel vid inloggningen." });
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
