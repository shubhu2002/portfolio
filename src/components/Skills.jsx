import React from "react";
import Svg from "./Svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const CarouselItem = (prop) => {
    return (
      <div className=" w-40 h-56 rounded-full p-4 relative m-[0px_auto_5px_auto]">
        <div className="w-32 h-32 rounded-full shadow-modi flex justify-center items-center ">
          <div className=" tracking-wider text-lg font-Poppins">{prop.per}</div>
        </div>
        <div className="py-6 tracking-wider font-Ysabeau relative">
          <div className=" text-center text-xl">{prop.topic}</div>
        </div>
        <Svg text={prop.svgtext} />
      </div>
    );
  };
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="w-full py-18 flex flex-col items-center my-14">
        <div className="w-[90%] dark:bg-darkBg bg-lightBg p-12 rounded-2xl ">
          <div className="tracking-widest ">
            <h1 className="text-4xl font-serif uppercase text-center">
              Skiils
            </h1>
          </div>
          <div className="w-[88%] mx-auto pt-16 ">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1600}
              ssr={true}
            >
              <CarouselItem per="85%" topic="HTML & CSS" svgtext="anim" />
              <CarouselItem per="70%" topic="JavaScript" svgtext="anim2" />
              <CarouselItem per="85%" topic="React JS" svgtext="anim3" />
              <CarouselItem per="65%" topic="Express JS" svgtext="anim4" />
              <CarouselItem per="80%" topic="C/C++" svgtext="anim5" />
              <CarouselItem per="75%" topic="mySQL" svgtext="anim6" />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
