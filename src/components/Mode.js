import React from 'react';

class Mode extends React.Component{
	constructor(props){
		super(props);
		this.onClickLight = this.onClickLight.bind(this);
		this.onClickDark = this.onClickDark.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(mode){
	    this.props.callMeWhenClicked(mode);
	}

	onClickLight(event){
		event.preventDefault();
		this.handleClick('light');
	}

	onClickDark(event){
		event.preventDefault();
		this.handleClick('dark');
	}

	render(){
		return (
			<div className ="ui buttons">
				<button className ="ui button" onClick = {this.onClickLight}>Light</button>
				<div className ="or"></div>
				<button className ="ui button" onClick = {this.onClickDark}>Dark</button>
			</div>
		);
	}
}

export default Mode;