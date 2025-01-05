import {
	Alert,
	Box,
	Button,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

const isFutureDate = (date: string) => {
	const selectedDate = new Date(date);
	const currentDate = new Date();
	// Sätter tiden till midnatt för att endast jämföra datum
	currentDate.setHours(0, 0, 0, 0);
	return selectedDate >= currentDate;
};

const CreateActivityForm: React.FC = () => {
	// State för att hantera formulärvärden
	const [activityname, setActivityName] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [location, setLocation] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [otherInfo, setOtherInfo] = useState("");

	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
		"success"
	);

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setIsSubmitted(true);

		if (!activityname || !imageUrl || !location || !date || !time) {
			setSnackbarMessage("Alla obligatoriska fält måste fyllas i!");
			setSnackbarSeverity("error");
			setSnackbarOpen(true);
			return;
		}

		if (!isFutureDate(date)) {
			setSnackbarMessage("Datumet måste vara i framtiden.");
			setSnackbarSeverity("error");
			setSnackbarOpen(true);
			return;
		}

		const activityData = {
			activityname,
			imageUrl,
			location,
			date,
			time,
			otherInfo,
		};
		try {
			const response = await fetch(
				"https://parentsconnect.onrender.com/api/activities",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(activityData),
				}
			);

			if (!response.ok) {
				const errorData = await response.json();
				const errorMessage = Array.isArray(errorData.error)
					? errorData.error.join("\n")
					: errorData.error || "Failed to create activity";
				throw new Error(errorMessage);
			}

			const result = await response.json();
			console.log("Activity created:", result);

			setSnackbarMessage("Aktiviteten har sparats!");
			setSnackbarSeverity("success");
			setSnackbarOpen(true);

			// Rensa formuläret efter att det skickats
			setActivityName("");
			setImageUrl("");
			setLocation("");
			setDate("");
			setTime("");
			setOtherInfo("");
			setIsSubmitted(false);
		} catch (error: any) {
			console.error("Error creating activity:", error);
			setSnackbarMessage(
				error.message || "Något gick fel vid skapandet av aktiviteten."
			);
			setSnackbarSeverity("error");
			setSnackbarOpen(true);
		}
	};

	const getFieldError = (value: string) => isSubmitted && !value;

	const handleCloseSnackbar = () => {
		setSnackbarOpen(false);
	};

	return (
		<Box
			sx={{
				maxWidth: 600,
				margin: "0",
				padding: 2,
			}}
		>
			<Typography variant="h5" gutterBottom aria-label="create-activity">
				Skapa en aktivitet
			</Typography>
			<Typography variant="body1" sx={{ marginBottom: 2 }}>
				Kul att du vill skapa en aktivitet! I formuläret nedan fyller du i all
				information som kan tänkas vara viktig för dina blivande deltagare.
				Lycka till!
			</Typography>
			<form onSubmit={handleSubmit}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 2,
						maxWidth: 600,
						margin: "0",
						padding: 2,
						border: "2px",
						borderRadius: "10px",
						boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.1)",
					}}
				>
					{/* Aktivitetsnamn */}
					<Box>
						<Typography id="activity-name-label">Aktivitetsnamn</Typography>
						<TextField
							aria-labelledby="activity-name-label"
							label="Ange namn på aktiviteten"
							placeholder="Döp din aktivitet, t.ex. 'barnvagnspromenad'"
							variant="outlined"
							fullWidth
							value={activityname}
							onChange={(e) => setActivityName(e.target.value)}
							required
							error={getFieldError(activityname)}
							aria-invalid={getFieldError(activityname)}
						/>
					</Box>
					{/* Plats för bild */}
					<Box>
						<TextField
							label="Klistra in en passande bildlänk"
							placeholder="Tex: https://www.example.com/image.jpg"
							variant="outlined"
							fullWidth
							value={imageUrl}
							onChange={(e) => setImageUrl(e.target.value)}
							required
							error={getFieldError(imageUrl)}
							aria-describedby="image-url-helper"
						/>
						<Typography
							id="image-url-helper"
							variant="body2"
							color="textSecondary"
						>
							Länken ska vara en giltig URL till en bild.
						</Typography>
					</Box>
					{/* Plats för eventet */}
					<Box>
						<Typography id="activity-place-label">Plats</Typography>
						<TextField
							label="Ange plats och stad för aktiviteten"
							placeholder="T.ex. entrén vid trädgårdsföreningen, Göteborg"
							variant="outlined"
							fullWidth
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							required
							error={getFieldError(location)}
							aria-labelledby="activity-place-label"
						/>
					</Box>
					<Box sx={{ position: "relative" }}>
						<Typography id="activity-date-label">Datum</Typography>
						<TextField
							label="Ange aktivitetens datum"
							type="date"
							variant="outlined"
							fullWidth
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
							error={getFieldError(date)}
							aria-labelledby="activity-date-label"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Box>
					{/* Klockslag */}
					<Box>
						<Typography id="activity-time-label">Tid</Typography>
						<TextField
							label="Ange tid då aktiviteten är menad att börja"
							type="time"
							variant="outlined"
							fullWidth
							value={time}
							onChange={(e) => setTime(e.target.value)}
							required
							error={getFieldError(time)}
							aria-labelledby="activity-time-label"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Box>
					{/* Övrig information */}
					<Box>
						<Typography id="activity-otherinfo-label">
							Övrig information
						</Typography>
						<TextField
							label="Här anger du annan information av värde"
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
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Button
							type="submit"
							variant="contained"
							fullWidth
							sx={{
								backgroundColor: "#0B6058",
								color: "white",
								padding: "4px 30px",
								borderRadius: "8px",

								width: "50%",
								"&:hover": {
									backgroundColor: "#8A4133",
									transform: "scale(1.05)",
								},
							}}
							aria-label="Skicka formuläret för att skapa en ny aktivitet"
						>
							Skapa aktivitet
						</Button>
					</Box>
				</Box>
			</form>

			{/* Snackbar-komponenten */}
			<Snackbar
				open={snackbarOpen}
				autoHideDuration={4000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				aria-live="assertive"
				aria-describedby="snackbar-message"
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackbarSeverity}
					sx={{ width: "100%" }}
				>
					<span id="snackbar-message">{snackbarMessage}</span>
				</Alert>
			</Snackbar>
		</Box>
	);
};

export default CreateActivityForm;
