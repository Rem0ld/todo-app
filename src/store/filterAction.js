import { UPDATE_FILTER } from "./filterReducer";

export const updateFilter = (filter) => ({
  type: UPDATE_FILTER,
  payload: filter,
});
