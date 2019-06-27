import React from 'react';

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			country: ''
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({country: event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.callMeWhenSubmitted(this.state.country);
	}

	render(){
		return (
			<form className = "ui form" onSubmit = {this.onFormSubmit}>
				<div className = "field">
					<input type="text"
						placeholder = "Search for a country..."
						value = {this.state.country} 
						onChange = {this.onInputChange}
					/ >
				</div>
			</form>
		);
	}
}

export default SearchBar;