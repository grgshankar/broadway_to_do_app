import { useThemeContext } from "./contexts/ThemeContext";
function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div>
      my current theme is {theme}
      <br></br>
      <button onClick={toggleTheme}>
        Change to {theme === "light-theme" ? "dark" : "light"}
      </button>
    </div>
  );
}

export default Navbar;
