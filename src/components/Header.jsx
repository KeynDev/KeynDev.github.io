import logo from "../ResourceImages/websiteicon.png";



export default function Header({ darkMode, toggleTheme }) {
  return (
    <header>
      <div className="headerContent">
        <div className="brand">
          <a href="/" className="logoLink">
            <div className="logo">
                <img src={logo} alt="Kyn Logo" className="logoImage" />
            </div>
          </a>
          <div className="brandText">
            <h1>"Keyn" - Jacob Nicholls-Smart</h1>
            <p>Game & Web Developer — Keyboard tapper</p>
          </div>
        </div>

        <nav>
          <button
            className="themeToggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
}