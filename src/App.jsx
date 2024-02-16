import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "../src/components/pages/home/Home";
import Login from "../src/components/pages/login/Login";
import Registration from "../src/components/pages/registration/Registration";
import UserList from "./components/userList/UserList";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />

			<Route path="/registration" element={<Registration />} />
			<Route path="/userlist" element={<UserList />} />
		</Routes>
	);
};

export default App;
