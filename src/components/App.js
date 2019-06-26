import React from 'react';
import SearchBar from './SearchBar'
import axios from 'axios';

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
      <div className = "ui container">
        <SearchBar callMeWhenSubmitted = {this.onCountrySubmit}/>
      </div>
    );
  }

}

export default App;
