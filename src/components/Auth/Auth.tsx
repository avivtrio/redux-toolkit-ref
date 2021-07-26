import React, { useRef } from "react";
import classes from "./Auth.module.css";

import { useAppDispatch } from "../../store/hooks";
import { authAction } from "../../store/reducers/auth";

const Auth = () => {
  const dispatch = useAppDispatch();


  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: any) => {
    dispatch(authAction.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
