import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './Country.css'

const Country = ({country}) => {
	return (
		
		<div className ="ui card country-class">
			<Link to ={{pathname: `${country.name}`, name: country.name, flag: country.flag}}>
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