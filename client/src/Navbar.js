import { useContext } from "react";
import { ThemeContext } from "../src/contexts/ThemeContext";

function Navbar() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("Theme should be called inside ThemeContextProvider");
  const { theme, setTheme, toggleTheme } = context;
  return (
    <div>
      my current theme is {theme}
      <br></br>
      <button onClick={() => setTheme("dark-theme")}>Dark Theme</button>
      <button onClick={() => setTheme("light-theme")}>Light Theme</button>
    </div>
  );
}

export default Navbar;
