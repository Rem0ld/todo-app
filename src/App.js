import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store/index";

/* COMPONENTS */
import Header from "./components/Header";
import { TodoFilterStore } from "./components/Footer";
import { TodoListStore } from "./components/Todo";

/* HOOKS */
import useWindowDimensions from "./hooks/useWindowDimensions";

const classes = {
  div: "rounded-md bg-elements-light dark:bg-elements-dark shadow-sm",
  ul: "w-4/6 mx-auto flex justify-evenly p-3 text-txt-dark",
  li: "",
};

function App() {
  const [theme, setTheme] = useState("");
  const { width } = useWindowDimensions();

  const toggleTheme = () => {
    const html = document.querySelector("html");
    theme === "dark" ? setTheme("light") : setTheme("dark");
    html.classList.toggle("dark");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    setTheme("dark");
    html.classList.toggle("dark");
  }, []);

  return (
    <Provider store={store}>
      <div className="h-screen bg-bgBody-light dark:bg-bgBody-dark">
        <div className="relative">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <div className="absolute w-full top-44">
            <TodoListStore />
            <footer className="w-11/12 md:w-3/5 lg:w-2/6 mx-auto mt-4">
              {width < 769 ? <TodoFilterStore classes={classes} /> : ""}
              <p className="mt-12 text-center text-input-dark text-sm font-light">
                Drag and drop to reorder list
              </p>
            </footer>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
