import React from "react";
import "../../CSS/JustLanded.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import embody from "../../../Images/Just/MO_Video_SS.webp";
import Slider from "react-slick";
import img1 from "../../../Images/Just/1 (1).webp";
import img2 from "../../../Images/Just/1 (2).webp";
import img3 from "../../../Images/Just/1 (3).webp";
import img4 from "../../../Images/Just/1 (4).webp";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const JustLanded = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    color: "red",
  };
  return (
    <div className="mx-10">
      <h1 className="text-center lg:text-5xl py-10 lg:mt-10">Just Landed</h1>
      <div className="grid lg:grid-cols-2">
        <div>
          <h1 className="text-end mr-10 font-bold">VIEW ALL </h1>
          <div className="px-10  mx-2">
            <Slider {...settings}>
              <div>
                <div class="container">
                  <img src={img1} alt="" class="image" />
                  <div class="overlay">
                    <div class="text flex gap-8">
                      <div>
                        <FaShoppingBag className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">Shop Now</h1>
                      </div>
                      <div>
                        {" "}
                        <FaHeart className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">FAVOURITE</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white text-center">
                  <h1>NEW2</h1>
                  <p>MOROCCANOIL</p>
                  <p>Hand Cream</p>
                  <p>Maroc</p>
                  <p>Rs. 990</p>
                </div>
              </div>
              <div>
                <div class="container">
                  <img src={img2} alt="" class="image" />
                  <div class="overlay">
                    <div class="text flex gap-8">
                      <div>
                        <FaShoppingBag className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">Shop Now</h1>
                      </div>
                      <div>
                        {" "}
                        <FaHeart className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">FAVOURITE</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white text-center">
                  <h1>NEW2</h1>
                  <p>MOROCCANOIL</p>
                  <p>Hand Cream</p>
                  <p>Maroc</p>
                  <p>Rs. 990</p>
                </div>
              </div>
              <div>
                <div class="container">
                  <img src={img3} alt="" class="image" />
                  <div class="overlay">
                    <div class="text flex gap-8">
                      <div>
                        <FaShoppingBag className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">Shop Now</h1>
                      </div>
                      <div>
                        {" "}
                        <FaHeart className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">FAVOURITE</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white text-center">
                  <h1>NEW2</h1>
                  <p>MOROCCANOIL</p>
                  <p>Hand Cream</p>
                  <p>Maroc</p>
                  <p>Rs. 990</p>
                </div>
              </div>
              <div>
                <div class="container">
                  <img src={img4} alt="" class="image" />
                  <div class="overlay">
                    <div class="text flex gap-8">
                      <div>
                        <FaShoppingBag className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">Shop Now</h1>
                      </div>
                      <div>
                        {" "}
                        <FaHeart className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">FAVOURITE</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white text-center">
                  <h1>NEW2</h1>
                  <p>MOROCCANOIL</p>
                  <p>Hand Cream</p>
                  <p>Maroc</p>
                  <p>Rs. 990</p>
                </div>
              </div>
              <div>
                <div class="container">
                  <img src={img1} alt="" class="image" />
                  <div class="overlay">
                    <div class="text flex gap-8">
                      <div>
                        <FaShoppingBag className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">Shop Now</h1>
                      </div>
                      <div>
                        {" "}
                        <FaHeart className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">FAVOURITE</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white text-center">
                  <h1>NEW2</h1>
                  <p>MOROCCANOIL</p>
                  <p>Hand Cream</p>
                  <p>Maroc</p>
                  <p>Rs. 990</p>
                </div>
              </div>
              <div>
                <div class="container">
                  <img src={img2} alt="" class="image" />
                  <div class="overlay">
                    <div class="text flex gap-8">
                      <div>
                        <FaShoppingBag className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">Shop Now</h1>
                      </div>
                      <div>
                        {" "}
                        <FaHeart className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">FAVOURITE</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white text-center">
                  <h1>NEW2</h1>
                  <p>MOROCCANOIL</p>
                  <p>Hand Cream</p>
                  <p>Maroc</p>
                  <p>Rs. 990</p>
                </div>
              </div>
              <div>
                <div class="container">
                  <img src={img3} alt="" class="image" />
                  <div class="overlay">
                    <div class="text flex gap-8">
                      <div>
                        <FaShoppingBag className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">Shop Now</h1>
                      </div>
                      <div>
                        {" "}
                        <FaHeart className="text-4xl text-pink-50 hover:cursor-pointer hover:text-red-500" />
                        <h1 className="textSize">FAVOURITE</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white text-center">
                  <h1>NEW2</h1>
                  <p>MOROCCANOIL</p>
                  <p>Hand Cream</p>
                  <p>Maroc</p>
                  <p>Rs. 990</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div>
          <img src={embody} alt="" />
          <h1 className="text-center lg:-ml-28 md:-ml-56 text-xl mt-1">
            Explore MoroccanOil Body
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JustLanded;
