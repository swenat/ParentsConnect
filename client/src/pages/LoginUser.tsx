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
import { useNavigate } from "react-router-dom";

const LoginUser: React.FC = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [openSnackbar, setOpenSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
		"success"
	);

	const [errors, setErrors] = useState({
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
				process.env.VITE_API_URL + "/api/users/login",
				formData
			);

			// Om inloggning lyckas
			if (response.data && response.data.message) {
				setSnackbarMessage(response.data.message); // Visa meddelande från servern
			} else {
				setSnackbarMessage("Inloggning lyckades!"); // Standardmeddelande
			}
			setSnackbarSeverity("success");
			setOpenSnackbar(true);

			setTimeout(() => {
				navigate("/activity");
			}, 2000);
		} catch (error: any) {
			console.error("Login error:", error);

			if (error.response && error.response.status === 400) {
				setSnackbarMessage("Felaktig e-post eller lösenord.");
				setSnackbarSeverity("error");
				setOpenSnackbar(true);
			} else {
				setSnackbarMessage("Något gick fel vid inloggningen.");
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
			<Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
				ParentsConnect
			</Typography>
			<Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
				Logga in
			</Typography>
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
					label="E-post"
					name="email"
					type="email"
					variant="outlined"
					fullWidth
					required
					value={formData.email}
					onChange={handleChange}
					error={errors.email}
					helperText={errors.email ? "Ogiltig e-postadress." : " "}
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
					error={errors.password}
					helperText={errors.password ? "Lösenordet är för kort." : " "}
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					sx={{ textTransform: "none" }}
				>
					LOGGA IN
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

export default LoginUser;
