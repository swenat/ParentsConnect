import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
	Alert,
	Box,
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Snackbar,
	Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ActivitiesFiltered: React.FC<{ date: string }> = ({ date }) => {
	const [activities, setActivities] = useState<any[]>([]);
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const userId = "someUserId";

	useEffect(() => {
		let intervalId: ReturnType<typeof setInterval>;

		const fetchActivities = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_API_URL}/api/activities/filter`,
					{
						params: { date },
					}
				);
				setActivities(response.data);
			} catch (error) {
				console.error("Failed to fetch activities", error);
			}
		};

		if (date) {
			fetchActivities(); // Initial fetch
			intervalId = setInterval(fetchActivities, 5000); // Kontrollera var 5:e sekund efter nya aktiviteter
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [date]);

	const handleThumbsUp = async (activityId: string) => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}/api/activities/attend/${activityId}`,
				{ userId }
			);
			setSnackbarMessage(
				`Du har anmält dig! Antal anmälda: ${response.data.attendees}`
			);
			setOpenSnackbar(true);
		} catch (error) {
			console.error("Failed to register user for activity", error);
		}
	};

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
	};

	return (
		<Box sx={{ justifyContent: { xs: "center" } }}>
			<Typography variant="h6">Valt datum: {date || "valt datum"}</Typography>
			{activities.length === 0 ? (
				<Typography>Inga aktiviteter för detta datum.</Typography>
			) : (
				activities.map((activity: any) => (
					<Card
						key={activity._id}
						sx={{
							marginBottom: 2,
							display: "flex",
							flexDirection: "column",
							gap: 2,
							width: { xs: "200px", md: "350px" },
							padding: "5px",
							border: "1px solid #ddd",
						}}
					>
						{/* Bild för aktiviteten */}
						<CardMedia
							component="img"
							image={activity.imageUrl || "/default-image.jpg"}
							alt={
								activity.imageUrl
									? `Bild av ${activity.activityname}`
									: "Standardbild"
							}
							style={{
								objectFit: "cover",
								maxHeight: "200px",
							}}
						/>
						<CardContent>
							{/* Aktivitetsnamn */}
							<Typography variant="h6" sx={{ fontWeight: "bold" }}>
								{activity.activityname}
							</Typography>
							{/* Plats */}
							<Typography variant="body2">
								<b>Plats: </b>
								{activity.location}
							</Typography>
							{/* Tid */}
							<Typography variant="body2">
								<b>Kl: </b>
								{activity.time}
							</Typography>
							{/* Övrig information */}
							<Typography variant="body2">
								<b>Info: </b>
								{activity.otherInfo}
							</Typography>
							{/* Antal anmälda */}
							<Typography variant="body2" color="text.secondary">
								<b>Antal anmälda: </b>
								{activity.attendees?.length || 0}
							</Typography>
							{/* Ikoner för Share och Bookmark */}
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									marginTop: 5,
									flexDirection: { xs: "column", md: "row" },
									textAlign: { xs: "center" },
								}}
							>
								<IconButton
									color="primary"
									aria-label={`Anmäl dig till ${activity.activityname}`}
									onClick={() => handleThumbsUp(activity._id)}
								>
									<ThumbUpIcon />
								</IconButton>
								{/* Texten "Anmäl dig" under ikonen */}
								<Typography variant="body2" sx={{ marginTop: 1 }}>
									Anmäl dig
								</Typography>
								<IconButton
									color="primary"
									aria-label={`Dela aktiviteten: ${activity.activityname}`}
									onClick={() => console.log("Dela aktiviteten")}
								>
									<ShareIcon
										sx={{
											fontSize: { xs: "1.5rem", md: "2rem" },
										}}
									/>
								</IconButton>
								<Typography variant="body2" sx={{ marginTop: 1 }}>
									Dela aktivitet
								</Typography>
								<IconButton
									color="secondary"
									aria-label={`Spara denna aktivitet: ${activity.activityname}`}
									onClick={() => console.log("Spara denna aktivitet")}
									sx={{
										fontSize: { xs: "1.2rem", md: "1.5rem" },
									}}
								>
									<BookmarkIcon
										sx={{
											fontSize: { xs: "1.5rem", md: "2rem" },
										}}
									/>
								</IconButton>
								<Typography variant="body2" sx={{ marginTop: 1 }}>
									Spara aktivitet
								</Typography>
							</Box>
						</CardContent>
					</Card>
				))
			)}
			{/* Snackbar för notifikationer */}
			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
				aria-live="assertive"
			>
				<Alert onClose={handleCloseSnackbar} severity="success">
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</Box>
	);
};

export default ActivitiesFiltered;
