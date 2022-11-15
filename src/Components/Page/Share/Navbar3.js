import React from "react";
import "../../CSS/Navbar3.css";
import Megaitems2 from "./Megaitems2";
import MegaManuItems from "./MegaManuItems";

const Navbar3 = () => {
  return (
    <div className="mb-20 position ">
      <div className="">
        <nav className="border-b-2 bg-white">
          <div className="wrapper">
            <ui className="nav-links grid lg:grid-cols-7 gap-x-20 text-center ">
              <li className=" ">
                <a href="#">Sale</a>
                <MegaManuItems />
              </li>

              <li className="">
                <a href="#">MAKEUP</a>
                <Megaitems2 />
              </li>
              <li>
                <a href="#">SKINCARE</a>
                <MegaManuItems />
              </li>
              <li>
                <a href="#">FRAGRANCE</a>
                <MegaManuItems />
              </li>
              <li>
                <a href="#">HAIRCARE</a>
                <Megaitems2 />
              </li>
              <li>
                <a href="#">TOOLS </a>
                <MegaManuItems />
              </li>
              <li>
                <a href="#">BRANDS</a>
                <MegaManuItems />
              </li>
            </ui>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar3;
