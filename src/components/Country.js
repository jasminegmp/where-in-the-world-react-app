import React from 'react';

const Country = ({country}) => {
	return (
		<div className ="card">
			<div className ="image">
				<img src={country.flag} alt = {country.name} />
			</div>
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