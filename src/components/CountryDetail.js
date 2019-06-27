import React from 'react';
import './CountryDetail.css';


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
        	<div className = "info-list-item" key={country.name}>{country.name}</div>);
        const languageList = this.props.location.languages.map((language) =>
        	<div className = "item info-list-item" key={language.name}>{language.name}</div>);
        const borderCountriesList = this.props.location.borders.map((borderCountry) =>
        	<div className = "info-list-item" key={borderCountry}>{borderCountry}</div>);

		return(
			<div className = "ui grid">
				<div className = "ui row">
					<div className = "eight wide column">
						<img src={this.props.location.flag} alt = {this.props.location.name} />
					</div>
					<div className = "eight wide column info-area">
						<div className = "info-item"><h1>{this.props.location.name}</h1></div>
						<div className = "info-item"><strong>Native name:</strong> {this.props.location.nativeName}</div>
						<div className = "info-item"><strong>Population:</strong> {this.props.location.population}</div>
						<div className = "info-item"><strong>Region:</strong> {this.props.location.region}</div>
						<div className = "info-item"><strong>Subregion:</strong> {this.props.location.subregion}</div>
						<div className = "info-item"><strong>Capital:</strong> {this.props.location.capital}</div>
						<div className = "info-item"><strong>Top Level Domain:</strong> {this.props.location.topLevelDomain}</div>
						<div className = "info-item list"><strong>Currency:</strong> {currencyList}</div>
						<div className = "info-item list"><strong>Languages:</strong> {languageList}</div>
						<div className = "info-item list"><strong>Border Countries:</strong> {borderCountriesList}</div>
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