import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React from "react";
import { scroller } from "react-scroll";
import "./navbar.css";

const Navbar = ({ theme, setTheme }) => {
  const [darkMode, setDarkMode] = React.useState(true);

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={`navbar-container`}>
      <span className="logo">
        <span>Shinyuy </span>
        <span>Marcel</span>
      </span>
      <ul>
        <li onClick={() => scrollToElement("about")}>About</li>
        <li onClick={() => scrollToElement("work")}>
          Work Experience
        </li>
        <li>Projects</li>
        <li>CV</li>
        <li>
          {theme === "dark" ? (
            <WbSunnyIcon onClick={toggleTheme} />
          ) : (
            <DarkModeIcon onClick={toggleTheme} />
          )}
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
