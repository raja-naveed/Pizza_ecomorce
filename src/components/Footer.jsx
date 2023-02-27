import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-around py-20 font-semibold text-lg">
      <div className="social">
        <div className="logo ">
          <h2 className="text text-3xl font-semibold text-orange-500">
            FOODIE
          </h2>
        </div>
        <div className="socials py-7">
            <h1>Facebook</h1>
            <h1>Twitter</h1>
            <h1>Instagram </h1>
            <h1>LinkedIn</h1>
        </div>
      </div>
      <div className="others flex flex-row items-start justify-around left]">
        <div>
            <h1>Quality</h1>
            <h1>Help </h1>
            <h1>Share</h1>
            <h1>Career</h1>
            <h1>Testinomails</h1>
            <h1>Work </h1>
        </div>
        <div className="px-12">
            <h1>244-5333-7783</h1>
            <h1>hello@food.com </h1>
            <h1>contact@food.com</h1>
            <h1>about@gmail.com</h1>
        </div>
        <div>
            <h1>Terms and Conditions</h1>
            <h1>Privacy Policy </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
