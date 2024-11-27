// src/components/NavbarHome.tsx
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

const NavbarHome: React.FC = () => {
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
					sx={{
						backgroundColor: "#493FFD",
						color: "white",
						textTransform: "none",
						"&:hover": {
							backgroundColor: "#362FCC",
						},
					}}
				>
					Logga in
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NavbarHome;
