import React, { Component } from 'react';
import DisplayWeatherData from './DisplayWeatherData';

export default class WeatherCheck extends Component {
  
  constructor() {
	super();
	//
	this.state = {
		weatherData: {"latitude": null, "longitude": null, "degrees": '', "place": '', "imgId": '', 'desc': ''}
	}
  }
  
  componentWillMount() {
	 
	// API Call to get Latitude, Longitude of location
	this.fetchAPICall('ip', this.getLatLong);
  }
  
  fetchAPICall = (params, succFunc) => {
	const url = 'https://weathersync101.herokuapp.com/'+params+'';
	
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((res) => {
			succFunc(res);
		})
		.catch((error) => {
			console.log("API Failed to load data");
		});
  }
  
  getLatLong = (res) => {
	let weatherData = this.state.weatherData;
	
	weatherData['latitude'] = res.location.latitude;
	weatherData['longitude'] = res.location.longitude;
	
	this.setState({weatherData}, () => {
		
		// API Call of weather to get city data
		this.fetchAPICall('weather/'+weatherData.latitude+','+weatherData.longitude+'', this.getCityData);
	});
  }
  
  getCityData = (res) => {
	let weatherData = this.state.weatherData;  
	
	weatherData['degrees'] = this.convertTemp(res.main.temp);
	weatherData['place'] = res.name;
	weatherData['imgId'] = res.weather[0].icon;
	weatherData['desc'] = res.weather[0].description;
	//
	this.setState({weatherData});
  }
  
  convertTemp = temp => {
	  
	// Formula for converting the temprature from Kelvin to Fahrenheit
	return Math.round(1.8 * (temp - 273) + 32);
  }
  
  render() {
	if(!this.state.weatherData.place) return null;
	
    return (
      <div className = "container">
		<DisplayWeatherData weatherData = {this.state.weatherData} />
      </div>
    );
  }
}
