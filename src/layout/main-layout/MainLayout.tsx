import React, { useState } from "react";
import Header from "./Header/Header";

import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "../../page/Dashboard/Dashboard";

const routes = [
  {
    path: "/portal",
    exact: true,
    component: Dashboard,
  },
];

const MainLayout = () => {
  return (
    <div className="d-flex flex-column w-100 h-100">
      <Header />
      <Switch>
        {
          routes.map((router, index)=>(
            <Route
              
            />
          ))
        }
      </Switch>
      <main className="d-flex w-100 flex-grow-1 "></main>
    </div>
  );
};

export default MainLayout;
