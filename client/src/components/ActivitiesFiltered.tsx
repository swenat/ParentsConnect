import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ActivitiesFiltered: React.FC<{ date: string }> = ({ date }) => {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		if (date) {
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
			fetchActivities();
		}
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
						}}
					>
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
