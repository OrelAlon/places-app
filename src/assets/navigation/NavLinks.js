import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../../shared/context/auth-context";

import "./Main.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutBtn = () => {
    navigate("/auth");
    auth.logout();
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>{" "}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/ul/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">NEW PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={logoutBtn}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
