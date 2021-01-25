import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../store/filterAction";
import { filterSelector } from "../store/filterSelector";

export function Footer({ value, onChange, classes }) {
  return (
    <div className={classes ? classes.div : ""}>
      <ul className={classes ? classes.ul : ""}>
        <li
          className={`cursor-pointer hover:text-bdr-dark dark:hover:text-txt-white ${
            value === "all" ? "text-txt-filter" : ""
          }`}
          onClick={() => onChange("all")}
        >
          All
        </li>
        <li
          className={`cursor-pointer hover:text-bdr-dark dark:hover:text-txt-white ${
            value === false ? "text-txt-filter" : ""
          }`}
          onClick={() => onChange(false)}
        >
          Active
        </li>
        <li
          className={`cursor-pointer hover:text-bdr-dark dark:hover:text-txt-white ${
            value === true ? "text-txt-filter" : ""
          }`}
          onClick={() => onChange(true)}
        >
          Completed
        </li>
      </ul>
    </div>
  );
}

export const TodoFilterStore = connect(
  (state, props) => ({
    value: filterSelector(state),
    props: props,
  }),
  (dispatch) => ({
    onChange: (filter) => dispatch(updateFilter(filter)),
  })
)(Footer);
