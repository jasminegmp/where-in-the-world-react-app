import React from 'react';
import SearchBar from './SearchBar'
import axios from 'axios';
import CountriesList from './CountriesList';
import CountryDetail from './CountryDetail';
import Mode from './Mode';
import Region from './Region'
import './App.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends React.Component {

	state = {
		countries: [],
		selectedCountry: null,
		mode: null,
		region: ""
	};

	// loads all the countries
	async componentDidMount(){
		const link = `https://restcountries.eu/rest/v2/all`;
		const response = await axios.get(link);
		this.setState({countries: response.data});
		this.setState({mode: 'light'});
		
	}

	// loads only countries on submit
	onCountrySubmit = async country => {
		const link = `https://restcountries.eu/rest/v2/name/${country}`;
		const response = await axios.get(link);
		this.setState({countries: response.data});
	};

	//check dark or light mode
	checkMode = (newMode) => {
		this.setState({mode: newMode}, () => {
             console.log("MODE:",this.state.mode);
        });
	};


	filterByRegion = (region) => {
		this.setState({region: region}, function () {
             console.log("region:",this.state.region);
        });
	}



  render(){
    return (
    <Router>
    	<div className = {this.state.mode === 'light'? 'light-mode': 'dark-mode'}>
	      <div className = "ui centered container">
	      	<Mode callMeWhenClicked = {this.checkMode}/>
	        <SearchBar callMeWhenSubmitted = {this.onCountrySubmit}/>
	        <Region onClicking = {this.filterByRegion}/>
	        <Switch>
	        	<Route exact path={process.env.PUBLIC_URL + '/'} render={(props) => (<CountriesList countries={this.state.countries} region = {this.state.region} {...props} />)} />
				<Route path={process.env.PUBLIC_URL + '/:id'} render={(props) => (<CountryDetail countries={this.state.countries} {...props} />)} />
			</Switch>
	      </div>
	      </div>
      </Router>
    );
  }

}

export default App;
