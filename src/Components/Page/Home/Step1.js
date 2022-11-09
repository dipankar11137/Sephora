import React from "react";

const Step1 = () => {
  return (
    <div className="mx-10 mt-20">
      <div className="text-white grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2">
        <div className=" w-48 h-16 font-bold bg-black text-neutral-content">
          <h1 className=" py-5 text-center">STEALS & DEALS</h1>
        </div>
        <div className=" w-48 h-16 bg-black text-neutral-content">
          <h1 className="font-bold py-2 text-center">
            BEAUTY MINIS <br /> UNDER $299
          </h1>
        </div>
        <div className=" w-48 h-16 bg-black text-neutral-content">
          <h1 className="font-bold py-2 text-center">
            EVERYDAY <br /> ESSENTIALS
          </h1>
        </div>
        <div className=" w-48 h-16 bg-black text-neutral-content">
          <h1 className="font-bold py-4 text-center">TRENDING NOW</h1>
        </div>
        <div className=" w-48 h-16 bg-black text-neutral-content">
          <h1 className="font-bold py-4 text-center">EDITOR'S PICKS</h1>
        </div>
        <div className=" w-48 h-16 bg-black text-neutral-content">
          <h1 className="font-bold py-4 text-center">TOP FRAGRANCES</h1>
        </div>
      </div>
    </div>
  );
};

export default Step1;
