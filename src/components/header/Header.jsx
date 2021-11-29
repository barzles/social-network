import React from "react";
import logo from "../../logo.svg";
import s from './style.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className={s.headerContainer}>
        <img src={logo} className="App-logo" alt="logo"/>
        {
          !props.isAuth ?
            <NavLink
              to={'/login'}>
              Login
            </NavLink>
            : <button type="button" onClick={() => props.logout()}>Logout</button>
        }
      </div>
    </header>
  )
};

export default Header;
