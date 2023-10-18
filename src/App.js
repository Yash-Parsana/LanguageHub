import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import English from "./components/English";
import Sanskrit from "./components/Sanskrit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/sanskrit" element={<Sanskrit />} />
        <Route exact path="/english" element={<English />} />
      </Routes>
    </div>
  );
}

export default App;
