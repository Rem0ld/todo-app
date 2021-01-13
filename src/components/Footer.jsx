import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../store/filterAction";
import { filterSelector } from "../store/filterSelector";

export function Footer({ value, onChange }) {
  return (
    <footer className="w-11/12 mx-auto mt-4">
      <div className="rounded-md bg-elements-light dark:bg-elements-dark shadow-sm">
        <ul className="w-4/6 mx-auto flex justify-evenly p-3 text-txt-dark">
          <li
            className={`cursor-pointer ${
              value === "all" ? "text-txt-filter" : ""
            }`}
            onClick={() => onChange("all")}
          >
            All
          </li>
          <li
            className={`cursor-pointer ${
              value === false ? "text-txt-filter" : ""
            }`}
            onClick={() => onChange(false)}
          >
            Active
          </li>
          <li
            className={`cursor-pointer ${
              value === true ? "text-txt-filter" : ""
            }`}
            onClick={() => onChange(true)}
          >
            Completed
          </li>
        </ul>
      </div>
      <p className="mt-12 text-center text-input-dark text-sm font-light">
        Drag and drop to reorder list
      </p>
    </footer>
  );
}

export const TodoFilterStore = connect(
  (state) => ({
    value: filterSelector(state),
  }),
  (dispatch) => ({
    onChange: (filter) => dispatch(updateFilter(filter)),
  })
)(Footer);
