import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const navContainer = document.getElementById("NavigationBar");
const navRoot = ReactDOM.createRoot(navContainer);
navRoot.render(<NavigationBar />);
