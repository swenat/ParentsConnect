import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const PhotoCardsActivity: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				gap: 15,
				justifyContent: "left",
				flexDirection: { xs: "column", md: "row" },
				marginBottom: "30px",
			}}
		>
			{/* Första kortet */}
			<Card sx={{ maxWidth: { xs: "100%", sm: 345 } }}>
				<CardMedia
					sx={{ height: 220 }}
					image="https://cdn.pixabay.com/photo/2023/03/12/13/27/mountains-7846880_1280.jpg"
					title="människor hajkande ett isberg"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Träffa likasinnade
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						Bygg meningsfulla relationer med föräldrar som delar dina intressen
						och livserfarenheter. Oavsett om det är för stöd, glädje eller
						gemensamma aktiviteter, hittar du en plats att höra till.
					</Typography>
				</CardContent>
			</Card>
			{/* Andra kortet */}
			<Card sx={{ maxWidth: { xs: "100%", sm: 345 } }}>
				<CardMedia
					sx={{ height: 220 }}
					image="https://cdn.pixabay.com/photo/2016/01/06/21/37/dad-1125002_1280.jpg"
					title="pappa-barnpromenad"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Främja ditt välmående
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						Dela dina upplevelser och ta del av andras för att främja mental och
						fysisk hälsa. Genom gemenskapen kan du skapa en positiv förändring i
						vardagen.
					</Typography>
				</CardContent>
			</Card>
			{/* Tredje kortet */}
			<Card sx={{ maxWidth: { xs: "100%", sm: 345 } }}>
				<CardMedia
					sx={{ height: 220 }}
					image="https://cdn.pixabay.com/photo/2017/06/27/21/13/team-spirit-2448837_1280.jpg"
					title="händer korsade med varandra"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Ta stöd av varandra
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						Att vara förälder är kul men kan kännas svårt ibland. Här kan du
						känna dig trygg och få chansen att växa tillsammans med andra.
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default PhotoCardsActivity;
