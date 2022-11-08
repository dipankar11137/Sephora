import React from "react";

import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar2 = () => {
  return (
    <div className="navbar bg-base-100 mx-10">
      <div className="navbar-start">
        <div>
          <div className=" flex border-b-2 ml-10">
            <FaSearch className="text-pink-500 mr-2 my-auto" />
            <input
              type="text"
              placeholder="Search SEPHORA"
              className="input border-none"
            />
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0">
          <h1 className="text-6xl font-semibold font-mono ">SEPHORA</h1>
        </ul>
      </div>
      <div className="navbar-end mr-32">
        <h1 className="mr-8 border-r-2 border-stone-400 my-auto">
          <FaRegHeart className="text-pink-500 mr-4" />
        </h1>
        <h1 className="mr-8 border-r-2 border-stone-400 my-auto">
          <FaShoppingBag className="text-pink-500 mr-4" />
        </h1>
        <div className="flex my-auto ">
          <FaRegUser className="text-pink-500  mr-3 my-auto" />
          <h1 className="mr-8">Login</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
