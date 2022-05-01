import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path="/" />
        </Routes>
        <Routes>
          <Route path="/watched" />
        </Routes>
        <Routes>
          <Route path="/add" />
        </Routes>
      </Header>
    </Router>
  );
}

export default App;
