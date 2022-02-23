import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideNav from "./SideNav";
import Backdrop from "../Backdrop";

import "./Main.css";

const MainNavigation = (props) => {
  const [sideIsOpen, setSideIsOpen] = useState(false);

  const openSideHandler = () => setSideIsOpen(true);
  const closeSideHandler = () => setSideIsOpen(false);

  return (
    <React.Fragment>
      {sideIsOpen && <Backdrop onClick={closeSideHandler} />}
      <SideNav show={sideIsOpen} onClick={closeSideHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideNav>
      <MainHeader>
        <button onClick={openSideHandler} className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
