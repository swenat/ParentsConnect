import { Box, Button, Divider, Typography } from "@mui/material";
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

				<Box sx={{ paddingLeft: { xs: "9px", lg: "32px" }, marginTop: "20px" }}>
					<Typography
						variant="h2"
						sx={{
							fontWeight: "bold",
							fontSize: {
								xs: "1.75rem",
								sm: "2.25rem",
								md: "2.375rem",
							},
							paddingBottom: "5px",
							paddingLeft: { xs: "9px", lg: "32px" },
						}}
					>
						Välkommen till vår Gemenskap
					</Typography>
					<Box
						sx={{
							display: "flex",
							alignItems: { xs: "center", md: "left" },
							flexDirection: { xs: "column", md: "row" },
							paddingLeft: { xs: "0px", lg: "32px" },
						}}
					>
						<PhotoCardsActivity />
					</Box>
				</Box>
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
						<Typography
							variant="h4"
							sx={{ fontSize: "32px", marginBottom: 1 }}
							id="calendar-title"
						>
							Sök aktiviteter
						</Typography>
						<Typography variant="body1" sx={{ fontSize: "18px", marginTop: 3 }}>
							Klicka dig fram på kalendern för att se vad som finns den närmaste
							tiden. Vill du skapa egna aktiviteter, scrolla lite längre ner
							till aktivitetsformuläret.
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
						<Typography
							id="filtered-activities-title"
							variant="h5"
							sx={{ fontSize: "32px", marginBottom: 2 }}
						>
							Filtrerade aktiviteter
						</Typography>
						<Divider
							sx={{ marginBottom: 3, width: "80%", backgroundColor: "#54B694" }}
						/>
						<ActivitiesFiltered date={selectedDate} />
					</Box>
				</Box>

				<Box
					sx={{
						width: "100%",
						height: "1px",
						backgroundColor: "#d3d3d3",
						marginBottom: "16px",
					}}
				/>
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
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						gap: 3,
						borderRadius: 2,
						maxWidth: "1200px",
						margin: "0 auto",
						paddingLeft: { xs: "0px", lg: "48px" },
					}}
				/>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: { xs: "center", md: "flex-start" },
						textAlign: { xs: "center", md: "left" },
						marginTop: "20px",
						paddingLeft: { xs: "0px", lg: "48px" },
					}}
				>
					<Typography variant="body1">Artikel</Typography>
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
						}}
					>
						Alltfler nyblivna föräldrar söker hjälp mot nedstämdhet
					</Typography>
					<Typography
						variant="body1"
						sx={{ marginBottom: 3, padding: { xs: "2px" }, textAlign: "left" }}
					>
						Alltfler visar sig uppleva depression som förälder i småbarnsåldern
						och det är viktigt att hitta de tecken och söka hjälp där det går.
						Därför har vi skapat denna sida för att förhindra känslan av
						ensamhet och på så sätt få dig eller andra att känna sig mindre
						ensamma i sitt föräldraskap. Vill man veta mer om tecken att
						uppmärksamma så finns ett exempel på Region Kalmars hemsida nedan.
					</Typography>{" "}
					{/* Knappen "Läs artikel" */}
					<Box>
						<Button
							variant="contained"
							color="primary"
							href="https://vardgivare.regionkalmar.se/vard--behandling/psykisk-halsa/nya-foraldrar-med-depression---vardprogram/#"
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								marginBottom: "10px",
								padding: { xs: "8px 16px", sm: "10px 20px" },
								fontSize: { xs: "0.875rem", sm: "1rem" },
							}}
						>
							Läs artikel
						</Button>
					</Box>
					<Box
						sx={{
							flex: 1,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<img
							src="https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_1280.jpg"
							alt="En pappa med sitt spädbarn liggandes på bröstet"
							style={{ width: "100%", maxWidth: "500px", height: "auto" }}
						/>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					paddingLeft: { xs: "5px", lg: "32px" },
				}}
			>
				<Footer />
			</Box>
		</LocalizationProvider>
	);
};

export default Activity;
