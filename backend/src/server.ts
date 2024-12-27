import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import activityRoutes from "./resources/routes/activityRoutes";
import userRoutes from "./resources/routes/userRoutes";

// Ladda miljövariabler från .env
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware och andra inställningar
app.use(express.json());

app.use(
	cors({
		origin: "https://parentsconnect-website.onrender.com", //Tillåter frontenden
		methods: ["GET", "POST", "PUT", "DELETE"], // Tillåtna metoderna
		credentials: true, // Om cookies eller autentisering används
	})
);

app.use("/api/users", userRoutes);
app.use("/api/activities", activityRoutes);

// Anslut till MongoDB med URI från .env
mongoose
	.connect(process.env.MONGO_URI as string)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.error("Failed to connect to MongoDB:", err);
	});

// En enkel route för att kolla servern
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.get("/health", (req, res) => {
	res.status(200).send("OK");
});
// Starta servern
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
