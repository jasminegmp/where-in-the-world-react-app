import React from 'react';
import Country from './Country'

const CountriesList = ({countries}) =>{

	const renderedList = countries.map((country) => {
		return <Country key = {country.name} country = {country}/>;
	});
	return (
		<div className ="ui centered link cards">
			{renderedList}
		</div>
	);
}

export default CountriesList;