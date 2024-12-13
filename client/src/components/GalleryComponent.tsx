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
			src: "https://am3pap004files.storage.live.com/y4mdnsfbQRlMQRGFVZ7gvd-EcR35Lp3iUZ9hob02KjTCfD5bIjHc0_3zKCA9C_NNWEghyjvgjcKc2Q0Aci6NXyNpVbUvr_BVsuj5aE0IMUeh5kt4D1yQ1v3Cg0GknSbGSM9SZqouBxOgfNrL0_5RMNH8mb3WI9Un-jWgNXuKeKffmF087UdLRev7EB0BZfz6GT4ywAjlpJXNss19mDOO9P88JtcHN7RLXwMEbyVTzRgsio?encodeFailures=1&width=1170&height=780",
			description:
				"Bjud in föräldrar och barn till en parkdag med ett tema, t.ex. skattjakt",
		},
		{
			title: "Familjepicknick",
			src: "https://am3pap004files.storage.live.com/y4mxjpl9-70uPE34iGhFTGuueyy9xLkYPC0b5Jc2coGUvnIFMvEoxeieAMsh8Y8-dIq7yioFBsDUt31HGDz0bxtZQEDUQPDbgqp0dIZywz2e1U4LIKwBfF1D2PFBWDwguSjJY3Vg-cnxuQfsNws5b66juS7hIIZhc0a5a0Ek5Sqv7mdcYfRIdvYOy2QGs3OIDWhkpIKsXUyxo1WG4fCwSo9EolcWTb3YsHTC0LOtZufp54?encodeFailures=1&width=850&height=638",
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
