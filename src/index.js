import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import Abount from "./components/Abount/Abount";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <header className="header">
      <Nav />
    </header>
    <main className="main">
      <Routes>
        <Route path="/abount" element={<Abount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
    <footer className="footer">
      <Footer />
    </footer>
  </BrowserRouter>
);
