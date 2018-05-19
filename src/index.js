import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCheck from './components/WeatherCheck';
import './css/pageCss.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WeatherCheck />, document.getElementById('root'));
registerServiceWorker();
