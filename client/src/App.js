import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Signin from "./components/signup-signin/Signin";
import Workout from "./components/workout/WorkoutPage";

function HomeContent() {
  return (
    <>
    <Home/>
      <About />
      <Pricing />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/api/signin" element={<Signin />} />
        <Route path="/workout" element={<Workout/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
