import { Box, Divider, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import ActivitiesFiltered from "../components/ActivitiesFiltered";
import CalenderActivities from "../components/CalendarActivities";
import CreateActivityForm from "../components/CreateActivityForm";
import Footer from "../components/Footer";
import GalleryComponent from "../components/GalleryComponent";
import NavbarActivities from "../components/NavbarActivities";
import PhotoCardsActivity from "../components/PhotoCardsActivity";

const Activity: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState("");

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Box
				component="main"
				sx={{
					padding: 0,
					margin: 0,
				}}
			>
				<NavbarActivities />
				{/* Sektion: Kalender och Aktiviteter */}
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						gap: 5,
						marginTop: "15px",
						padding: { xs: 2, sm: 3 },
					}}
				>
					{/* Kalendersektionen */}
					<Box
						component="section"
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: { xs: "center", md: "flex-start" },
							padding: 2,
							bgcolor: "#ffffff",
							borderRadius: 2,
							textAlign: "left",
							paddingLeft: { xs: "5px", lg: "32px" },
							width: "100%",
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
						<Divider sx={{ marginBottom: 3, backgroundColor: "#54B694" }} />
						<CalenderActivities onDateChange={setSelectedDate} />
					</Box>
					{/* Aktiviteter */}
					<Box
						component="section"
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: { xs: "center", md: "flex-start" },
							padding: 2,
							bgcolor: "#ffffff",
							borderRadius: 2,
							width: "100%",
						}}
						aria-labelledby="filtered-activities-title"
					>
						{/* Rubrik och avdelare */}
						<Typography variant="h5" sx={{ fontSize: "32px", marginBottom: 2 }}>
							Filtrerade aktiviteter
						</Typography>
						<Divider
							sx={{ marginBottom: 3, width: "80%", backgroundColor: "#54B694" }}
						/>
						<ActivitiesFiltered date={selectedDate} />
					</Box>
				</Box>
				{/* Formulär och Galleri sektion */}
				<Box
					sx={{
						marginTop: 6,
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						gap: 3,
						padding: 2,
						bgcolor: "#ffffff",
						borderRadius: 2,
					}}
				>
					{/* Formulärsektionen */}
					<Box
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: { xs: "center", md: "flex-start" },
							paddingLeft: { xs: "5px", lg: "32px" },
						}}
					>
						<CreateActivityForm />
					</Box>
					{/* Galleri-sektionen */}
					<Box
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							paddingLeft: { xs: "5px", lg: "32px" },
						}}
					>
						<Typography variant="h5" gutterBottom id="activity-examples">
							Tips på aktiviteter att skapa
						</Typography>
						<GalleryComponent aria-labbeledby="activity-examples" />
					</Box>
				</Box>

				<Box sx={{ paddingLeft: { xs: "5px", lg: "32px" } }}>
					<Typography
						variant="h2"
						sx={{
							fontWeight: "bold",
							fontSize: {
								xs: "1.75rem",
								sm: "2.25rem",
								md: "2.375rem",
							},
							textAlign: { xs: "center", lg: "left" },
							paddingBottom: "5px",
							marginTop: "55px",
						}}
					>
						Gemenskap 2024
					</Typography>
					<Box
						sx={{
							display: "flex",
							alignItems: { xs: "center", md: "left" },
							flexDirection: { xs: "column", md: "row" },
						}}
					>
						<PhotoCardsActivity />
					</Box>
				</Box>
				<Footer />
			</Box>
		</LocalizationProvider>
	);
};

export default Activity;
