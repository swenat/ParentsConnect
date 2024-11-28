import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./resources/routes/userRoutes";

// Ladda miljövariabler från .env
dotenv.config();

const app = express();
const port = 5000;

// Middleware och andra inställningar
app.use(express.json());

app.use("/api/users", userRoutes);

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

// Starta servern
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
