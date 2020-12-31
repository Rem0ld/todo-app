import React from "react";

const SpecialTodo = (props) => {
  return (
    <div className="flex justify-between p-4 w-11/12 mx-auto  bg-white dark:bg-elements-dark rounded-b-md">
      <span className="text-xs text-input-dark font-light">
        {/* number */}items left
      </span>
      <button className="text-xs text-input-dark font-light">
        Clear Completed
      </button>
    </div>
  );
};

export default SpecialTodo;
