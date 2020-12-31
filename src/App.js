import React, { useEffect, useState } from "react";

/* COMPONENTS */
import Header from "./component/Header";
import Todo from "./component/Todo";
import SpecialTodo from "./component/SpecialTodo";
import Footer from "./component/Footer";

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
    <div className="h-screen bg-bgBody-light dark:bg-bgBody-dark">
      <div className="relative">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <ul className="absolute w-full top-44">
          <Todo />
          <Todo />
          <SpecialTodo />
          <Footer />
        </ul>
      </div>
    </div>
  );
}

export default App;
