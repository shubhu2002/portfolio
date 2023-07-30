import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="card w-[160px] md:w-[360px] h-[90px] md:h-[210px] place-content-center dark:shadow-[3px_3px_15px_white] shadow-[3px_3px_15px_black] overflow-hidden relative rounded-xl" data-aos={props.animation}>
      <img
        src={props.src}
        alt="img"
        className="w-[160px] md:w-[360px] h-[90px] md:h-[250px] rounded-xl object-fill"
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

export default ProjectCard;
