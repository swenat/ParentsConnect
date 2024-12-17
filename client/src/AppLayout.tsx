import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Activity from "./pages/Activity";
import Home from "./pages/Home";
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";

const AppLayout: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginUser />} />
				<Route path="/register" element={<RegisterUser />} />
				<Route path="/activity" element={<Activity />} />
			</Routes>
		</Router>
	);
};

export default AppLayout;
