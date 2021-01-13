import React from "react";
import { connect } from "react-redux";
import { clearCompletedTodo } from "../store/todosAction";
import { filteredTodosSelector } from "../store/todosSelector";

export function SpecialTodo({ todos, onClear }) {
  return (
    <div className="flex justify-between p-4 w-11/12 mx-auto  bg-white dark:bg-elements-dark rounded-b-md shadow-2xl">
      <span className="text-xs text-input-dark font-light">
        {todos.length} items left
      </span>
      <button className="text-xs text-input-dark font-light" onClick={onClear}>
        Clear Completed
      </button>
    </div>
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
