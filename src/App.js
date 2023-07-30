import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from './components/Skills'
import Home from "./components/Home";
import Project from "./components/Projects";
import Connect from "./components/Connect"
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init({
  delay: 300,
  mirror: false,
  duration: 500,
  easing: 'ease-in-out',
});
const App = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-200 text-black w-full min-h-screen" >
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/skills" Component={Skills}/>
        <Route exact path="/projects" Component={Project}/>
        <Route exact path="/connect" Component={Connect}/>
      </Routes>
    </div>
  );
};

export default App;
