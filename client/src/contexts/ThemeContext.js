import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {};
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
