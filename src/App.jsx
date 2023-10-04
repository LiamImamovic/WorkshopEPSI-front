import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./resources/js/page/Home.jsx";
import { Login } from "./resources/js/components/Login";
import { Signup } from "./resources/js/components/Signup";
import { Asso } from "./resources/js/page/Asso.jsx";
import { Bonplans } from "./resources/js/page/BonPlans.jsx";
import { Dashboard } from "./resources/js/components/Dashboard";
import { Header } from "./resources/js/components/Header.jsx";
import { Description } from "./resources/js/page/description.jsx";

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
            <Route path="/bonplan" element={<Bonplans />}></Route>
            <Route path="/asso/:id" element={<Description />} />
            <Route path="/bonplan/:id" element={<Description />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
