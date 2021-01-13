export const UPDATE_FILTER = "UPDATE_FILTER";

export default function filtersReducer(state = "all", action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.payload;
    default:
      return state;
  }
}
