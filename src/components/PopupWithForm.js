import React, {useState, useEffect} from "react";
import "../App.css";
import { Link, Route } from 'react-router-dom';
function PopupWithForm({
  isOpen,
  isClose,
  onSubmit,
  btnClassName,
  name,
  form,
  title,
  buttonText,
  children,
  closeToOverlay,
  formToggle
})

{

  return (
    <div
      className={`popup ${isOpen && "popup_opened"}   popup_function_${name}  `}
      onClick={closeToOverlay}
    >
      <form noValidate className={`popup__form popup__form_function_${form}`}>
        <div id="form" className="popup__container">
          <button
            type="button"
            onClick={isClose}
            className={`popup__close popup_close_${name}`}
          ></button>
          <h2 className="popup__login">{title}</h2>
          {children}
          <button
          type="submit"
          onClick={onSubmit}
          className={`popup__save popup__save_function_${btnClassName}`}>{buttonText}</button>
          {formToggle ? <span className="popup__span"> или &nbsp;
          <Link className="link link_style_popup">Зарегистрироваться</Link></span>
          :
          <span className="popup__span"> или &nbsp;
          <Link className="link link_style_popup">Войти</Link></span>
          }
        </div>
      </form>
    </div>
  );
}

export default PopupWithForm;
