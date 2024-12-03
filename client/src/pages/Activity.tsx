import { Box, Divider, Typography } from "@mui/material";
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
			<Box
				component="main"
				sx={{
					padding: 4,
				}}
			>
				{/* Sektion: Kalender och Aktiviteter */}
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						gap: 5,
						marginBottom: 3,
					}}
				>
					{/* Kalendersektionen */}
					<Box
						component="section"
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							padding: 2,
							bgcolor: "#ffffff",
							borderRadius: 2,
							textAlign: "left",
						}}
						aria-labelledby="calendar-title"
					>
						<Typography variant="h5" sx={{ fontSize: "32px", marginBottom: 2 }}>
							Välkommen
						</Typography>
						<Typography variant="body1" sx={{ fontSize: "18px", marginTop: 3 }}>
							Klicka dig in på kalendern för att se vilka aktiviteter som finns
							närmaste tiden
						</Typography>
						<Divider sx={{ marginBottom: 3 }} />
						<CalenderActivities onDateChange={setSelectedDate} />
					</Box>
					{/* Aktiviteter */}
					<Box
						component="section"
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							padding: 2,
							bgcolor: "#ffffff",
							borderRadius: 2,
						}}
						aria-labelledby="filtered-activities-title"
					>
						{" "}
						{/* Rubrik och avdelare */}
						<Typography variant="h5" sx={{ fontSize: "32px", marginBottom: 2 }}>
							Filtrerade aktiviteter
						</Typography>
						<Divider sx={{ marginBottom: 3, width: "80%" }} />
						<ActivitiesFiltered date={selectedDate} />
					</Box>
				</Box>
				{/* Formulärsektion */}
				<Box
					component="section"
					sx={{
						marginTop: 6,
						padding: 2,
						bgcolor: "#ffffff",
						borderRadius: 2,
						maxWidth: "800px",
						flex: 1,
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
					aria-labelledby="create-activity-title"
				>
					<Typography
						id="create-activity-title"
						variant="h5"
						sx={{ fontSize: "32px", marginBottom: 2 }}
					>
						Skapa en ny aktivitet
					</Typography>
					<Typography
						variant="body1"
						sx={{ fontSize: "18px", marginBottom: 3 }}
					>
						Fyll i formuläret nedan för att skapa en ny aktivitet.
					</Typography>
					<Divider sx={{ marginBottom: 3 }} />
					<CreateActivityForm />
				</Box>
			</Box>
		</LocalizationProvider>
	);
};

export default Activity;
