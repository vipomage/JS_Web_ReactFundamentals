import React from 'react';
const IMAGE_URL = '/episodePreview/';

export default class Slider extends React.Component {
	constructor() {
		super();
		this.state = { selectedImg: '' };
		this.promisfyState = obj => {
			return new Promise(res => {
				this.setState(obj, res);
			}).catch(e => console.log(e));
		};
	}
	componentDidUpdate(prevProps, prevState, snap) {
		fetch(`http://localhost:9999${IMAGE_URL}${this.props.focusedEp}`)
			.then(data => {
				return data.json();
			})
			.then(parseData => {
				if (prevState.selectedImg !== parseData.url) {
					this.promisfyState({ selectedImg: parseData.url });
				}
			});
	}
	componentDidMount() {
		fetch(`http://localhost:9999${IMAGE_URL}${this.props.focusedEp}`)
			.then(data => {
				return data.json();
			})
			.then(parseData => {
				this.promisfyState({ selectedImg: parseData.url });
			});
	}
	render() {
		return (
			<div className="warper">
				<img
					alt="nope"
					src="http://localhost:9999/left.png"
					className="slider-elem slider-button case-left"
					onClick={() =>
						this.props.updateFunc(
							Number(this.props.focusedEp) - 1 < 0
								? 0
								: Number(this.props.focusedEp) - 1
						)
					}
				/>
				<img
					className="sliderImg slider-elem"
					alt="focusedEp"
					src={this.state.selectedImg}
				/>
				<img
					alt="nope"
					src="http://localhost:9999/right.png"
					className="slider-elem slider-button case-right"
					onClick={() => {
						this.props.updateFunc(
							Number(this.props.focusedEp) + 1 > 2
								? 2
								: Number(this.props.focusedEp) + 1
						);
					}}
				/>
			</div>
		);
	}
}
