import React, {useState, useEffect} from "react";
import { NavLink, Link, Route } from 'react-router-dom';
import "../../App.css";

function IsNotLoggedIn({handleLoginPopup}) {
  return (
    <>
     <Route>
      <NavLink
      className="link link_theme_white"
      activeClassName="link_active"
      exact
      to="/">Главная</NavLink>
    </Route>
      <button
      type="button"
      className="header__button"
      onClick={handleLoginPopup}>Авторизоваться
      </button>
    </>
  )
}

export default IsNotLoggedIn;
