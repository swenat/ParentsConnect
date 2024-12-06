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
					<Typography variant="h6" component="div">
						ParentsConnect
					</Typography>
				</Box>

				<Button
					aria-label="Logga in"
					sx={{
						backgroundColor: "#3126FD",
						color: "white",
						marginRight: "10px",
						textTransform: "none",
						borderRadius: "8px",
						"&:hover": {
							backgroundColor: "#09028D",
						},
					}}
				>
					Logga in
				</Button>
				<Button
					aria-label="Registrera dig"
					onClick={() => navigate("/register")}
					sx={{
						backgroundColor: "#18C1E7",
						color: "white",
						textTransform: "none",
						borderRadius: "8px",
						"&:hover": {
							backgroundColor: "#2BA5C1",
						},
					}}
				>
					Registrera dig
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NavbarHome;
