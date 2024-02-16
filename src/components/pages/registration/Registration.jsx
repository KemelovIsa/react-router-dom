import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url =
	"https://api.elchocrud.pro/api/v1/8210bf40af94afb39242ac5a9a81bf18/names";
const Registration = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const handleNavigate = async () => {
		if (name === "" || password === "") {
			alert("Заполните все поля");
		} else {
			try {
				const response = await axios.post(url, {
					name,
					password,
				});

				if (response.status === 200 || response.status === 201) {
					navigate("/login");
				}
			} catch (error) {
				console.log("Ошибка в API", error);
				alert("Произошла ошибка при регистрации, попробуйте еще раз");
			}
		}
	};

	return (
		<div>
			<h1>Registration</h1>
			<input
				type="text"
				placeholder="Имя"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Пароль"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleNavigate}>Зарегистрироваться</button>
		</div>
	);
};

export default Registration;
