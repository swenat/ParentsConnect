import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		"process.env": process.env || {},
	},
	build: {
		target: "esnext",
		outDir: "dist",
	},
	server: {
		host: "0.0.0.0",
		port: Number(process.env.PORT) || 5173,
	},
});
