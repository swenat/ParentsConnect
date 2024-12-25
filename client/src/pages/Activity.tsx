import { Box, Card, CardMedia, Divider, Typography } from "@mui/material";
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

				<Box sx={{ paddingLeft: { xs: "5px", lg: "32px" } }}>
					<Typography
						variant="h5"
						sx={{
							textAlign: { xs: "center", lg: "left" },
							paddingBottom: "5px",
							marginTop: "55px",
							paddingLeft: { xs: "5px", lg: "32px" },
						}}
					>
						Välkommen till vår Gemenskap
					</Typography>
					<Box
						sx={{
							display: "flex",
							alignItems: { xs: "center", md: "left" },
							flexDirection: { xs: "column", md: "row" },
							paddingLeft: { xs: "5px", lg: "32px" },
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
							variant="h5"
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
						width: "auto",
						height: "1px",
						backgroundColor: "#d3d3d3",
						marginTop: "16px",
					}}
				/>

				<Box
					sx={{
						paddingLeft: { xs: "5px", lg: "32px" },
						marginTop: "20px",
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
					<Typography sx={{ paddingBottom: "50px" }}>
						Mer än var tionde nybliven mamma och något under var tionde nybliven
						pappa visar tecken på depression under de första månaderna efter
						förlossning. Därför är det så viktigt att socialisera sig, be om
						hjälp och stöd under denna period. Det här är anledningen till
						varför vi finns. Läs 1177:s information om just detta.
					</Typography>{" "}
					<Box>
						<Card>
							<CardMedia
								sx={{ height: 300, width: 500, marginBottom: "80px" }}
								image="https://am3pap004files.storage.live.com/y4mci6JVhIOnvtjcGYyoDKxsaZTBfvaEtlXO5l_kHkh9WgOhS62IL6kvmAmuQ4hWuINObNMfUTP5vmFzzrk7ZAW4RS9RRz--fV_H9YaIJGI3uBKwe2Thr0yYO8JTN4_d7bpDb2vr7khLVugBqJlA4k9IiA9GVfZfS2rNssCBvO_h7Y7G9Nv3uAkynryjV-QrpRfns9Ba582VLb2uXZnnbLZXujb6QRSDMGsSv5jcTceIw0?encodeFailures=1&width=1280&height=853"
								title="användare registrerar sig på sidan"
								aria-label="En användare med en laptop registrerar sig på sidan"
							/>
						</Card>
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
