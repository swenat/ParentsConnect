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
				</Toolbar>
			</Box>
		</AppBar>
	);
};

export default NavbarHome;
