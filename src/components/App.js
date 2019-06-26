import React from 'react';
import SearchBar from './SearchBar'
import axios from 'axios';
import CountriesList from './CountriesList';
import CountryDetail from './CountryDetail';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends React.Component {

	state = {
		countries: [],
		selectedCountry: null
	};

	// loads all the countries
	async componentDidMount(){
		const link = `https://restcountries.eu/rest/v2/all`;
		const response = await axios.get(link);
		console.log(response);
		this.setState({countries: response.data});
	}

	// loads only countries on submit
	onCountrySubmit = async country => {
		const link = `https://restcountries.eu/rest/v2/name/${country}`;
		const response = await axios.get(link);
		console.log(response);
		this.setState({countries: response.data});
	};


  render(){
    return (
    <Router>
	      <div className = "ui container">
	        <SearchBar callMeWhenSubmitted = {this.onCountrySubmit}/>
	        <Switch>
	        	<Route exact path='/' render={(props) => (<CountriesList countries={this.state.countries} {...props} />)} />
				<Route path="/:id" render={(props) => (<CountryDetail countries={this.state.countries} {...props} />)} />
			</Switch>
	      </div>
      </Router>
    );
  }

}

export default App;
