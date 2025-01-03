import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const GalleryComponent: React.FC = () => {
	const images = [
		{
			title: "Springtur",
			src: "https://cdn.pixabay.com/photo/2015/05/02/21/53/run-750466_1280.jpg",
			description: "Locka andra föräldrar att hänga med på en springtur",
		},
		{
			title: "Lekparkshäng",
			src: "https://cdn.pixabay.com/photo/2016/02/09/02/07/swing-1188132_1280.jpg",
			description:
				"Bjud in föräldrar och barn till en parkdag med ett tema, t.ex. skattjakt",
		},
		{
			title: "Familjepicknick",
			src: "https://cdn.pixabay.com/photo/2015/05/20/14/25/twins-775506_1280.jpg",
			description:
				"Arrangera en gemensam picknick där varje familj tar med en maträtt att dela",
		},
		{
			title: "Workshop",
			src: "https://cdn.pixabay.com/photo/2018/03/03/06/26/child-3194978_1280.jpg",
			description:
				"Pysselträff där barnen kan skapa något kul. Föräldrar kan mingla medan de hjälper till eller deltar",
		},
		{
			title: "Föräldrafika",
			src: "https://cdn.pixabay.com/photo/2023/07/11/00/01/coffee-8119278_1280.jpg",
			description: "En enkel fika föräldrar emellan för stöttning och samtal",
		},
		{
			title: "Skogstur",
			src: "https://cdn.pixabay.com/photo/2022/12/02/16/52/the-path-7631282_1280.jpg",
			description:
				"Upptäck skogen med barnen och njut av en liten picknick ihop",
		},
	];

	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: {
					xs: "repeat(1, 1fr)", // En kolumn för små skärmar
					sm: "repeat(2, 1fr)", // Två kolumner för medelstora skärmar
					md: "repeat(3, 1fr)", // Tre kolumner för större skärmar
				},
				gap: 2,
				padding: 2,
			}}
		>
			{images.map((image, index) => (
				<Card key={index} sx={{ height: "100%" }}>
					<CardMedia
						component="img"
						width="300"
						height="200"
						image={image.src}
						alt={image.title}
					/>
					<CardContent>
						<Typography variant="h6">{image.title}</Typography>
						<Typography variant="body2" color="text.secondary">
							{image.description}
						</Typography>
					</CardContent>
				</Card>
			))}
		</Box>
	);
};

export default GalleryComponent;
