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
					image="https://am3pap004files.storage.live.com/y4m-j6ibZ0nDOSHDuNBQmzp8n9v_S97U-YxfQLLj1gcrXhdvmaUjqSb4gl9Zc7kzSATe2B0tYEbxgcY_nIzjad20glqWiIrow1GzlVWHCPHOc8fSpDShJbIqhBsALxR6fGF1awn7a-sbJABwUzkG-ZUEMpEiADq_Xzd1ZGwiIcodelbGTE2Vki84xALL2NtfVYS3_DA3FUt2_cmW_a9kpuxGNk7oWnpzff6-rcsPP82Ceg?encodeFailures=1&width=1024&height=1024"
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
					image="https://am3pap004files.storage.live.com/y4mXKanDmCbrrFzBM3y7cvDtbS6OrZp1Rh-n6Jc5xs-3oV2aq4p4mkjaOv4STMZotkUgjvM4pQktIBcO7NunizPE8KVQbz4m1WCAw5xo6Nyz4wZXXn2XtZoVKda3396NpnpaPdN6meO1GvZo6oG4Nq8WC5khepFiP8b_cE1LGTFezxIIhmRbtsXYXfC5wEGb7lIE_677ZnlHrVKBTG2dAIkmbQ_aucNiu5dU4qRfaStLao?encodeFailures=1&width=1024&height=1024"
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
					image="https://am3pap004files.storage.live.com/y4mwkCGsm64crUcufcH8KktMulxl7La_z9TqQvxIIZIQTH3V6LIt1f614eoUYhwBFfmnd-uLarX4ahOrndIK8tIkIuIoGoPpVNBD9rguR7AmDj-efJDEzIkTVu6X2TGl7w40zvta0TlmDmuOV1OXYJ3i8qSQH47lWLW6-s7gHOfZewYe28RnwcpxxAw-szINSKUvqZf1y93YV4Oi_mkH1mx703H7MBEhRir7RgAUsspcwY?encodeFailures=1&width=1024&height=1024"
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