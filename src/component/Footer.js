import React from "react";

const Footer = (props) => {
  return (
    <footer className="w-11/12 mx-auto mt-4">
      <div className="rounded-md bg-elements-light dark:bg-elements-dark">
        <ul className="w-4/6 mx-auto flex justify-evenly p-3 text-txt-dark">
          <li className="cursor-pointer">All</li>
          <li className="cursor-pointer">Active</li>
          <li className="cursor-pointer">Completed</li>
        </ul>
      </div>
      <p className="mt-12 text-center text-input-dark text-sm font-light">
        Drag and drop to reorder list
      </p>
    </footer>
  );
};

export default Footer;
