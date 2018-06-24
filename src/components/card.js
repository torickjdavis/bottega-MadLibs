import React, { Component } from 'react';

import Input from './input';
import Content from './content';

const INITIAL_STATE = {
	color: '',
	pluralNoun: '',
	adjectiveOne: '',
	celebrityOne: '',
	adjectiveTwo: '',
	nounOne: '',
	numberOne: '',
	numberTwo: '',
	nounTwo: '',
	adjectiveThree: '',
	celebrityTwo: '',
	celebrityThree: '',
	adjectiveFour: '',
	nounThree: '',
	celebrityFour: '',
	adjectiveFive: '',
	contentVisible: false
};

class Card extends Component {
	constructor() {
		super();
		this.state = INITIAL_STATE;

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleFormSubmit(event) {
		event.preventDefault();
		if (this.state.contentVisible) {
			this.setState(INITIAL_STATE);
		}
		else {
			this.setState({ contentVisible: true });
		}
	}

	render() {
		const inputData = [
			{ title: 'Color', state: this.state.color, name: 'color' },
			{ title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun' },
			{ title: 'Adjective', state: this.state.adjectiveOne, name: 'adjectiveOne' },
			{ title: 'Celebrity', state: this.state.celebrityOne, name: 'celebrityOne' },

			{ title: 'Adjective', state: this.state.adjectiveTwo, name: 'adjectiveTwo' },
			{ title: 'Noun', state: this.state.nounOne, name: 'nounOne' },
			{ title: 'Number', state: this.state.numberOne, name: 'numberOne' },
			{ title: 'Number', state: this.state.numberTwo, name: 'numberTwo' },

			{ title: 'Noun', state: this.state.nounTwo, name: 'nounTwo' },
			{ title: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree' },
			{ title: 'Celebrity', state: this.state.celebrityTwo, name: 'celebrityTwo' },
			{ title: 'Celebrity', state: this.state.celebrityThree, name: 'celebrityThree' },

			{ title: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour' },
			{ title: 'Noun', state: this.state.nounThree, name: 'nounThree' },
			{ title: 'Celebrity', state: this.state.celebrityFour, name: 'celebrityFour' },
			{ title: 'Adjective', state: this.state.adjectiveFive, name: 'adjectiveFive' },
		];
		return (
			<form onSubmit={this.handleFormSubmit} className="card">
				<div className="card__inputs">
					{
						inputData.map((data, index) => {
							return Input((data), this.handleInputChange, index);
						}) // unsure why parenthesis were needed around "data"
					}
				</div>
				<button type="submit">{ !this.state.contentVisible ? 'Generate Mad Lib' : 'Clear Form' }</button>
				{
					this.state.contentVisible ? <Content data={ this.state }/> : ''
				}
			</form>
		);
	}
}

export default Card;
