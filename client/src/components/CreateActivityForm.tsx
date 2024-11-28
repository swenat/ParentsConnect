import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const CreateActivityForm: React.FC = () => {
	// State för att hantera formulärvärden
	const [activityname, setActivityName] = useState("");
	const [location, setLocation] = useState("");
	const [time, setTime] = useState("");
	const [otherInfo, setOtherInfo] = useState("");

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const activityData = {
			activityname,
			location,
			time,
			otherInfo,
		};
		try {
			const response = await fetch("http://localhost:5000/api/activities", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(activityData),
			});

			if (!response.ok) {
				throw new Error("Failed to create activity");
			}

			const result = await response.json();
			console.log("Activity created:", result);
			// Rensa formuläret efter att det skickats
			setActivityName("");
			setLocation("");
			setTime("");
			setOtherInfo("");
		} catch (error) {
			console.error("Error creating activity:", error);
		}
	};

	return (
		<Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
			<Typography variant="h4" gutterBottom>
				Skapa en aktivitet
			</Typography>
			<Typography variant="body1" sx={{ marginBottom: 2 }}>
				Kul att du vill skapa en aktivitet! I formuläret nedan fyller du i all
				information som kan tänkas vara viktig för dina blivande deltagare.
				Lycka till!
			</Typography>
			<form onSubmit={handleSubmit}>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					{/* Aktivitetsnamn */}
					<Box>
						<TextField
							label="Aktivitetsnamn"
							placeholder="Döp din aktivitet, t.ex. 'barnvagnspromenad'"
							variant="outlined"
							fullWidth
							value={activityname}
							onChange={(e) => setActivityName(e.target.value)}
						/>
					</Box>

					{/* Plats för eventet */}
					<Box>
						<TextField
							label="Ange plats för eventet"
							placeholder="T.ex. entrén vid trädgårdsföreningen, Göteborg"
							variant="outlined"
							fullWidth
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						/>
					</Box>

					{/* Klockslag */}
					<Box>
						<TextField
							label="Klockslag"
							type="time"
							variant="outlined"
							fullWidth
							value={time}
							onChange={(e) => setTime(e.target.value)}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Box>

					{/* Övrig information */}
					<Box>
						<TextField
							label="Övrig information"
							placeholder="Om särskilda kläder krävs, fika behöver medtagas, etc."
							variant="outlined"
							fullWidth
							multiline
							rows={4}
							value={otherInfo}
							onChange={(e) => setOtherInfo(e.target.value)}
						/>
					</Box>

					{/* Skicka-knapp */}
					<Box>
						<Button type="submit" variant="contained" color="primary" fullWidth>
							Skapa aktivitet
						</Button>
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default CreateActivityForm;
