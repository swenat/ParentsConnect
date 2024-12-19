import { Box, Button, Typography } from "@mui/material";
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
					gap: "10px",
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
						Välkommen!
					</Typography>
					<Typography variant="body1" sx={{ color: "black" }}>
						Vi hjälper föräldrar att skapa kontakter med andra föräldrar, få
						råd, kommunicera och hålla sig aktiverade. Genom att skapa
						aktiviteter och dela information kan du vara säker på att du alltid
						är ett steg bort ifrån en eller flera givande träffar.
					</Typography>
					<Box>
						<Button>Klicka här för mer info</Button>
					</Box>
				</Box>

				{/* Sektion för bild */}
				<Box
					role="img"
					aria-label="Bild-URL"
					sx={{
						width: { xs: "100%", md: "616px" },
						height: "500px",
						backgroundImage:
							"url('https://am3pap004files.storage.live.com/y4mlMGZWRLcWoPF1ZYBwnYZj0j5wLezAtstrV3g6SGmKQ0WJlvZgQ5N_dg9EH-b0dMn4GHEcEO09cD9bwNdf3ZkEoDQoWP4YR4n-7Gu2hBZcqSaLifyJuzihb_OcQxb9MS04-p2o3fcbO6yzUbvvmSyP_XsjDMUg9pg0v_ZSWYPwg1auPwaRF3q-Akk4I6JeHAsEbaeAwUeid_edYpL9jDTL1qI311uh2auWz4r_Is5R8o?encodeFailures=1&width=1366&height=1366')",
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
					paddingTop: "14px",
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
