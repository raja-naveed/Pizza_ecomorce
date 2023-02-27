import React from "react";
import HomeImg from "../Assets/home-banner-image.png";

const First = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-around px-6">
        <div className="container w-1/2 mx-8">
          <div className="heading text-6xl font-medium my-1">
            <h2>Your Favourite</h2>
            <h2 className="py-5">Food Delivered </h2>
            <h2>Hot & Fresh</h2>
          </div>
          <div className="paragraph text-lg font-semibold my-4">
            <p>Healthy switcher chefs do all the prep work, like </p>
            <p>peeding, chopping & marinating, so you can cook a fresh food.</p>
          </div>
          <div className="button font-extrabold ">
            <button className="bg-orange-600 py-3 px-5 rounded-full ">
              Order Now
            </button>
          </div>
        </div>
        <div className="img w-2/5">
          <img className="" src={HomeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default First;
