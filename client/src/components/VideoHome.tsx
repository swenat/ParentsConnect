import { Box, Modal } from "@mui/material";
import React from "react";

interface VideoHomeProps {
	open: boolean;
	onClose: () => void;
}

const VideoHome: React.FC<VideoHomeProps> = ({ open, onClose }) => {
	return (
		<Modal open={open} onClose={onClose}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					bgcolor: "white",
					boxShadow: 24,
					p: 4,
					outline: "none",
				}}
			>
				<video width="100%" controls autoPlay onEnded={onClose}>
					<source src="src\assets\parentsvideo.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</Box>
		</Modal>
	);
};

export default VideoHome;
