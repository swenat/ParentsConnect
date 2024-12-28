import React from "react";

interface ReusableVideoProps {
	src: string; // Videokällan
	style?: React.CSSProperties; // Inline-styling
	width?: string;
	height?: string;
}

const ReusableVideo: React.FC<ReusableVideoProps> = ({ src, style }) => {
	return (
		<iframe
			src={src}
			style={style}
			width="100%" // Standardbredd (kan ändras via props)
		>
			Your browser does not support the video tag.
		</iframe>
	);
};

export default ReusableVideo;
