import React from "react";
import "../../CSS/Navbar.css";
import nameIcon from "../../../Images/name.webp";
import { CiLocationOn } from "react-icons/ci";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-teal-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex item-center">
          <div className="ml-10 mr-3">
            <a className="" href="#">
              <img className="lg:w-32" src={nameIcon} alt="" />
            </a>
          </div>

          <div className="w-[1px] h-[30px] bg-gray-500 mx-2 my-auto"></div>

          <div className="my-auto ml-3 flex">
            <CiLocationOn className=" mr-2 text-pink-700 font-bold text-xl " />
            <h1 className="">Stor Location</h1>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 lg:mr-20 md:mr-10">
          <li>
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-purple-900 -mr-2"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-500 -mr-2"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-pink-600"
              />
            </div>
          </li>
          <div className="pl-8 pr-8">
            <div className="mx-auto">
              <h1>Get 10% OFF on your first purchase. Use Code : </h1>

              <h1 className="lg:ml-32">BEAUTY 10</h1>
            </div>
          </div>
          <li>
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-pink-600 -mr-2"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-500 -mr-2"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-purple-900 "
              />
            </div>
          </li>
        </ul>

        <div className="lg:mr-20 flex">
          <div className="border-r-2 border-stone-400 mr-3  flex">
            <FaFileDownload className="text-pink-500 my-auto mr-3" />
            <h1 className="pr-3"> Get APP</h1>
          </div>
          <div className="border-r-2 border-stone-400  mr-3 flex">
            <FaCodepen className="text-pink-500 my-auto mr-3" />
            <h1 className="pr-3">Track Order</h1>
          </div>
          <div className=" flex">
            <FaGlassMartiniAlt className="text-pink-500 my-auto mr-3" />
            <h1>Loyalty</h1>
          </div>
        </div>
      </div>
      {/* <div className="navbar-end"></div> */}
    </div>
  );
};

export default Navbar;
