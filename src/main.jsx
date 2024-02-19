import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./HomePage.jsx";
import Navbar from "./navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <App /> */}
		<Navbar />
		<HomePage />
	</React.StrictMode>,
);
