import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const RegisterUser: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:5000/api/users",
				formData
			);
			console.log("User registered:", response.data);
		} catch (error) {
			console.error("Registration error:", error);
		}
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				minHeight: "100vh",
				padding: 4,
			}}
		>
			<Typography
				variant="h6"
				component="div"
				sx={{ marginBottom: 2, textAlign: "center" }}
			>
				ParentsConnect
			</Typography>
			<Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
				Registrera dig
			</Typography>
			<Typography variant="h6" sx={{ marginBottom: 1, textAlign: "center" }}>
				Redan medlem?
			</Typography>
			<Typography variant="body2" sx={{ marginBottom: 1, textAlign: "center" }}>
				Logga in
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: 2,
					marginBottom: 4,
					maxWidth: "800px",
					textAlign: "center",
				}}
			>
				<Box
					sx={{
						flex: "1 1 300px",
						padding: 2,
					}}
				>
					<Typography>
						Fyll i dina uppgifter för att börja skapa kontakter och aktiviteter!
					</Typography>
				</Box>
			</Box>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					width: "100%",
					maxWidth: "400px",
				}}
			>
				<TextField
					label="Namn"
					name="name"
					variant="outlined"
					fullWidth
					required
					value={formData.name}
					onChange={handleChange}
					id="name"
					aria-labelledby="name-label"
				/>
				<TextField
					label="E-post"
					name="email"
					type="email"
					variant="outlined"
					fullWidth
					required
					value={formData.email}
					onChange={handleChange}
					id="email"
					aria-labelledby="email-label"
				/>
				<TextField
					label="Lösenord"
					name="password"
					type="password"
					variant="outlined"
					fullWidth
					required
					value={formData.password}
					onChange={handleChange}
					id="password"
					aria-labelledby="password-label"
					aria-describedby="password-helper"
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					sx={{ textTransform: "none" }}
				>
					Registrera dig
				</Button>
			</Box>
		</Box>
	);
};

export default RegisterUser;
