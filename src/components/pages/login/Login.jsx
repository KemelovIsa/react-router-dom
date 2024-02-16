import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		try {
			const response = await axios.post(
				"https://api.elchocrud.pro/api/v1/8210bf40af94afb39242ac5a9a81bf18/names",
				{
					email: email,
					password: password,
				}
			);

			if (response.status === 200 || response.status === 201) {
				localStorage.setItem("isLoggedIn", "true");
				navigate("/");
			} else {
				console.error("Authentication failed");
			}
		} catch (error) {
			console.error("Error during authentication:", error);
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<div>
				<label>Email:</label>
				<input
					type="email"
					placeholder="Введите ваш email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type="password"
					placeholder="Введите ваш пароль"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div>
				<button onClick={handleLogin}>Войти</button>
			</div>
		</div>
	);
};

export default Login;
