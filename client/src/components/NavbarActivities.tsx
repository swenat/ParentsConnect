// src/components/NavbarHome.tsx
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarActivities: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			position="sticky"
			sx={{
				backgroundColor: "white",
				color: "black",
				boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
				borderBottom: "2px solid #e0e0e0",
				width: "100%",
			}}
		>
			<Toolbar
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: "center",
					justifyContent: "space-between",
					padding: { xs: 1, sm: 2 },
				}}
			>
				<Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
					<Link to="/" style={{ textDecoration: "none" }}>
						<Typography
							variant="h6"
							component="div"
							sx={{
								color: "#9F2B14",
								paddingLeft: { xs: "0px", md: "25px" },
							}}
						>
							ParentsConnect
						</Typography>
					</Link>
				</Box>
				{/* Länkar */}
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						alignItems: "center",
						gap: { xs: 1, md: 3 },
						mt: { xs: 2, md: 0 },
					}}
				>
					<Button
						sx={{ textTransform: "none", color: "#9F2B14" }}
						aria-label="Visa aktiviteter hemma"
					>
						Aktiviteter Hemma
					</Button>
					<Button
						sx={{ textTransform: "none", color: "#9F2B14" }}
						aria-label="Visa Föräldraforum"
					>
						Föräldraforum
					</Button>
					<Button
						sx={{ textTransform: "none", color: "#9F2B14" }}
						aria-label="Visa Produkter och Rabatter"
					>
						Produkter & Rabatter
					</Button>

					{/* Mer information med Accordion */}
					<Button
						sx={{ textTransform: "none", color: "#9F2B14" }}
						aria-controls={open ? "more-info-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleMenuOpen}
						endIcon={<ExpandMoreIcon />}
					>
						Mer information
					</Button>
					<Menu
						id="more-info-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleMenuClose}
						MenuListProps={{
							"aria-labelledby": "more-info-button",
						}}
					>
						<MenuItem onClick={handleMenuClose} sx={{ color: "#9F2B14" }}>
							Kontakta oss
						</MenuItem>
						<MenuItem onClick={handleMenuClose} sx={{ color: "#9F2B14" }}>
							Användartips
						</MenuItem>
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavbarActivities;
