import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const AppLayout: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
};

export default AppLayout;
