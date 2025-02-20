import "./style.css";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

function Header() {
  return (
    <header className="header">
      <div className="title">
        <h1>Pomodoro</h1>
        <h2>Gerencie seu tempo de maneira mágica!</h2>
      </div>

      <div className="actions">
        <ThemeToggleButton />
      </div>
    </header>
  );
}

export default Header;
