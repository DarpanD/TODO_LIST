import React from "react";
import "./App.css";
import TodoPage from "./CreatedComponents/TodoPage";
import Navbar from "./CreatedComponents/Navbar";
import { Footer } from "./CreatedComponents/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./CreatedComponents/About";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
