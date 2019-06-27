import React from 'react';

class Region extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			region: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(region){
	    this.props.onClicking(region);
	}

	handleChange(e){
		var region = e.target.value;
		e.preventDefault();
		this.setState({region: e.target.value});
		this.handleSubmit(region);
	}

	render(){
		return(
			<div>

				<select name="items" multiple=""
					className="ui fluid dropdown" 
					onChange = {this.handleChange}
					value = {this.state.region}>
					<option value="">Filter by Region</option>
					<option value="Africa">Africa</option>
					<option value="Americas">Americas</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
					
				</select>
			</div>
		)
	}
}

export default Region;


