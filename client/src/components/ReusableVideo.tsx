import React from "react";

interface ReusableVideoProps {
	src: string; // Videokällan
	controls?: boolean; // Valfritt: ska kontroller visas
	autoPlay?: boolean; // Valfritt: ska videon starta automatiskt
	loop?: boolean; // Valfritt: ska videon loopa
	onEnded?: () => void; // Valfritt: funktion att köra när videon är klar
	className?: string; // För styling
	style?: React.CSSProperties; // Inline-styling
	width?: string;
	height?: string;
}

const ReusableVideo: React.FC<ReusableVideoProps> = ({
	src,
	controls = true,
	autoPlay = true,
	loop = true,
	onEnded,
	className,
	style,
}) => {
	return (
		<video
			src={src}
			controls={controls}
			autoPlay={autoPlay}
			loop={loop}
			onEnded={onEnded}
			muted={true}
			className={className}
			style={style}
			width="100%" // Standardbredd (kan ändras via props)
		>
			Your browser does not support the video tag.
		</video>
	);
};

export default ReusableVideo;
