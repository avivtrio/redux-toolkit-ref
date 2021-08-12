import React from "react";

import { useAppDispatch } from "../../store/hooks";
import { authAction } from "../../store/reducers/auth";

import { useLanguage } from "../../context/LanguageContext";

import { FormattedMessage } from "react-intl";

import Header from "../../components/Header/Header";

const LoginPage = () => {
	const dispatch = useAppDispatch();
	const { login } = authAction;

	const onLogin = () => {
		console.log("press login");
		dispatch(login());
	};

	return (
		<>
			<Header />

			<div className="h-100 w-100">
				<div
					className="w-25 border shadow"
					style={{
						position: "absolute",
						top: "35%",
						left: "35%",
					}}
				>
					<div className="card-title">
						<h3 className="text-center">
							<FormattedMessage id="Login.Title" defaultMessage="Login" />
						</h3>
					</div>
					<div className="card-content d-block">
						<div className="input w-100">
							<label htmlFor="email">Enter Email</label>
							<input
								value="admin.001@test.com"
								className="d-block w-100 mb-2"
								type="email"
								name="email"
								id="email"
								placeholder="enter email"
							/>
							<label htmlFor="password">Enter passWord</label>
							<input
								value="shahal!1"
								className="d-block w-100 mb-2"
								type="password"
								name="password"
								id="password"
								placeholder="enter your user name"
							/>
							<div className="btn-submit text-center">
								<button onClick={onLogin}>click me </button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
