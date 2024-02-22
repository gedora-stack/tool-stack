import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MockupPage from "./Components/MockupPage.jsx";

// Check if the browser is Firefox
const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

if (isFirefox) {
	require("./firefox_scrollbar.css"); // Import the Firefox-specific CSS file if the browser is Firefox
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<MockupPage />
	</React.StrictMode>,
);
