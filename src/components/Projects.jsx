import React from "react";
import { Link } from "react-router-dom";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";

const Project = () => {
  const ProjectCard = (props) => {
    return (
      <div className="card w-[160px] md:w-[360px] h-[90px] md:h-[210px] place-content-center dark:shadow-[3px_3px_15px_white] shadow-[3px_3px_15px_black] overflow-hidden relative rounded-xl">
        <img
          src={props.src}
          alt="img"
          className="w-[160px] md:w-[360px] h-[90px] md:h-[250px] rounded-xl"
        />
        <Link to={props.link} target="_blank">
          <div className="intro absolute w-[160px] md:w-[360px] h-[10px] p-3 text-white box-border bottom-0 z-10 bg-primary">
            <p className=" text-sm md:text-lg mb-2 ">{props.text2}</p>
            <p className=" text-sm mb-2 md:block hidden">{props.text}</p>
          </div>
        </Link>
      </div>
    );
  };
  return (
    <div className="w-full flex flex-col items-center pt-7 pb-16 dark:bg-darkBg bg-lightBg ">
      <div className="tracking-widest mb-12">
        <h1 className="text-4xl font-serif uppercase ">My Projects</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-10 font-Poppins capitalize ">
        <ProjectCard
          text="Personal Portfolio Responsive App developed by the help of React & Tailwind CSS "
          src={pro1}
          text2="Personal Portfolio App"
          link=""
        />
        <ProjectCard
          text="Todo Responsive App developed by React & Tailwind CSS with Local storage"
          src={pro2}
          text2="Todo App"
          link="https://github.com/shubhu2002/Todo-Sample-App"
        />
          <ProjectCard
            text="Simple OnSight Cafe Responsive Page developed by HTML , CSS & JavaScript "
            src={pro4}
            text2="Onsight Cafe Page"
            link="https://github.com/shubhu2002/OnSight-Cafe.git"
          />
        <ProjectCard
          text="Library Management Project Based On C++ File Handling Feature"
          src={pro3}
          text2="Library Management "
          link="https://github.com/shubhu2002/Library_Management.git"
        />
        {/* <ProjectCard text="hey this is shubhanshu the developer" src={img1} /> */}
        {/* <ProjectCard text="hey this is shubhanshu the developer" src={img1} />   */}
      </div>
    </div>
  );
};
export default Project;
