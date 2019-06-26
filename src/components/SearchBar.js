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
			<div className = "ui segment">
				<form className = "ui form" onSubmit = {this.onFormSubmit}>
					<div className = "field">
						<input type="text"
							value = {this.state.country} 
							onChange = {this.onInputChange}
						/ >
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;