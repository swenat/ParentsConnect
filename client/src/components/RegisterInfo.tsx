import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const RegisterInfo: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				gap: 15,
				justifyContent: "left",
				flexDirection: { xs: "column", md: "row" },
				// paddingBottom: 2,
				// paddingX: 2,
			}}
		>
			{/* Första kortet */}
			<Card sx={{ maxWidth: { xs: "100%", sm: 345 } }}>
				<CardMedia
					sx={{ height: 230 }}
					image="https://cdn.pixabay.com/photo/2020/05/01/07/59/flatlay-5115827_1280.jpg"
					title="användare registrerar sig på sidan"
					aria-label="En användare med en laptop registrerar sig på sidan"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Steg 1. Registrera dig
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						Registrera dig för att kunna ansluta dig till våra aktiviteter
					</Typography>
					<Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
						<Typography
							component={Link}
							to="/register"
							sx={{
								textDecoration: "none",
								color: "primary.main",
								display: "flex",
								alignItems: "center",
								fontWeight: "bold",
							}}
							aria-label="Registrera dig här, gå till registreringssidan"
						>
							Registrera dig här <ArrowForwardIcon sx={{ marginLeft: 0.5 }} />
						</Typography>
					</Box>
				</CardContent>
			</Card>
			{/* Andra kortet */}
			<Card sx={{ maxWidth: { xs: "100%", sm: 345 } }}>
				<CardMedia
					sx={{ height: 220 }}
					image="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_1280.jpg"
					title="En kvinna med en laptop framför sig"
					aria-label="En kvinna med en laptop framför sig"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Steg 2. Utforska aktiviteter
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						Bläddra bland aktiviteter på aktivitetssidan och anslut dig där du
						finner intresse
					</Typography>
				</CardContent>
			</Card>
			{/* Tredje kortet */}
			<Card sx={{ maxWidth: { xs: "100%", sm: 345 } }}>
				<CardMedia
					sx={{ height: 220 }}
					image="https://cdn.pixabay.com/photo/2017/01/17/03/57/desktop-1985856_1280.jpg"
					title="En man med en laptop framför sig"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Steg 3. Var med och skapa aktiviteter
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						Engagera dig och skapa aktiviteter som du tycker saknas och sprid
						glädje! Svårare än så är det inte :)
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default RegisterInfo;
