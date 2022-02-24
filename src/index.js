import "./style.css";
import User from "./User";

function login() {
	const loginForm = document.getElementById("loginForm");

	function logSubmit(event) {
		event.preventDefault();

		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		const user = new User(username, password);

		if (user.validationLogin()) {
			user.successLogin();
		} else {
			user.failureLogin();
		}
	}

	loginForm.addEventListener("submit", logSubmit);
}

login();
