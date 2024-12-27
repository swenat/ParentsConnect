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
			src: "https://am3pap004files.storage.live.com/y4m8JT69C182U4FQlu7P5pShJkkUvv402ni9LpEkXhDDPND5pA4-k5_RlmyL2UJOKYyJsPL4EdO5odArihmu7KXq2QqiZioKYRG3vh_IYsn-30N9F703oREF0LTVZNT-7WPm4PHIez548uHeftHHP1PXhmkQQG9KVyg_mESmmXb_rmyp0gsTdRrAG_xhR8sbtZ4Q-8pY2k10yidmAPxGcXUWz2yJy-dEfGVMIfvls2A65Q?encodeFailures=1&width=1280&height=853",
			description:
				"Pysselträff där barnen kan skapa något kul. Föräldrar kan mingla medan de hjälper till eller deltar",
		},
		{
			title: "Föräldrafika",
			src: "https://am3pap004files.storage.live.com/y4mkl0NSlgy6-Qe4XhLmBvFqA6g_f1OzHCeN8T6zafYuzbWXUBwDYkNlEDnEA2lVNrAgbRTIHL6DvVpSBR7grh17VU_Y6BbDQzvsyLMkSRfgsFlKqLW4x_P4EU2iAq_6QHRLn-Hkmvy7eT_bajCmoJjmrkr_33xJp-Olc5pAlhvAF4UJMBIou1frFpvQfh9trJJwrkFVlhq7UcYuYxfoan7PlWaHkeOBs_P2lr7BMhgRc4?encodeFailures=1&width=1280&height=854",
			description: "En enkel fika föräldrar emellan för stöttning och samtal",
		},
		{
			title: "Skogstur",
			src: "https://am3pap004files.storage.live.com/y4mD6cfv9mlDy2skJGiGoJgQcTykIAcMjqu6mXLk2TvUUcVz6XNYVbnXKLKHo9kwjSstDBhiEivEFMZQoz_xr5HJ__gm7bGQvbBr8ggv_ilEuawnhIOyhrQQyvYliPGNnQ0jFYj6Lqe38_6HZo5yVn7NBkt04d5ss1YlqQ-hI-9ZIRYgQXsPmqMxiNpe5u7vozZqLW1Za2Nm8--WjToW00RwSFOaJdoOFdHjm7j7XhHwTg?encodeFailures=1&width=1280&height=854",
			description: "Upptäck skogen med barnen och njut av en liten picknick",
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
				padding: 1,
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
