// src/components/NavbarHome.tsx
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarHome: React.FC = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const navigate = useNavigate();

	const toggleDrawer = (open: boolean) => {
		setDrawerOpen(open);
	};

	// Länka till login och register
	const handleLoginClick = () => {
		navigate("/login");
		toggleDrawer(false); // Stäng menyn efter navigering
	};

	const handleRegisterClick = () => {
		navigate("/register");
		toggleDrawer(false); // Stäng menyn efter navigering
	};

	return (
		<AppBar
			position="sticky"
			sx={{
				backgroundColor: "white",
				color: "black",
				boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
				borderBottom: "1px solid #e0e0e0",
				width: "100%",
			}}
		>
			<Box
				sx={{
					margin: "0",
					width: "100%",
				}}
			>
				<Toolbar>
					<Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
						<Typography variant="h6" component="div">
							ParentsConnect
						</Typography>
					</Box>
					{/* Knapparna */}
					<Box
						sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
					>
						<Button
							aria-label="Logga in"
							onClick={() => navigate("/login")}
							sx={{
								backgroundColor: "#0B6058",
								color: "white",
								padding: "10px 20px",
								borderRadius: "15px",
								marginRight: "5px",
								"&:hover": {
									backgroundColor: "#8A4133",
									transform: "scale(1.05)",
								},
							}}
						>
							Logga in
						</Button>
						<Button
							aria-label="Registrera dig"
							onClick={() => navigate("/register")}
							sx={{
								backgroundColor: "#0B6058",
								color: "white",
								padding: "10px 20px",
								borderRadius: "15px",
								marginLeft: "5px",
								"&:hover": {
									backgroundColor: "#9F2B14",
									transform: "scale(1.05)",
								},
							}}
						>
							Registrera dig
						</Button>
					</Box>
					{/* Hamburger-menu för mobila enheter */}
					<Box sx={{ display: { xs: "block", sm: "none" } }}>
						<Button
							aria-label="Meny"
							sx={{
								backgroundColor: "#0B6058",
								color: "white",
								padding: "10px 20px",
								borderRadius: "15px",
								"&:hover": {
									backgroundColor: "#8A4133",
									transform: "scale(1.05)",
								},
							}}
						>
							☰
						</Button>
					</Box>
				</Toolbar>
			</Box>
			{/* Drawer (Hamburger meny) */}
			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={() => toggleDrawer(false)}
			>
				<Box
					sx={{
						width: 250,
						padding: 2,
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<Button
						onClick={handleLoginClick}
						sx={{
							backgroundColor: "#0B6058",
							color: "white",
							marginBottom: 2,
							width: "100%",
							borderRadius: "15px",
							"&:hover": {
								backgroundColor: "#8A4133",
							},
						}}
					>
						Logga in
					</Button>
					<Button
						onClick={handleRegisterClick}
						sx={{
							backgroundColor: "#0B6058",
							color: "white",
							width: "100%",
							borderRadius: "15px",
							"&:hover": {
								backgroundColor: "#9F2B14",
							},
						}}
					>
						Registrera dig
					</Button>
				</Box>
			</Drawer>
		</AppBar>
	);
};

export default NavbarHome;
