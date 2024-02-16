import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const url =
	"https://api.elchocrud.pro/api/v1/8210bf40af94afb39242ac5a9a81bf18/names";

const Home = () => {
	const [todo, setTodo] = useState([]);
	const navigateLogin = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("name");
		localStorage.removeItem("password");
		navigateLogin("/login");
	};

	const get = async () => {
		try {
			const response = await axios.get(url);
			setTodo(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		get();
	}, []);
	const deleteButton = async (id) => {
		const response = await axios.delete(`${url}/${id}`);
		setTodo(response.data);
	};
	return (
		<div>
			{todo.map((item, index) => (
				<div key={index}>
					<p>{item.email}</p>
					<p>{item.password}</p>
					<button onClick={() => deleteButton(item._id)}>delete</button>
				</div>
			))}
			<button onClick={handleLogout}>ВЫЙТИ</button>
		</div>
	);
};

export default Home;
