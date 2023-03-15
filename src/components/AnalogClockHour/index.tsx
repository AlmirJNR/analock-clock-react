import styles from './styles.module.css';

type TAnalogClockHourPositions = {
	rotate?: number;
	left?: string;
	top?: string;
	right?: string;
	bottom?: string;
}

type TAnalogClockHour = {
	value: number;
	position?: TAnalogClockHourPositions;
}

export default function AnalogClockHour(props: TAnalogClockHour) {
	let className;
	
	switch (props.value) {
		case 3:
			className = styles.analogClockHour3;
			break;
		case 6:
			className = styles.analogClockHour6;
			break;
		case 9:
			className = styles.analogClockHour9;
			break;
		case 12:
			className = styles.analogClockHour12;
			break;
	}
	
	return (
		<div
			className={className}
			style={{
				rotate: `${props.position?.rotate}deg`,
				left: props.position?.left,
				top: props.position?.top,
				right: props.position?.right,
				bottom: props.position?.bottom,
			}}
		>
		</div>
	);
}