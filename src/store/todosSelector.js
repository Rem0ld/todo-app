import { createSelector } from "reselect"; // Memoization
import { filterSelector } from "./filterSelector";

export const todosSelector = ({ todos }) => todos;

export const filteredTodosSelector = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => {
    if (filter === "all") {
      return todos;
    }
    return todos.filter((todo) => todo.completed === filter);
  }
);
