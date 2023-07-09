import React, { useState } from "react";
import sideImg from "../assets/s.png";

const Connect = () => {
  const intialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(intialDetails);
  const [btnText, setBtnText] = useState("Submit");
  const [status, setStatus] = useState({});
  const [cursor,setCursor]=useState({
    cursor:"pointer"
  });

  const onFormSubmit = (categorie, value) => {
    setFormDetails({
      ...formDetails,
      [categorie]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText("Sending...");
    setCursor({
      cursor:"wait"
    })
    let response = await fetch("https://portfolio-backend-y61q.onrender.com/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setBtnText("Send");
    setCursor({
      cursor:"pointer"
    })
    setFormDetails(intialDetails);
    if (response.ok){
      setStatus({success:true,message:"message sent successfully"});
    } else {
      setStatus({success:false,message:"something went wrong,please try again later"});
    }
    setInterval(()=>{
      setStatus({success:true,message:""});
    },2000)
  };

  return (
    <div className=" w-full py-7 dark:bg-darkBg bg-lightBg flex flex-col gap-10">
      <div className="w-full tracking-wider flex justify-center">
        <h1 className="text-4xl font-serif uppercase">Get In Touch</h1>
      </div>
      <div className=" w-full flex justify-evenly ">
        <div className="w-full md:w-[50%] flex items-center justify-center md:static absolute opacity-70 md:opacity-100">
          <img src={sideImg} alt="side" className="w-96 h-96" />
        </div>
        <div className="w-full md:w-[50%] h-auto m-auto pl-2 md:pl-12 z-50">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-wrap gap-10 font-mono text-lg ">
              <input
                type="text"
                placeholder="First Name"
                value={formDetails.firstName}
                onChange={(e) => onFormSubmit("firstName", e.target.value)}
                className="w-60 h-12 p-4 dark:bg-primary md:dark:bg-secondary bg-white border dark:border-white border-black rounded-xl outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formDetails.lastName}
                onChange={(e) => onFormSubmit("lastName", e.target.value)}
                className="w-60 h-12 p-4 dark:bg-primary md:dark:bg-secondary bg-white border dark:border-white border-black rounded-xl outline-none"
              />
              <input
                type="email"
                placeholder="E-Mail"
                value={formDetails.email}
                onChange={(e) => onFormSubmit("email", e.target.value)}
                className="w-60 h-12 p-4 dark:bg-primary md:dark:bg-secondary bg-white border dark:border-white border-black rounded-xl outline-none"
              />
              <input
                type="text"
                placeholder="Contact"
                value={formDetails.contact}
                onChange={(e) => onFormSubmit("contact", e.target.value)}
                className="w-60 h-12 p-4 dark:bg-primary md:dark:bg-secondary bg-white border dark:border-white border-black rounded-xl outline-none"
              />
              <textarea
                placeholder="Write Message Here...."
                value={formDetails.message}
                onChange={(e) => onFormSubmit("message", e.target.value)}
                className="input w-80 md:w-96 h-32 p-4 dark:bg-primary md:dark:bg-secondary bg-white border dark:border-white border-black rounded-xl outline-none"
              ></textarea>
            </div>
              <button className="w-32 h-12 my-7 text-lg uppercase font-Ysabeau tracking-wider font-medium text-white border border-white bg-btn hover:bg-[rgba(185,28,28,0.7)] rounded-lg" style={cursor}>
                {btnText}
              </button>
            {status.message && 
            <p className={status.success === false ? "text-red-500" : "text-green-500"}>{status.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Connect;
