import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const PhotoCardsHome: React.FC = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				gap: 15,
				justifyContent: "left",
				flexDirection: { xs: "column", md: "row" },
				// paddingBottom: 2,
				// paddingX: 2,
			}}
		>
			{/* Första kortet */}
			<Card sx={{ maxWidth: { xs: "100%", sm: 345 } }}>
				<CardMedia
					sx={{ height: 220 }}
					image="https://am3pap004files.storage.live.com/y4m0W8CtGrtow8uvdvXmqezVrghGdd8PwBYU8pk8w1l16kJJAeg7ow-w5_Zw6mRPvnUNj9yA6tT3yFqBUC7WHCir5W7qzWq40UU1uD3_aVScZtaY_tzqhRiHRK8tL15wfWSiyVdlPle8QrIvUUfM_HSvR-458_rMZEr9sHgCh6S-VW7ZTvPYvlhYgwAWxL64JGnVicdd1Pnlk40lllOlebrdmX3sDZgfP_6EmSnJIjCMNg?encodeFailures=1&width=1024&height=1024"
					title="föräldrar-i-parken"
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
					image="https://am3pap004files.storage.live.com/y4mgRtUHznhleYNM93tOzW-Z6rwrAQi8F3-Pb3s0sZkRDPplW3c44hTBRP47YEPVJv_-w75hoBDEvsY75zQn95V3caogaIw5Rd2Xy0z3htsGSHGb_u2eZd6ebEd6_LY76J45bxEw8rtQq1BUDWnFZQmwad4tEyEZV6yyRFss7LQueeFNj6lY8yNxvgbTqujBlNBHEABEZxqRQk8Nv5k79dOMecmbi8lrHN6IYPuQy7XJH8?encodeFailures=1&width=1024&height=1024"
					title="pappor-barnvagnspromenad"
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
					image="https://am3pap004files.storage.live.com/y4mJ8_gbn_CsrJ9O5Y-XbwldMTsxNim6OLkHsEvor-sxjDX5c0FLqwDO0rLNDwmI7w60BqV1_RUFpVgnZ2PNlNpg_PDXPOMNLKAiJMvz6K4AmllJMkpgvp1_Pu1VFJsgtc__OUkIR4mnke5d-2gxaHDBjo7HObG22gC3AoEGm7VzXy15r4Vh-oGetW-E5QAmHEGphGXJGn48ZD5umjQOhnZJLa5AknKC4Y7EneEohWLerg?encodeFailures=1&width=1024&height=1024"
					title="föräldrar-lekplats-med-barn"
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

export default PhotoCardsHome;
