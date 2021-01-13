import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, toggleTodoAction } from "../store/todosAction";
import { filteredTodosSelector } from "../store/todosSelector";

/* ICONS */
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";
import { SpecialTodoStore } from "./SpecialTodo";

export function Todo({ todo, onToggle, onDelete, listId }) {
  return (
    <li
      className={`shadow-2xl flex p-4 w-11/12 mx-auto  bg-white dark:bg-elements-dark border-b dark:border-bdr-dark ${
        listId === 0 ? "rounded-t" : ""
      }`}
    >
      <div
        className={`w-5 h-4 grid place-items-center rounded-full border border-bdr-light dark:border-bdr-dark ${
          todo.completed
            ? "bg-gradient-to-r from-linearBackground-first to-linearBackground-second"
            : ""
        }`}
        onClick={() => onToggle(todo)}
      >
        {todo.completed ? <img className="w-2" src={check} alt="icon" /> : ""}
      </div>
      <input
        className="w-full ml-2 bg-white dark:bg-elements-dark font-light text-xs text-txt-light dark:text-txt-dark placeholder-txt-special dark:placeholder-input-dark focus:outline-none"
        type="text"
        value={todo.content}
      />
      <div className="w-4 h-4 cursor-pointer" onClick={() => onDelete(todo)}>
        <img className="" src={cross} alt="icon" />
      </div>
    </li>
  );
}

export function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="">
      {todos.map((todo, idx) => (
        <Todo
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          key={idx}
          listId={idx}
        />
      ))}
      <SpecialTodoStore />
    </ul>
  );
}

export function TodoListStore() {
  const todos = useSelector(filteredTodosSelector);
  const dispatch = useDispatch();
  const onToggle = useCallback((todo) => {
    dispatch(toggleTodoAction(todo));
  }, []); //eslint-disable-line
  const onDelete = (todo) => dispatch(deleteTodoAction(todo));

  return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />;
}
