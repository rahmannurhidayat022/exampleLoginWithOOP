import DATA from "./data";

class User {
	constructor(username, password) {
		this.username = username;
		this.password = password;
		this.database = DATA;
		this.isLogin = false;
	}

	validationLogin() {
		if (this.username !== this.database.USERNAME) return false;
		if (this.password !== this.database.PASSWORD) return false;

		return (this.isLogin = true);
	}

	successLogin() {
		window.alert("Login kamu berhasil!");
	}

	failureLogin() {
		window.alert(
			"Login kamu gagal!, silahkan cek kembali username dan passwordnya",
		);
	}
}

export default User;
