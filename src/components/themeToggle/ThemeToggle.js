import React, { useEffect, useState } from "react";
import "./ThemeToggle.scss";

function getInitialTheme() {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#15181a" : "#fcfcfb");
    }
  }, [theme]);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(current => (current === "dark" ? "light" : "dark"))}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <line x1="12" y1="1.5" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22.5" />
            <line x1="1.5" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22.5" y2="12" />
            <line x1="4.5" y1="4.5" x2="6.2" y2="6.2" />
            <line x1="17.8" y1="17.8" x2="19.5" y2="19.5" />
            <line x1="4.5" y1="19.5" x2="6.2" y2="17.8" />
            <line x1="17.8" y1="6.2" x2="19.5" y2="4.5" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.5 14.4A8.5 8.5 0 1 1 9.6 3.5a7 7 0 0 0 10.9 10.9Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
