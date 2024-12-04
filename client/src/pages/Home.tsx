import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";
import PhotoCardsHome from "../components/PhotoCardsHome";

const Home: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<NavbarHome />
			{/* Sektion för text och bild */}
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					justifyContent: "space-between",
					padding: "32px",
					gap: "32px",
					boxSizing: "border-box",
				}}
			>
				{/* Sektion för rubrik och text */}
				<Box
					sx={{
						width: { xs: "100%", md: "616px" },
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "flex-start",
					}}
				>
					<Typography
						variant="h2"
						sx={{
							outline: "none",
							fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "3.5rem" },
							fontWeight: "bold",
							marginBottom: "16px",
							"&:focus": {
								outline: "2px solid #493FFD",
							},
						}}
						tabIndex={0}
					>
						Välkommen till ParentsConnect!
					</Typography>
					<Typography variant="body1" sx={{ color: "#333" }}>
						Appen som hjälper föräldrar att skapa kontakter, få råd, kommunicera
						och hålla sig aktiverade. Genom att skapa aktiviteter och dela
						information kan du vara säker på att du alltid har koll på vad som
						händer.
					</Typography>
				</Box>

				{/* Sektion för bild */}
				<Box
					role="img"
					aria-label="Bild-URL"
					sx={{
						width: { xs: "100%", md: "616px" },
						height: "600px",
						backgroundImage:
							"url('https://am3pap004files.storage.live.com/y4mkQFNSJwi_tvVJTsWbeQD-nE_kaMdXHThfAq_fdgFrfioel2ROpdGRsxxcbl84MJh_c1PQW-ZcZ256vRPWamffglyFobkWGZ5NKf_fx6bKsmSX0yzG8nYR1Yyn4XWUC84Q3SIleQUgKhbhfIC4o1gox2_EETvEykp65pMmxcKgW3ZH8fmywONtNOMJqBnOEMWoz0vZyq0fETVSsgQwDNZddOf9hNMDa_Eat1hubl0c0Q?encodeFailures=1&width=1024&height=1024')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						borderRadius: "8px",
					}}
				/>
			</Box>
			<Box>
				<Typography variant="h5">Gemenskap 2024</Typography>
				<Box>
					<Typography variant="body2"></Typography>
					<PhotoCardsHome />
				</Box>
			</Box>
			{/* Footer-innehåll */}
			<Footer />
		</Box>
	);
};

export default Home;
