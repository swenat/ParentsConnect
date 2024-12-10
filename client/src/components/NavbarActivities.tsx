// src/components/NavbarHome.tsx
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const NavbarActivities: React.FC = () => {
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: "white",
				color: "black",
				boxShadow: "none",
				borderBottom: "1px solid #e0e0e0",
			}}
		>
			<Toolbar>
				<Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
					{/* Använd Link-komponenten för navigering */}
					<Link to="/" style={{ textDecoration: "none" }}>
						<Typography variant="h6" component="div">
							ParentsConnect
						</Typography>
					</Link>
				</Box>
				{/* Länkar */}
				<Box sx={{ display: "flex", gap: 3 }}>
					<Button sx={{ textTransform: "none" }}>Aktiviteter Hemma</Button>
					<Button sx={{ textTransform: "none" }}>Föräldraforum</Button>
					<Button sx={{ textTransform: "none" }}>Produkter & Rabatter</Button>

					{/* Mer information med Accordion */}
					<Accordion
						sx={{
							display: "inline-block",
							boxShadow: "none",
							width: "auto",
							margin: 0,
							backgroundColor: "transparent",
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							sx={{ padding: 0 }}
						>
							<Button sx={{ textTransform: "none" }}>Mer information</Button>
						</AccordionSummary>
						<AccordionDetails sx={{ padding: "8px 16px" }}>
							<Box>
								<Button
									sx={{
										textTransform: "none",
										display: "block",
										marginBottom: 1,
									}}
								>
									Kontakta oss
								</Button>
								<Button sx={{ textTransform: "none", display: "block" }}>
									Användartips
								</Button>
							</Box>
						</AccordionDetails>
					</Accordion>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavbarActivities;
