import React from 'react';
import Country from './Country'

const CountriesList = ({countries, region}) =>{

	if(region !== "") // need to filter by region
	{
		const filteredList = countries.filter((country) => region === country.region);
		const renderedList = filteredList.map((country) => {
			return <Country key = {country.name} country = {country}/>;
		});
		return (
			<div className ="ui centered link cards">
				{renderedList}
			</div>
		);
	}
	else{ // no need to filter
		const renderedList = countries.map((country) => {
			return <Country key = {country.name} country = {country}/>;
		});
		return (
			<div className ="ui centered link cards">
				{renderedList}
			</div>
		);
	}

}

export default CountriesList;