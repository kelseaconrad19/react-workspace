import { useState } from "react";
import styles from "./Greeting.module.css";
const Greeting = (props) => {
	const [name, setName] = useState(props.initialName);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [users, setUsers] = useState([
		"Jon Snow",
		"Daenerys Targaryen",
		"Tyrion Lannister",
	]);

	const handleLoginClick = () => {
		setIsLoggedIn(true);
	};

	const handleLogoutClick = () => {
		setIsLoggedIn(false);
		setName(props.initialName);
	};

	return (
		<div>
			<p className={styles.greeting}>{props.customUserMessage}</p>
			<ul>
				{users.map((user, index) => (
					<li key={index} className={styles.greeting}>
						{user}
					</li>
				))}
			</ul>
			<p className={styles.greeting}>
				{isLoggedIn ? `Hello, ${name}! Welcome back!` : props.customMessage}
			</p>
			{!isLoggedIn ? (
				<button onClick={handleLoginClick}>Log In</button>
			) : (
				<button onClick={handleLogoutClick}>Log Out</button>
			)}
		</div>
	);
};

Greeting.defaultProps = {
	initialName: "Jon Snow",
};

export default Greeting;
