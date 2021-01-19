import {
  ADD_TODO_ACTION,
  CLEAR_COMPLETED_ACTION,
  DELETE_TODO_ACTION,
  TOGGLE_TODO_ACTION,
  UPDATE_TODO_ACTION,
} from "./todosReducer";

export const toggleTodoAction = (todo) => ({
  type: TOGGLE_TODO_ACTION,
  payload: todo,
});

export const deleteTodoAction = (todo) => ({
  type: DELETE_TODO_ACTION,
  payload: todo,
});

export const addTodoAction = (content) => ({
  type: ADD_TODO_ACTION,
  payload: { content },
});

export const clearCompletedTodo = () => ({
  type: CLEAR_COMPLETED_ACTION,
});

export const updateTodoAction = (todo, newContent) => ({
  type: UPDATE_TODO_ACTION,
  payload: {
    todo,
    newContent,
  },
});
