import React from "react";
import "../../CSS/Navbar.css";

const Navbar3 = () => {
  const handleMouseOver = (thisElement) => {
    console.log(thisElement);
  };
  return (
    <div className="position">
      {" "}
      <div className="mx-24 pt-5 ">
        <div className="grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 gap-x-4 border-b-2 pb-3">
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className=" m-1 font-bold p-3 hover:text-pink-500 hover:shadow-xl text-center"
            >
              SALE
            </label>
            {/* <ul
              tabIndex={0}
              className="mt-3 dropdown-content menu p-2 shadow-lg bg-base-100  w-11/12"
            >
              <div className="gird grid-cols-2">
                <h1>hello</h1>
                <h2>hii</h2>
              </div>
            </ul> */}
          </div>
          {/* MAKEUP */}
          <div className="dropdown dropdown-hover">
            <label
              onMouseOver={() => handleMouseOver(this)}
              tabIndex={0}
              className=" m-1 font-bold p-3 hover:text-pink-500 shadowEdit text-center"
            >
              MAKEUP
            </label>
            <ul
              style={{
                width: "100vw",
                zIndex: "10000",
                backgroundColor: "gray",
              }}
              tabIndex={0}
              className="mt-3 dropdown-content menu p-2 shadow-lg bg-base-100  w-11/12"
            >
              <div className="gird grid-cols-2">
                <h1>hello</h1>
                <h2>hii</h2>
              </div>
            </ul>
          </div>

          {/* SKINCARE */}
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className=" m-1 font-bold p-3 hover:text-pink-500 hover:border-t-2 border-t-slate-400 hover:shadow-xl text-center"
            >
              SKINCARE
            </label>
            <ul
              tabIndex={0}
              className=" mt-3 dropdown-content menu p-2 shadow-lg bg-base-100  w-11/12"
            >
              <div className="gird grid-cols-2">
                <h1>hello</h1>
                <h2>hii</h2>
              </div>
            </ul>
          </div>
          {/* FRAGRANCE */}
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className=" m-1 font-bold p-3 hover:text-pink-500 hover:shadow-xl text-center"
            >
              FRAGRANCE
            </label>
            <ul
              tabIndex={0}
              className=" mt-3 dropdown-content menu p-2 shadow-lg bg-base-100  w-11/12"
            >
              <div className="gird grid-cols-2">
                <h1>hello</h1>
                <h2>hii</h2>
              </div>
            </ul>
          </div>
          {/* HAIRCARE */}
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className=" m-1 font-bold p-3 hover:text-pink-500 hover:shadow-xl text-center"
            >
              HAIRCARE
            </label>
            <ul
              tabIndex={0}
              className=" mt-3 dropdown-content menu p-2 shadow-lg bg-base-100  w-11/12"
            >
              <div className="gird grid-cols-2">
                <h1>hello</h1>
                <h2>hii</h2>
              </div>
            </ul>
          </div>
          {/* TOLLS & BRUSHES */}
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className=" m-1 font-bold p-3 hover:text-pink-500 hover:shadow-xl text-center"
            >
              TOLLS & BRUSHES
            </label>
            <ul
              tabIndex={0}
              className=" mt-3 dropdown-content menu p-2 shadow-lg bg-base-100  w-11/12"
            >
              <div className="gird grid-cols-2">
                <h1>hello</h1>
                <h2>hii</h2>
              </div>
            </ul>
          </div>
          {/* BRANDS */}
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className=" m-1 font-bold p-3 hover:text-pink-500 hover:shadow-xl text-center"
            >
              SKINCARE
            </label>
            <ul
              tabIndex={0}
              className=" mt-3 dropdown-content menu p-2 shadow-lg bg-base-100  w-11/12"
            >
              <div className="gird grid-cols-2">
                <h1>hello</h1>
                <h2>hii</h2>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar3;
