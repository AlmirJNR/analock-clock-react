import {useEffect, useRef, useState} from 'react';

export default function useTimer(date: Date) {
	const intervalId = useRef<number | null>(null);
	const [seconds, setSeconds] = useState(date.getSeconds());
	const [minutes, setMinutes] = useState(date.getMinutes());
	const [hours, setHours] = useState(date.getHours());
	
	function clearInterval() {
		if (intervalId.current !== null) {
			window.clearInterval(intervalId.current);
			intervalId.current = null;
		}
	}
	
	useEffect(() => {
		if (intervalId.current === null)
			intervalId.current = window.setInterval(() => setSeconds(value => value + 1), 1_000);
		
		return clearInterval;
	}, []);
	
	useEffect(() => {
		if (seconds === 60) {
			setSeconds(0);
			setMinutes(value => value + 1);
		}
	}, [seconds]);
	
	useEffect(() => {
		if (minutes === 60) {
			setMinutes(0);
			setHours(value => value + 1);
		}
	}, [minutes]);
	
	useEffect(() => {
		if (hours === 12)
			setHours(0);
	}, [hours]);
	
	return {
		seconds,
		minutes,
		hours,
	};
}