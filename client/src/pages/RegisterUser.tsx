import {
	Alert,
	Box,
	Button,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterUser: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [openSnackbar, setOpenSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
		"success"
	);

	const [errors, setErrors] = useState({
		name: false,
		email: false,
		password: false,
	});

	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });

		setErrors((prev) => ({ ...prev, [e.target.name]: false }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const newErrors = {
			name: formData.name === "",
			email: !formData.email.includes("@"),
			password: formData.password.length < 6,
		};
		setErrors(newErrors);

		// Om det finns några fel, avbryt submit
		if (Object.values(newErrors).includes(true)) {
			return;
		}
		try {
			const response = await axios.post(
				process.env.VITE_API_URL + "/api/users",
				formData
			);
			console.log("User registered:", { ...response.data, password: "*****" });

			setSnackbarMessage("Registreringen lyckades! Vad god logga in");
			setSnackbarSeverity("success");
			setOpenSnackbar(true);

			setTimeout(() => {
				navigate("/login");
			}, 2000);
		} catch (error: any) {
			console.error("Registration error:", error);

			if (error.response && error.response.status === 400) {
				const backendErrors = error.response.data.errors || {};
				setErrors({
					name: !!backendErrors.name,
					email: !!backendErrors.email,
					password: !!backendErrors.password,
				});
				// Visa felmeddelanden i Snackbar om det behövs
				setSnackbarMessage(
					"Korrigera felen: Se till att namn och lösenord inte är tomma och ange en giltig e-postadress."
				);
				setSnackbarSeverity("error");
				setOpenSnackbar(true);
			} else {
				setSnackbarMessage("Något gick fel vid registreringen.");
				setSnackbarSeverity("error");
				setOpenSnackbar(true);
			}
		}
	};

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
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
				<Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
					Logga in
				</Link>
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
					autoFocus
					value={formData.name}
					onChange={handleChange}
					id="name-label"
					aria-labelledby="name-label"
					error={errors.name}
					helperText={errors.name ? "Namn är obligatoriskt." : " "}
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
					inputMode="email"
					error={errors.email}
					helperText={
						errors.email
							? "E-postadressen måste innehålla @ och en domän, t.ex. example@mail.com."
							: " "
					}
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
					error={errors.password}
					helperText={
						errors.password
							? "Lösenordet måste vara minst 6 tecken och inkludera en siffra samt ett specialtecken."
							: " "
					}
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
			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
				aria-live="assertive"
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackbarSeverity}
					sx={{ width: "100%" }}
				>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</Box>
	);
};

export default RegisterUser;
