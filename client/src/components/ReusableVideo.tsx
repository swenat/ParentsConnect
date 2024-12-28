import React from "react";

interface ReusableVideoProps {
	src: string; // Videokällan
	style?: React.CSSProperties; // Inline-styling
	width?: string;
	height?: string;
}

const ReusableVideo: React.FC<ReusableVideoProps> = ({
	src,
	style,
	width = 640,
	height = 360,
}) => {
	return (
		<iframe
			src={src}
			style={style}
			width={width}
			height={height}
			allow="autoplay; encrypted-media"
			allowFullScreen // Standardbredd (kan ändras via props)
		>
			Your browser does not support the video tag.
		</iframe>
	);
};

export default ReusableVideo;
