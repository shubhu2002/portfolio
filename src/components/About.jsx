import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf"
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center pt-7 pb-16 dark:bg-darkBg bg-lightBg ">
      <div className="tracking-widest mb-12">
        <h1 className="text-4xl font-serif uppercase ">About Me</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row md:items-start items-center p-2">
        <div className="w-full md:w-[50%] flex justify-center items-center m-2 rounded-full ">
          <img src={profile} alt="profile" className="w-64 md:w-72 h-64 md:h-72 object-fill rounded-full border-4 dark:border-white border-black" />
        </div>
        <div className="w-full md:w-[40%] flex justify-start items-start flex-col m-2">
          <h1 className=" font-Ysabeau text-xl text-center px-2 ">
            {" "}
            Hey Guys !! This is Shubhanshu Saxena. I am 21. I started my coding journey by
            learning basic C/C++ language. Now I am in my journey of Web
            Developement. I believe Web Desgin can be more diverse and
            inspiring.I have developed many front-end project's from well known
            Applications.
          </h1>
          <div className="w-full flex justify-center my-4 tracking-wider uppercase  ">
            <Link to={resume} target="_blank" className="border-white border px-5 rounded-md py-2 hover:bg-[rgba(185,28,28,0.7)] bg-btn text-white">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
