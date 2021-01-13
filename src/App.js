import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store/index";

/* COMPONENTS */
import Header from "./components/Header";
import { TodoFilterStore } from "./components/Footer";
import { TodoListStore } from "./components/Todo";

function App() {
  const [theme, setTheme] = useState("");

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
            <TodoFilterStore />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
