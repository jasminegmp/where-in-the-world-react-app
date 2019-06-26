import React from 'react';


class CountryDetail extends React.Component {

	constructor(props){
		super(props);
		this.goBack = this.goBack.bind(this);
	}

	goBack(){
		this.props.history.goBack();
	}

	render(){
		const currencyList = this.props.location.currencies.map((country) =>
        	<div key={country.name}>{country.name}</div>);
        const languageList = this.props.location.languages.map((language) =>
        	<div key={language.name}>{language.name}</div>);
        const borderCountriesList = this.props.location.borders.map((borderCountry) =>
        	<div key={borderCountry}>{borderCountry}</div>);

		return(
			<div className = "ui grid">
				<div className = "ui row">
					<div className = "eight wide column">
						<img src={this.props.location.flag} alt = {this.props.location.name} />
					</div>
					<div className = "eight wide column">
						<div><h1>{this.props.location.name}</h1></div>
						<div><strong>Native name:</strong> {this.props.location.nativeName}</div>
						<div><strong>Population:</strong> {this.props.location.population}</div>
						<div><strong>Region:</strong> {this.props.location.region}</div>
						<div><strong>Subregion:</strong> {this.props.location.subregion}</div>
						<div><strong>Capital:</strong> {this.props.location.capital}</div>
						<div><strong>Top Level Domain:</strong> {this.props.location.topLevelDomain}</div>
						<div><strong>Currency:</strong>{currencyList}</div>
						<div><strong>Languages:</strong>{languageList}</div>
						<div><strong>Border Countries:</strong>{borderCountriesList}</div>
					</div>
				</div>
				<div className = "ui row">
					<button className="ui button" onClick={this.goBack}>Go Back</button>
				</div>
			</div>
		);		
	}
}




export default CountryDetail;