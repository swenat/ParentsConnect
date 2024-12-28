import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";
import RegisterInfo from "../components/RegisterInfo";
import ReusableVideo from "../components/ReusableVideo";

const Home: React.FC = () => {
	const handleVideoEnd = () => {
		console.log("Videon är klar!");
	};
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
			{/* Video Banner */}
			<Box
				sx={{
					width: "100%",
					height: { xs: "200px", sm: "350px", md: "500px" },
					overflow: "hidden",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#000",
				}}
			>
				<ReusableVideo
					src="https://www.canva.com/design/DAGZwp3aY2k/_RSci10xxI_683JlL3Dj7g/watch"
					autoPlay
					loop
					onEnded={handleVideoEnd}
					style={{
						borderRadius: "8px",
						boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
					}}
				/>
			</Box>
			{/* Sektion för text och bild */}
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					justifyContent: "space-between",
					paddingLeft: { xs: "5px", lg: "32px" },
					gap: "5px",
					boxSizing: "border-box",
					backgroundColor: "white",
					alignItems: "flex-start",
					borderTop: "1px solid #e0e0e0",
					borderBottom: "1px solid #e0e0e0",
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
							marginBottom: "10px",
							marginTop: "20px",
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
							"url('https://am3pap004files.storage.live.com/y4mA-jwu0DpMnqtnVSAcugyJK-Rd4Mq0_FnBe74yR4SmXD40zwQucpfWehsIlJ8cN96uuh331KUhp1jTSzMbXCspHVN9QYj2xe9JCSTxKzr3X7MClB6ziS7CKu_isBom253gjbs9dvyCtZ5_AMSonB6n9tBuvTx4Wo_ZvJdnqqywdMGTt-CW3d7SVSMIRYhvv36aee1MH0XpMkXQ7og3PUl48gi96IufqeY11Zu7w84A24?encodeFailures=1&width=1958&height=1366')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						borderRadius: "none",
						paddingRight: "5px",
					}}
				/>
			</Box>
			<Box
				sx={{
					paddingLeft: { xs: "5px", lg: "32px" },
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
