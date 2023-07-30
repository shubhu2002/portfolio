import React from "react";
import ProjectCard from "./ProjectCard";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";
import pro5 from "../assets/pro5.png";

const Project = () => {
  return (
    <div className="w-full flex flex-col items-center pt-7 pb-16 dark:bg-darkBg bg-lightBg ">
      <div className="tracking-widest mb-12">
        <h1 className="text-4xl font-serif uppercase ">My Projects</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-10 font-Poppins capitalize ">
        <ProjectCard
          text="Personal Portfolio Responsive App developed by the help of React & Tailwind CSS "
          src={pro1}
          text2="Personal Portfolio App"
          link="https://shubhu-portfolio.netlify.com/"
          animation="fade-right"
        />
        <ProjectCard
          text="Todo Responsive App developed by React & Tailwind CSS with Local storage"
          src={pro2}
          text2="Todo App"
          link="https://personal-todos.netlify.app"
          animation="fade-down"
        />
        <ProjectCard
          text="Simple OnSight Cafe Responsive Page developed by HTML , CSS & JavaScript "
          src={pro4}
          text2="Onsight Cafe Page"
          link="https://github.com/shubhu2002/OnSight-Cafe.git"
          animation="fade-left"
        />
        <ProjectCard
          text="Door Dash Food Delivery Landing Page developed by React & Tailwind CSS"
          src={pro5}
          text2="Door Dash Landing Page"
          link="https://door-dash-food.netlify.app"
          animation="fade-right"
        />
        <ProjectCard
          text="Library Management Project Based On C++ File Handling Feature"
          src={pro3}
          text2="Library Management "
          link="https://github.com/shubhu2002/Library_Management.git"
          animation="fade-up"

        />
        {/* <ProjectCard text="hey this is shubhanshu the developer" src={img1} />   */}
      </div>
    </div>
  );
};
export default Project;
