import React from "react";
import img1 from "../../../Images/BrandOF/Lips.webp";
import img2 from "../../../Images/BrandOF/Eyes.webp";
import img3 from "../../../Images/BrandOF/CheekGlow.webp";

const BrandOfTheWeek = () => {
  return (
    <div className="px-10">
      <h1 className="font-bold text-center lg:text-5xl md:text-3xl text-2xl py-14 mt-5">
        # SerhoraBrandOfTheWeek
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        <div>
          <img src={img1} alt="" />
          <h1 className="text-2xl text-center mt-2">LIPS</h1>
        </div>
        <div>
          <img src={img1} alt="" />
          <h1 className="text-2xl text-center mt-2">EYES</h1>
        </div>
        <div>
          <img src={img1} alt="" />
          <h1 className="text-2xl text-center mt-2">CHEEK & GLOW</h1>
        </div>
      </div>
    </div>
  );
};

export default BrandOfTheWeek;
