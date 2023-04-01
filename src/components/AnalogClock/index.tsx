import styles from './styles.module.css';
import AnalogClockHand from '@components/AnalogClockHand';
import AnalogClockDial from '@components/AnalogClockDial';
import AnalogClockHour from '@components/AnalogClockHour';
import useTimer from '@hooks/useTimer';

type TAnalogClockProps = {
	date: Date;
}

export default function AnalogClock(props: TAnalogClockProps) {
	const {seconds, minutes, hours} = useTimer(props.date);

	return (
		<div className={styles.analogClock}>
			<AnalogClockHour value={3} position={{right: '0'}}/>
			<AnalogClockHour value={6} position={{bottom: '0'}}/>
			<AnalogClockHour value={9} position={{left: '0'}}/>
			<AnalogClockHour value={12} position={{top: '0'}}/>
			<AnalogClockDial>
				<AnalogClockHand time={seconds} height="180px" width="6px" rotationDegreesPerTime={6}/>
				<AnalogClockHand time={minutes} height="120px" rotationDegreesPerTime={6}/>
				<AnalogClockHand time={hours} height="80px" width="18px" rotationDegreesPerTime={30}/>
			</AnalogClockDial>
		</div>
	);
}