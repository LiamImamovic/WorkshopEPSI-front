import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/Home.jsx";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Asso } from "./page/Asso.jsx";
import { Bonplans } from "./page/BonPlans.jsx";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header.jsx";
import { Description } from "./page/description.jsx";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/asso" element={<Asso />}></Route>
            <Route path="/bonplans" element={<Bonplans />}></Route>
            <Route path="/asso/:id" element={<Description />} />
            <Route path="/bonplans/:id" element={<Description />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
