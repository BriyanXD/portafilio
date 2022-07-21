import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
//import Error from "./components/Error/Error";
import Abount from "./components/Abount/Abount";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header className="header">
        <Nav />
      </header>
      <main className="main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/abount" element={<Abount />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
