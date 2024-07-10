import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Greeting from "./Greeting";
import ClassGreeting from "./ClassGreeting";

// JSX
// It allows us to write JavaScript code in our HTML code.
// Components
// Functional = functional programming paradigm
// multiple functions where each one serves one purpose
// Recipe to make soup. Have a function to chop the carrot.  The original carrot is not changed. It makes a copy of the carrot and then chops the copied carrot.

// Class-based = object-oriented programming paradigm
// Encapsulation, inheritance. like a house - each one has a blueprint, but they might have different colors, sizes, etc.

function App() {
	const customMessage = "Welcome to my React App!";
	const customUserMessage = "Here are our users: ";

	return (
		<div>
			<h1>Hello World!</h1>
			<Greeting
				customMessage={customMessage}
				customUserMessage={customUserMessage}
			/>
			<ClassGreeting
				customMessage={customMessage}
				customUserMessage={customUserMessage}
			/>
		</div>
	);
}

export default App;
