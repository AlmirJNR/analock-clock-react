import React from 'react';
import ReactDOM from 'react-dom/client';
import AnalogClock from '@components/AnalogClock';
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AnalogClock date={new Date()}/>
	</React.StrictMode>,
);
