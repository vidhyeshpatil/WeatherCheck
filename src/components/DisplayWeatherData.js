import React, { Component } from 'react';

export default class DisplayWeatherData extends Component {
  
  render() {
	let data = this.props.weatherData;
	
    return (
      <div className = "wrapper">
		<h1>Current Weather Conditions</h1>
		<div className = "place"> {data.place} </div>
		<div className = "degrees"> {data.degrees} &deg;F </div>
		<div className = "image">
			<img src = {'http://openweathermap.org/img/w/' + data.imgId + '.png'} alt = 'Weather Conditions' />
		</div>
		<div className = "description"> {data.desc} </div>
		
      </div>
    );
  }
}
