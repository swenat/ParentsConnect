import { Badge } from "@mui/material";
import { DateCalendar, PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const CalendarActivities: React.FC<{
	onDateChange: (date: string) => void;
}> = ({ onDateChange }) => {
	const [markedDates, setMarkedDates] = useState<Record<string, boolean>>({});
	const [reloadKey, setReloadKey] = useState(0);

	const fetchDatesWithActivities = async () => {
		try {
			const response = await axios.get("http://localhost:5000/api/activities");
			const dates = response.data.map((activity: any) => activity.date);
			const dateMarkers: Record<string, boolean> = {};
			dates.forEach((date: string) => {
				dateMarkers[date] = true;
			});
			setMarkedDates(dateMarkers);
		} catch (error) {
			console.error("Failed to fetch dates", error);
		}
	};
	useEffect(() => {
		fetchDatesWithActivities();

		// Hämtar data regelbundet
		const intervalId = setInterval(() => {
			// Uppdatera reloadKey för att tvinga omrendering
			setReloadKey((prevKey) => prevKey + 1);
		}, 10000); // 10 000 ms = var 10e sekund

		// Rensa intervallet när komponenten demonteras
		return () => clearInterval(intervalId);
	}, [reloadKey]);

	const renderDay = (props: PickersDayProps<dayjs.Dayjs>) => {
		const { day } = props;
		const dateStr = day.format("YYYY-MM-DD");
		const isMarked = markedDates[dateStr];

		return (
			<Badge
				color={isMarked ? "primary" : "default"}
				variant={isMarked ? "dot" : "standard"}
				overlap="circular"
			>
				<PickersDay {...props} />
			</Badge>
		);
	};

	return (
		<DateCalendar
			onChange={(value) => {
				const selectedDate = value?.format("YYYY-MM-DD") || "";
				onDateChange(selectedDate);
			}}
			slots={{ day: renderDay }}
			sx={{
				transform: "scale(1.2)",
				padding: 0,
				margin: 0,
			}}
		/>
	);
};

export default CalendarActivities;
