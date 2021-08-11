import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import axiosGlobal from "axios";

//import { UsersApi } from "./api/services/users-api";

import { UsersApiService } from "./apiSAC/UsersService";

const localStorage = {
	get: (key: string) => {
		try {
			const item = window.localStorage.getItem(key);
			if (item) {
				return JSON.parse(item);
			}
			throw Error(`The Value Of The Key: ${key}, Is: ${item}`);
		} catch (error) {
			console.log(`Filed To Get Value From Local Storage, Error: ${error}`);
			return false;
		}
	},
	set: (key: string, value: any) => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.log(`Filed To Save Value To Local Storage, Error: ${error}`);
			return false;
		}
	},
};

axiosGlobal.interceptors.request.use(
	(request) => {
		console.log("interceptors.request");
		console.log("request:", request);
		console.log(request.url?.indexOf("/login"));
		if (request.url?.indexOf("/login") === -1) {
			console.log("inside if");
			const token = localStorage.get("jwt");
			console.log("token:", token);
			request.headers["Authorization"] = `Bearer ${token}`;
		}
		console.log("request:", request);
		return request;
	},
	(error) => {
		console.log("interceptors request error:", error);
		return Promise.reject(error);
	}
);

axiosGlobal.interceptors.response.use(
	(response) => {
		console.log("interceptors.response");
		console.log("response:", response);
		const token = response.headers.authorization.split(" ")[1];
		const key = "jwt";
		localStorage.set(key, token); // need to add 'expiry' time with the token?
		return response;
	},
	(error) => {
		console.log("interceptors response error:", error);
		return Promise.reject(error);
	}
);

/* const userApi = new UsersApi(
  undefined,
  "https://test.smartheartservice.com/api/v2.0"
);

userApi.usersLogin({
  email: "admin.001@test.com",
  password: "shahal!1",
});

setTimeout(() => {
  console.log("setTimeout");
  userApi
    .usersGetPortalPermissions("32323332-4f73-7864-426b-04444e7a7533")
    .then((res) => {
      console.log("JSON.stringify(res):", JSON.stringify(res));
    });
}, 7000); */

UsersApiService.usersLogin({
	credentials: { email: "admin.001@test.com", password: "shahal!1" },
});

UsersApiService.usersGetPortalPermissions({
	userId: "32323332-4f73-7864-426b-04444e7a7533",
}).then((res) => {
	console.log("JSON.stringify(res):", JSON.stringify(res));
});

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
