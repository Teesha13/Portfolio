export default function Navbar({ isDark, setIsDark }) {
  return (
    <header className="header">
        <span className="logo">Teesha Panchal</span>

        <div className="header-actions">
          <nav>
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setIsDark((d) => !d)}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
    </header>
  );
}