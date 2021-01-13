let id = 0;
const initialState = [];

export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
export const TOGGLE_TODO_ACTION = "TOGGLE_TODO_ACTION";
export const CLEAR_COMPLETED_ACTION = "CLEAR_COMPLETED_ACTION";

const addTodo = (state, action) => {
  return [...state, { id: ++id, completed: false, ...action.payload }];
};

const deleteTodo = (state, action) => {
  return state.filter((todo) => todo.id !== action.payload.id);
};

const toggleTodo = (state, action) => {
  return state.map((todo) =>
    todo.id === action.payload.id
      ? { ...todo, completed: !todo.completed }
      : todo
  );
};

const clearCompletedTodo = (state, action) => {
  return state.filter((todo) => todo.completed !== true);
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return addTodo(state, action);
    case DELETE_TODO_ACTION:
      return deleteTodo(state, action);
    case TOGGLE_TODO_ACTION:
      return toggleTodo(state, action);
    case CLEAR_COMPLETED_ACTION:
      return clearCompletedTodo(state, action);
    default:
      return state;
  }
}
