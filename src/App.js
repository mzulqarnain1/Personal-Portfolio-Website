import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ThemeToggle from "./components/themeToggle/ThemeToggle";

function App() {
  return (
    <div>
      <ThemeToggle />
      <Main />
    </div>
  );
}

export default App;
