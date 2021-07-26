import classes from "./Header.module.css";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { authAction } from "../../store/reducers/auth";

const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const handleLogOut = () => {
    dispatch(authAction.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Trio Soft</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">Connect Us</a>
            </li>
            <li>
              <a href="/">My Profile</a>
            </li>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
