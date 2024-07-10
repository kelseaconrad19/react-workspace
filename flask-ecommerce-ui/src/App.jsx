import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { Component } from "react";
import CustomerList from "./components/CustomerList.jsx";
import "./AppStyles.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCustomerId: null,
		};
	}

	handleCustomerSelect = (customerId) => {
		this.setState({ selectedCustomerId: customerId });
	};

	render() {
		const { selectedCustomerId } = this.state;

		return (
			<div className="app-container">
				<h1>Our Customers</h1>
				<CustomerList onCustomerSelect={this.handleCustomerSelect} />
				{selectedCustomerId && <p>Selected customer: {selectedCustomerId}</p>}
			</div>
		);
	}
}

export default App;
