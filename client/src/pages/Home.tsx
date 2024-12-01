import { Box, Typography } from "@mui/material";
import React from "react";
import NavbarHome from "../components/NavbarHome";

const Home: React.FC = () => {
	return (
		<div>
			<NavbarHome />
			{/* Sektion för text och bild */}
			<Box
				sx={{
					height: "864px",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					padding: "32px",
					boxSizing: "border-box",
					flexWrap: "wrap", // Responsiv på små skärmar
					alignItems: "flex-start",
				}}
			>
				{/* Sektion för rubrik och text */}
				<Box
					sx={{
						height: "640px",
						width: "616px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start", // Centrerar innehållet vertikalt
						alignItems: "flex-start", // Align till vänster
						padding: "32px",
						boxSizing: "border-box",
					}}
				>
					<Typography variant="h4" sx={{ marginBottom: "16px" }}>
						Välkommen till ParentsConnect!
					</Typography>
					<Typography variant="body1">
						Appen som hjälper föräldrar att skapa kontakter, få råd, kommunicera
						och hålla sig aktiverade. Genom att skapa aktiviteter och dela
						information kan du vara säker på att du alltid har koll på vad som
						händer.
					</Typography>
				</Box>

				{/* Sektion för bild */}
				<Box
					sx={{
						height: "640px",
						width: "616px",
						backgroundImage:
							"url('https://media-private.canva.com/PwzoM/MAGYCvPwzoM/1/p.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20241201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241201T054957Z&X-Amz-Expires=33157&X-Amz-Signature=0d7ef7f0c18874c32f316b210666c6d24969efcaf397877e6093bf062f7be159&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2001%20Dec%202024%2015%3A02%3A34%20GMT')",
						backgroundSize: "cover", // Gör bilden responsiv
						backgroundPosition: "center",
						borderRadius: "8px",
					}}
				/>
			</Box>
			{/* Media Query för små skärmar */}
			<Box
				sx={{
					"@media (max-width: 768px)": {
						flexDirection: "column", // På små skärmar ska sektionerna vara staplade vertikalt
						alignItems: "center", // Centrerar innehållet
						padding: "0",
						margin: 0,
					},
				}}
			></Box>
		</div>
	);
};

export default Home;
