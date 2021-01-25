import React from "react";
import { connect } from "react-redux";
import { clearCompletedTodo } from "../store/todosAction";
import { filteredTodosSelector } from "../store/todosSelector";
import { TodoFilterStore } from "../components/Footer";

/* HOOKS */
import useWindowDimensions from "../hooks/useWindowDimensions";

const classes = {
  div: "w-2/4",
  ul: "flex justify-evenly text-txt-dark",
  li: "",
};

export function SpecialTodo({ todos, onClear }) {
  const { width } = useWindowDimensions();

  return (
    <li className="flex justify-between p-4 w-11/12 md:w-full mx-auto bg-white dark:bg-elements-dark rounded-b-md shadow-2xl">
      <span className="text-sm text-input-dark font-light">
        {todos.length} items left
      </span>
      {width > 768 ? <TodoFilterStore classes={classes} /> : ""}
      <button
        className="text-sm text-input-dark font-light hover:text-txt-white"
        onClick={onClear}
      >
        Clear Completed
      </button>
    </li>
  );
}

export const SpecialTodoStore = connect(
  (state) => ({
    todos: filteredTodosSelector(state),
  }),
  (dispatch) => ({
    onClear: () => dispatch(clearCompletedTodo()),
  })
)(SpecialTodo);
