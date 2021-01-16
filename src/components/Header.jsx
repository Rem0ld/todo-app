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
    <header className="h-52 sm:bg-heroMobileLight sm:dark:bg-heroMobileDark md:bg-heroDesktopLight md:dark:bg-heroDesktopDark md:bg-cover bg-no-repeat">
      <div className="flex justify-between items-center w-11/12 md:w-3/5 lg:w-2/6 mx-auto mb-8 pt-11">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold tracking-widest">
          TODO
        </h1>
        <img
          className="w-6 cursor-pointer"
          src={props.theme === "dark" ? sun : moon}
          alt="icon"
          onClick={props.toggleTheme}
        />
      </div>
      <form
        className="flex items-center p-4 w-11/12 md:w-3/5 lg:w-2/6 mx-auto  bg-white dark:bg-elements-dark rounded-md"
        onSubmit={handleSubmit}
      >
        <div
          className="w-5 h-5 flex-none rounded-full border border-bdr-light dark:border-bdr-dark"
          onClick={handleSubmit}
        ></div>
        <input
          className="w-full ml-4 bg-white dark:bg-elements-dark font-normal text-sm text-txt-light dark:text-txt-white placeholder-txt-special dark:placeholder-input-dark focus:outline-none"
          type="text"
          placeholder="Create a new todo..."
          ref={input}
        />
      </form>
    </header>
  );
};

export default Header;
