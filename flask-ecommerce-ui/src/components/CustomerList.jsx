import { Component } from "react";

class CustomerList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			selectedCustomerId: null,
		};
	}

	componentDidMount() {
		const fetchedCustomers = [
			{ id: 1, name: "Alice" },
			{ id: 2, name: "Bob" },
			{ id: 3, name: "Charlie" },
		];
		this.setState({ customers: fetchedCustomers });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.selectedCustomerId !== this.state.selectedCustomerId) {
			console.log(
				`Customer with id ${this.state.selectedCustomerId} was selected.`
			);
		}
	}

	componentWillUnmount() {
		console.log("CustomerList component is being unmounted.");
	}

	selectCustomer = (customerId) => {
		this.setState({ selectedCustomerId: customerId });
		this.props.onCustomerSelect(customerId);
	};
	render() {
		const { customers } = this.state;
		return (
			<div className="customer-list">
				<h3>Customers</h3>
				<ul>
					{customers.map((customer) => (
						<li
							key={customer.id}
							onClick={() => this.selectCustomer(customer.id)}
						>
							{customer.name}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default CustomerList;
