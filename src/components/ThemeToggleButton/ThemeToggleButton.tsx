import { useContext } from "react";
import "./style.css";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../../contexts/ThemeContext";

function ThemeToggleButton() {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  const { theme, toggleTheme } = context;

  return (
    <button className="toggle_btn" onClick={toggleTheme}>
      {theme === "dark" ? (
        <FiSun title="Mude para o tema claro" />
      ) : (
        <FiMoon title="Mude para o tema escuro" />
      )}
    </button>
  );
}

export default ThemeToggleButton;
