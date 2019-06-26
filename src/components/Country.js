import React from 'react';
import {Link} from 'react-router-dom';
import './Country.css'

const Country = ({country}) => {
	return (
		
		<div className ="ui card country-class">
			<Link to ={{pathname: `${country.name}`, 
						name: country.name, 
						flag: country.flag,
						nativeName: country.nativeName,
						population: country.population,
						region: country.region,
						subregion: country.subregion,
						capital: country.capital, 
						topLevelDomain: country.topLevelDomain,
						currencies: country.currencies,
						languages: country.languages,
						borders: country.borders

			}}>
				<div className ="image">
					<img src={country.flag} alt = {country.name} />
				</div>
			</Link>	
			
			<div className ="content">
				<div className ="header">{country.name}</div>
				<div className ="description">
					<p>Population: {country.population}</p>
					<p>Region: {country.region}</p>
					<p>Capital: {country.capital}</p>
				</div>
			</div>
			
		</div>
		
	);
};

export default Country;