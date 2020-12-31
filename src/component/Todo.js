import React from "react";

/* ICONS */
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";

const Todo = (props) => {
  return (
    <div className="flex p-4 w-11/12 mx-auto  bg-white dark:bg-elements-dark border-b dark:border-bdr-dark">
      <div className="w-5 h-4 rounded-full border border-bdr-light dark:border-bdr-dark"></div>
      <input
        className="w-full ml-2 bg-white dark:bg-elements-dark font-light text-xs text-txt-light dark:text-txt-dark placeholder-txt-special dark:placeholder-input-dark focus:outline-none"
        type="text"
        placeholder="Create a new todo..."
      />
      <div className="w-4 h-4 cursor-pointer">
        <img className="" src={cross} alt="icon" />
      </div>
    </div>
  );
};

export default Todo;
