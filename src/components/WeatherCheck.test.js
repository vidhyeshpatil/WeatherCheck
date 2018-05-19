import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCheck from './components/WeatherCheck';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherCheck />, div);
  ReactDOM.unmountComponentAtNode(div);
});
