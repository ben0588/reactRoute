import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './components/test/Home.js'
import About from "./components/test/About.js";


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        {/* (* 字號代表錯誤時訪問哪個頁面) */}
        <Route path="*" element={<About />} />
      </Routes>
    </div>
  );
}

export default App