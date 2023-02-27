import React from "react";
import PickMeal from '../Assets/pick-meals-image.png';
import Choose from '../Assets/choose-image.png';
import Delivery from '../Assets/delivery-image.png';


const Work = () => {
    return (
        <div>
            <h1 className="text-center top-8 text-orange-600 font-bold">Work</h1>
            <div className="works text-center">
                <h1 className="heading text-6xl font-medium my-1">How it Works</h1>
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
                <div className='bg-white w-1/5 h-auto rounded-xl flex flex-col items-center justify-around py-7 my-20'>
                    <img src={PickMeal} alt="" />
                    <h1 className="text-black font-semibold text-3xl py-4">Pick Meals</h1>
                    <div className="text-black font-meduim text-lg py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quae vero libero.</div>
                </div >
                <div className='bg-white w-1/5 h-auto rounded-xl flex flex-col items-center justify-around py-7 my-20'>
                    <img src={Choose} alt="" />
                    <h1 className="text-black font-semibold text-3xl py-4">Choose How Often</h1>
                    <div className="text-black font-meduim text-lg py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quae vero libero.</div>
                </div >
                <div className='bg-white w-1/5 h-auto rounded-xl flex flex-col items-center justify-around py-7 my-20'>
                    <img src={Delivery} alt="" />
                    <h1 className="text-black font-semibold text-3xl py-4">Fast Deliveries</h1>
                    <div className="text-black font-meduim text-lg py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quae vero libero.</div>
                </div >
                </div>
                
            </div>
        </div>
    );
};

export default Work;
