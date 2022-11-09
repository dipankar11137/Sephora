import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../CSS/Banner.css";
import img1 from "../../../Images/Banner/Morroccanoil_Homepagebanner_Bodycaredesktop.webp";
import img2 from "../../../Images/Banner/Givenchy_Topbannerdesktop.webp";
import img3 from "../../../Images/Banner/ND_Homepagebannerdesktop.webp";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    fade: true,
  };
  return (
    <div className="">
      <div className=" ">
        <Slider {...settings}>
          <div div className="relative  w-screen">
            <img className="object-fill sliderImg " src={img1} alt="" />
          </div>
          <div div className="relative h-scren w-screen ">
            <img className="object-fill sliderImg  " src={img2} alt="" />
          </div>
          <div div className="relative h-scren w-screen ">
            <img className="object-fill sliderImg  " src={img3} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
