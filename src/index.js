import "./style.css";
import Card from "./components/Card.js";

function component() {
	const element = document.createElement("div");
	element.id = "root";

	return element;
}

document.body.appendChild(component());
