import { Badge } from "@mui/material";
import { DateCalendar, PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const CalendarActivities: React.FC<{
	onDateChange: (date: string) => void;
}> = ({ onDateChange }) => {
	const [markedDates, setMarkedDates] = useState<Record<string, boolean>>({});

	useEffect(() => {
		const fetchDatesWithActivities = async () => {
			try {
				const response = await axios.get(
					"http://localhost:5000/api/activities"
				);
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
		fetchDatesWithActivities();
	}, []);

	const renderDay = (props: PickersDayProps<dayjs.Dayjs>) => {
		const { day } = props;
		const dateStr = day.toISOString().split("T")[0];
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
				const selectedDate = value?.toISOString().split("T")[0] || "";
				onDateChange(selectedDate);
			}}
			slots={{ day: renderDay }}
		/>
	);
};

export default CalendarActivities;
