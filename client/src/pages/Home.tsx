import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";
import RegisterInfo from "../components/RegisterInfo";

const Home: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				gap: 8,
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
					paddingLeft: { xs: "5px", lg: "32px" },
					gap: "32px",
					boxSizing: "border-box",
					backgroundColor: "white",
					alignItems: "flex-start",
				}}
			>
				{/* Sektion för rubrik och text */}
				<Box
					sx={{
						width: { xs: "100%", md: "616px" },
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Typography
						sx={{
							outline: "none",
							fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "3.5rem" },
							fontWeight: "bold",
							marginBottom: "16px",
							color: "black",
							"&:focus": {
								outline: "2px solid #493FFD",
							},
						}}
						tabIndex={0}
					>
						Välkommen till ParentsConnect!
					</Typography>
					<Typography variant="body1" sx={{ color: "black" }}>
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
						height: "500px",
						backgroundImage:
							"url('https://am3pap004files.storage.live.com/y4mByk2aCCkcwy8lOTDbZ6dI_6hsUij9ehcsqrCKrXrtuF6N-KbjIqMaYTk3iDC3xVc7xTbniFiJhTITPkRijF-v5ONqojwp7lD6oGvyznBDUbenNAW6udhALP1RjHOn18nluhaEqYNAbWibFphqVCkO61Mgg4HhNx-3iBAPsBA0X8XTJxOZS_lDExUXCviZYSVPqrsw8i0TaimvOz5xew3cXUx29G17uO0YoFmY74N3GI?encodeFailures=1&width=694&height=464')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						borderRadius: "none",
					}}
				/>
			</Box>
			<Box
				sx={{
					paddingLeft: { xs: "5px", lg: "32px" },
					borderTop: "1px solid #e0e0e0",
					paddingTop: "16px",
				}}
			>
				<Typography variant="body1">Anslutning</Typography>
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
					Så här använder du vår applikation
				</Typography>
				<Typography sx={{ paddingBottom: "50px" }}>
					Vår sida är fylld av roliga aktiviteter att gå med i men först behöver
					du följa stegen nedan
				</Typography>

				<Box
					sx={{
						display: "flex",
						alignItems: { xs: "center", md: "left" },
						flexDirection: { xs: "column", md: "row" },
					}}
				>
					<RegisterInfo />
				</Box>
			</Box>
			{/* Footer-innehåll */}
			<Footer />
		</Box>
	);
};

export default Home;
