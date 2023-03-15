import styles from './styles.module.css';

type TAnalogClockHandPositions = {
	position?: 'absolute' | 'relative';
	zIndex?: number;
	left?: string;
	top?: string;
	right?: string;
	bottom?: string;
}

type TAnalogClockHandProps = {
	time: number;
	height: string;
	width?: string;
	rotationDegreesPerTime: number;
	position?: TAnalogClockHandPositions;
	transformOrigin?: string;
}

export default function AnalogClockHand(props: TAnalogClockHandProps) {
	return (
		<div
			className={styles.analogClockHand}
			style={{
				height: props.height,
				width: props.width || '12px',
				zIndex: props.position?.zIndex ?? -1,
				rotate: `${props.time * props.rotationDegreesPerTime}deg`,
				transformOrigin: props.transformOrigin || 'bottom',
			}}
		/>
	);
}