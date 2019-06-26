import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component {

	state = {
		countries: [],
		selectedCountry: null
	};


	onCountrySubmit = async country => {
		console.log(country);
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
