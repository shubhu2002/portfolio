import React from "react";
import { NavLink } from "react-router-dom";
import DarkTheme from "./DarkTheme";
import icon from "../assets/icon3.png"

const Navbar = () => {
  return (
    
    <div className="w-full flex justify-end items-center sticky top-0 left-0 right-0 z-50 p-3 gap-5 shadow-sm dark:bg-slate-900 bg-gray-200 ">
    <div className="w-full flex justify-start ml-4 md:ml-10"><img src={icon} alt="icon" className="w-12 md:w-16 h-12 md:h-16"/></div>
      <input type="checkbox" id="menu-toggle" className="hidden" />
      <label
        htmlFor="menu-toggle"
        className="menu-icon md:hidden text-4xl cursor-pointer"
      >
        &#9776;
      </label>
      <div className="menu w-full md:flex hidden flex-col md:flex-row items-center justify-end md:static absolute right-0 top-[100%] bg-[rgba(229,231,235,0.9)] dark:bg-[rgba(0,0,0,0.9)] md:dark:bg-transparent tracking-wider captiliaze py-3 md:py-0 ">
        <div className="w-full md:w-[320px] flex flex-col md:flex-row justify-between items-center md:mr-10 mr-0 text-lg font-medium">
          <NavLink
            exact
            to="/"
            className="dark:hover:bg-secondary hover:bg-ternary px-4 py-1"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/about"
            className="dark:hover:bg-secondary hover:bg-ternary px-4 py-1"
          >
            About
          </NavLink>
          <NavLink
            exact
            to="/skills"
            className="dark:hover:bg-secondary hover:bg-ternary px-4 py-1"
          >
            Skills
          </NavLink>
          <NavLink
            exact
            to="/projects"
            className="dark:hover:bg-secondary hover:bg-ternary px-4 py-1"
          >
            Projects
          </NavLink>
        </div>
        <div className="w-full md:w-[145px] flex justify-center text-sm font-medium py-3">
          <NavLink
            exact
            to="/connect"
            className="dark:border-white border border-black px-3 py-2 dark:hover:bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(0,0,0,0.1)] dark:bg-slate-900 bg-lightBg"
          >
            Let's Connect
          </NavLink>
        </div>
      </div>
      <div className="w-[40px] flex items-center hover:animate-pulse">{<DarkTheme />}</div>
    </div>
  );
};
export default Navbar;
