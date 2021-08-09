import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "../../page/LoginPage/LoginPage";

const routes = [
  {
    path: "/login",
    exact: true,
    component: LoginPage,
  },
];

const AuthLayout = () => {
  return (
    <div className="h-100 w-100">
      <Switch>
        {routes.map((router, index) => (
          <Route key={index} path={router.path} component={router.component}  />
        ))}
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      </Switch>
    </div>
  );
};

export default AuthLayout;
