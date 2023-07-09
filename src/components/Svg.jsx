import React from "react";
const Svg = (props) => {
  const keyf = {
    animation: props.text+" 2s linear forwards"
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="160px"
      height="160px"
      className="absolute top-0 left-0"
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stopColor="#e91e63" />
          <stop offset="100%" stopColor="#673ab7" />
        </linearGradient>
      </defs>
      <circle
        cx="80"
        cy="80"
        r="70"
        strokeLinecap="round"
        className=" fill-none stroke-[url(#GradientColor)]  "
        strokeWidth="20px"
        strokeDasharray="440"
        strokeDashoffset="440"
        style={keyf}
      />
    </svg>
  );
};

export default Svg;
