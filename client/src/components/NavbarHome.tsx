// src/components/NavbarHome.tsx
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarHome: React.FC = () => {
	const navigate = useNavigate();

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

					<Button
						aria-label="Logga in"
						onClick={() => navigate("/login")}
						sx={{
							backgroundColor: "#275D4A",
							color: "white",
							marginRight: "10px",
							textTransform: "none",
							borderRadius: "8px",
							"&:hover": {
								backgroundColor: "#172C24",
							},
						}}
					>
						Logga in
					</Button>
					<Button
						aria-label="Registrera dig"
						onClick={() => navigate("/register")}
						sx={{
							backgroundColor: "#0A5D70",
							color: "white",
							textTransform: "none",
							borderRadius: "8px",
							"&:hover": {
								backgroundColor: "#052A33",
							},
						}}
					>
						Registrera dig
					</Button>
				</Toolbar>
			</Box>
		</AppBar>
	);
};

export default NavbarHome;
