import React from "react";
import Profile from "../Assets/john-doe-image.png";
const Testinomial = () => {
  return (
    <div>
      <h1 className="text-center top-8 text-orange-600 font-bold">
        Testonomials
      </h1>
      <div className="works text-center">
        <h1 className="heading text-6xl font-medium my-1">
          What They Are Saying
        </h1>
        <div className="paragraph text-lg font-semibold my-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            incidunt nemo
          </p>
          <p>
            voluptate illum, vero ducimus dolorum totam ex, quasi magnam,
            suscipit minima facilis.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-9">
          <div className="bg-white w-1/2 h-auto rounded-xl flex flex-col items-center justify-around py-7 my-20">
            <img src={Profile} alt="" />
            <div className="text-black font-meduim text-xl py-7 mx-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              quae vero libero.
            </div>
            <div className="stars">
                 ♥♥♥♥♥
            </div>
            <h1 className="text-black font-semibold text-3xl py-4">Raja Naveed</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testinomial;
