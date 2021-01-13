import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

/* ICONS */
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import { addTodoAction } from "../store/todosAction";

const Header = (props) => {
  const dispatch = useDispatch();
  const input = useRef(null);

  useEffect(() => {
    input.current.value = "";
    input.current.focus();
  }, []); //eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.current.value.length > 0) {
      dispatch(addTodoAction(input.current.value));
      input.current.value = "";
      input.current.focus();
    }
  };
  return (
    <header className="h-52 sm:bg-heroMobileLight sm:dark:bg-heroMobileDark lg:bg-heroDesktopLight lg:dark:bg-heroDesktopDark bg-no-repeat">
      <div className="flex justify-between items-center w-11/12 mx-auto mb-8 pt-11">
        <h1 className="text-white text-2xl font-semibold tracking-widest">
          TODO
        </h1>
        <img
          className="w-5 cursor-pointer"
          src={props.theme === "dark" ? sun : moon}
          alt="icon"
          onClick={props.toggleTheme}
        />
      </div>
      <form
        className="flex p-4 w-11/12 mx-auto  bg-white dark:bg-elements-dark rounded-md"
        onSubmit={handleSubmit}
      >
        <div
          className="w-5 h-5 rounded-full border border-bdr-light dark:border-bdr-dark"
          onClick={handleSubmit}
        ></div>
        <input
          className="w-full ml-2 bg-white dark:bg-elements-dark font-light text-xs text-txt-light dark:text-txt-dark placeholder-txt-special dark:placeholder-input-dark focus:outline-none"
          type="text"
          placeholder="Create a new todo..."
          ref={input}
        />
      </form>
    </header>
  );
};

export default Header;
