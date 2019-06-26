import React from 'react';


class CountryDetail extends React.Component {

	constructor(props){
		super(props);
		this.goBack = this.goBack.bind(this);
	}

	goBack(){
		this.props.history.goBack();
	}

	render(){
		return(
			<div className = "ui grid">
				<div className = "ui row">
					<div className = "eight wide column">
						<img src={this.props.location.flag} alt = {this.props.location.name} />
					</div>
					<div className = "eight wide column">
						{this.props.location.name}
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