import { Component } from "react";
import { string } from "prop-types";
import "./styles.css";

class ClassGreeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.initialName,
		};
		this.changeName = this.changeName.bind(this);
	}

	changeName() {
		this.setState({
			name: "Daenerys Targaryen",
		});
	}
	render() {
		const name = this.state.name;

		return (
			<div>
				<p className="greeting">
					Hello, {name}! This is a class-based greeting!
				</p>

				<button onClick={this.changeName}>Change Name</button>
			</div>
		);
	}
}

ClassGreeting.propTypes = {
	initialName: string,
};

ClassGreeting.defaultProps = {
	initialName: "Jon Snow",
};

export default ClassGreeting;
