import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ActivitiesFiltered: React.FC<{ date: string }> = ({ date }) => {
	const [activities, setActivities] = useState<any[]>([]);

	useEffect(() => {
		let intervalId: ReturnType<typeof setInterval>;

		const fetchActivities = async () => {
			try {
				const response = await axios.get(
					"http://localhost:5000/api/activities/filter",
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
			intervalId = setInterval(fetchActivities, 5000); // Poll every 5 seconds to check for new activities
		}

		return () => {
			clearInterval(intervalId); //Clear interval
		};
	}, [date]);

	return (
		<Box>
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
							width: 300, // Justera bredden på korten om nödvändigt
						}}
					>
						{/* Bild för aktiviteten */}
						<CardMedia
							component="img"
							height="140"
							image={activity.imageUrl}
							alt={`Bild av ${activity.activityname}`}
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
							<Typography variant="body2">{activity.otherInfo}</Typography>
							{/* Ikoner för Share och Bookmark */}
							<Box
								sx={{
									display: "flex",
									justifyContent: "flex-end",
									marginTop: 2,
								}}
							>
								<IconButton
									color="primary"
									aria-label="Dela aktiviteten"
									onClick={() => console.log("Dela aktiviteten")}
								>
									<ShareIcon />
								</IconButton>
								<IconButton
									color="secondary"
									aria-label="Bokmärk aktiviteten"
									onClick={() => console.log("Bokmärk aktiviteten")}
								>
									<BookmarkIcon />
								</IconButton>
							</Box>
						</CardContent>
					</Card>
				))
			)}
		</Box>
	);
};

export default ActivitiesFiltered;
