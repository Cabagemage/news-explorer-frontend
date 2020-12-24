import React, {useState} from "react";
import "../../App.css";
import "./header/header.css";
import { NavLink, Route } from 'react-router-dom';

function Header({loggedIn, handleLoginPopup}) {
  const [streamingsIsOpen, setStreamingsIsOpen] = useState(true);
  const [streamingsBtnIsClicked, setStreamingsBtnIsClicked] = useState(false);

  const handleBtnClick = () => {
    setStreamingsIsOpen(!streamingsIsOpen);
    setStreamingsBtnIsClicked(!streamingsBtnIsClicked);
  };

  return (
    <>
    {loggedIn ?
    <header className="header header_status_savednews">
      <NavLink to='/' className="link header__logo header__logo_theme_black">NewsExplorer</NavLink>
      <div className="header__container">
    <nav className="header__navigation">
    <Route>
      <NavLink className="link link_theme_black"
      exact
      activeClassName="link_white_active"
      to="/">Главная</NavLink>
    </Route>
    <Route>
      <NavLink
      className="link link_theme_black"
      activeClassName="link_white_active"
      to="/saved-news">Сохраненные cтатьи</NavLink>
    </Route>
    </nav>
    <button className="button button_place_loggedin button_theme_black">Грета</button>
    </div>
    </header>
    :
    <header className="header header_status_main">
    <NavLink to='/' className="link header__logo">NewsExplorer</NavLink>
    <button className="button header__hamburger-menu" onClick={handleBtnClick}>
    {streamingsBtnIsClicked ?
     '' : ''}
    </button>
    <div className="header__container">
    <nav className="header__navigation">
    <Route>
      <NavLink
      className="link link_theme_white"
      activeClassName="header__link_active"
      exact
      to="/">Главная</NavLink>
    </Route>
    </nav>
    <button
      type="button"
      className="button button_place_loggedout"
      onClick={handleLoginPopup}>Авторизоваться
    </button>
    </div>
    </header>
    }
</>
  );
}

export default Header;
