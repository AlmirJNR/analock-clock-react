import styles from './styles.module.css';

type TAnalogClockDial = {
	children: JSX.Element[];
}

export default function AnalogClockDial(props: TAnalogClockDial) {
	return (
		<div className={styles.analogClockDial}>
			{props.children}
		</div>
	);
}