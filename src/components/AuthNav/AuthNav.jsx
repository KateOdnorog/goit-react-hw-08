import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  return (
    <div className={s.authNav}>
      <NavLink
        className={({ isActive }) =>
          clsx(s.navLink, isActive && s.navLinkActive)
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(s.navLink, isActive && s.navLinkActive)
        }
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
