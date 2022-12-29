import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import "./App.css";
import About from "./components/layout/About";
import Navbar from "./components/layout/Navbar";
import Work from "./components/layout/Work";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  console.log(theme);
  return (
    <div
      className={`App ${theme}`}
      style={{
        backgroundColor: theme === "light" ? "white" : "#21212b",
        color: theme === "light" ? "#21212b" : "white",
      }}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <Element name="about">
        <About theme={theme} />
      </Element>

      <Element name="work">
        <Work theme={theme} />
      </Element>
      <footer className="center footer"></footer>
    </div>
  );
}

export default App;
