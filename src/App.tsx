import React, { useEffect } from "react";
import "./App.css";

import Counter from "./components/Counter/Counter";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import UserProfile from "./components/UserProfile/UserProfile";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import { userLogin } from "./store/actions/auth";

function App() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let user = {
      name: "aviv",
      age: 29,
    
    };


    dispatch(userLogin(user));

  },[]);

  return (
    <>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
    </>
  );
}

export default App;
