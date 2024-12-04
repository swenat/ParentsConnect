import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#ffffff",
				padding: "20px 0",
				display: "flex",
				flexDirection: "column",
				marginTop: "auto",
				borderTop: "1px solid #ddd",
				overflowX: "hidden",
			}}
		>
			{/* Inre container */}
			<Container
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: { xs: "center", md: "flex-start" },
					justifyContent: "space-between",
					gap: 4,
					width: "100%",
					maxWidth: "1312px",
					textAlign: { xs: "center", md: "left" },
					paddingX: { xs: 2, md: 0 },
				}}
			>
				{/* Vänster sektion */}
				<Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
					<Typography
						variant="h1"
						sx={{
							marginBottom: "8px",
							fontWeight: "bold",
							fontSize: { xs: "1.2rem", sm: "1.5rem" },
						}}
					>
						Välkommen till vår föräldragemenskap
					</Typography>
					<Typography
						variant="body2"
						sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
					>
						En plats där föräldrar kan planera, nätverka och skapa nya minnen
						tillsammans.
					</Typography>
				</Box>

				{/* Mitten sektion */}
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						flex: 2,
						gap: { xs: 2, md: 4 },
						justifyContent: "center",
						width: "100%",
					}}
				>
					{/* Länkar */}
					<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
						{[
							"Läs om oss",
							"Kontakta oss",
							"Blogg",
							"Evenemang",
							"Produkter",
						].map((text, idx) => (
							<Link
								key={idx}
								href="#"
								color="inherit"
								underline="none"
								sx={{ fontSize: "14px" }}
							>
								{text}
							</Link>
						))}
					</Box>

					<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
						{["Rabatter", "Forum", "Support", "FAQ", "Användarvillkor"].map(
							(text, idx) => (
								<Link
									key={idx}
									href="#"
									color="inherit"
									underline="none"
									sx={{ fontSize: "14px" }}
								>
									{text}
								</Link>
							)
						)}
					</Box>
				</Box>

				{/* Sociala ikoner */}
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						gap: 2,
						flexWrap: "wrap",
					}}
				>
					<Link
						href="https://www.facebook.com"
						color="inherit"
						aria-label="Facebook"
					>
						<FacebookIcon fontSize="medium" />
					</Link>
					<Link
						href="https://www.instagram.com"
						color="inherit"
						aria-label="Instagram"
					>
						<InstagramIcon fontSize="medium" />
					</Link>
					<Link
						href="https://www.linkedin.com"
						color="inherit"
						aria-label="Linkedin"
					>
						<LinkedInIcon fontSize="medium" />
					</Link>
					<Link
						href="https://www.youtube.com"
						color="inherit"
						aria-label="Youtube"
					>
						<YouTubeIcon fontSize="medium" />
					</Link>
				</Box>
			</Container>

			{/* Nedre sektion */}
			<Box
				sx={{
					width: "100%",
					marginTop: "20px",
					paddingTop: "20px",
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: "center",
					justifyContent: "center",
					textAlign: { xs: "center", md: "left" },
					gap: { xs: 2, md: 3 },
					paddingX: { xs: 2, md: 0 },
				}}
			>
				{/* Upphovsrätt */}
				<Typography
					variant="body2"
					sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
				>
					© 2024 ParentsConnect. Alla rättigheter förbehållna.
				</Typography>

				{/* Länkar */}
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						justifyContent: "center",
						gap: { xs: 1, sm: 3 },
					}}
				>
					<Link href="#" color="inherit" underline="none">
						Integritetspolicy
					</Link>
					<Link href="#" color="inherit" underline="none">
						Användarvillkor och tjänster
					</Link>
					{/* <Link href="#" color="inherit" underline="none">
						Cookie-inställningar
					</Link> */}
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
