import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainGrid from "./components/MainGrid";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.body.className = darkMode ? "darkMode" : "lightMode";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="container">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <MainGrid />
    </div>
  );
}

export default App;