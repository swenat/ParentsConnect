import { Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import ActivitiesFiltered from "../components/ActivitiesFiltered";
import CalenderActivities from "../components/CalendarActivities";
import CreateActivityForm from "../components/CreateActivityForm";

const Activity: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState("");

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Box sx={{ padding: 4 }}>
				<Typography variant="h4" gutterBottom>
					Utforska aktiviteter
				</Typography>
				<CalenderActivities onDateChange={setSelectedDate} />
				<ActivitiesFiltered date={selectedDate} />
				<Box sx={{ marginTop: 4 }}>
					<Typography variant="h5" gutterBottom>
						Skapa en ny aktivitet
					</Typography>
					<CreateActivityForm />
				</Box>
			</Box>
		</LocalizationProvider>
	);
};

export default Activity;
