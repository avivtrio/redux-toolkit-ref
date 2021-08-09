import React, { useEffect } from "react";
import "./App.css";

import MainLayout from "./layout/main-layout/MainLayout";
import AuthLayout from "./layout/auth-layout/AuthLayout";

import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  console.log(isAuth);

  return <>{isAuth ? <MainLayout /> : <AuthLayout />}</>;
}

export default App;
