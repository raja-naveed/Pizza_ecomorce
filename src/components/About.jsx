import React from "react";
import AboutImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="aboutcontainer">
      <h2 className="text-center mt-8 text-orange-600 font-bold">About</h2>
      <div className="flex flex-row items-center justify-around px-6 ">
        <div className="img w-2/5">
          <img className="" src={AboutImage} alt="" />
        </div>
        <div className="container w-1/2 mx-8">
          <div className="heading text-6xl font-medium my-1">
            <h2>Food Is An</h2>
            <h2 className="py-5">Important Part of  </h2>
            <h2>Balanced Diet</h2>
          </div>
          <div className="paragraph text-lg font-semibold my-4">
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam. </p>
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt s at fringilla quam.</p>
          </div>
          <div className="button font-semibold flex flex-row items-center justify-between text-white">
            <button className="bg-orange-600 py-3 px-5 rounded-full ">
              Order Now
            </button>
            <button className="bg-orange-600 py-3 px-5 rounded-full ">
              Watch Video 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
