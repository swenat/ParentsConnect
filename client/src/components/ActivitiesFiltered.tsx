import { Box, Typography } from "@mui/material";
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
			<Typography variant="h6">
				Aktiviteter för {date || "valt datum"}
			</Typography>
			{activities.length === 0 ? (
				<Typography>Inga aktiviteter för detta datum.</Typography>
			) : (
				activities.map((activity: any) => (
					<Box
						key={activity._id}
						sx={{
							marginBottom: 2,
							padding: 2,
							border: "1px solid gray",
							borderRadius: 2,
							display: "flex",
							gap: 2,
							alignItems: "center",
						}}
					>
						{/* Bild för aktiviteten */}
						<img
							src={activity.imageUrl}
							alt={activity.activityname}
							style={{
								width: "100px",
								height: "100px",
								objectFit: "cover",
								borderRadius: "8px",
							}}
						/>
						{/* Textinformation */}
						<Typography variant="h6">{activity.activityname}</Typography>
						<Typography>{activity.location}</Typography>
						<Typography>{activity.time}</Typography>
						<Typography>{activity.otherInfo}</Typography>
					</Box>
				))
			)}
		</Box>
	);
};

export default ActivitiesFiltered;
