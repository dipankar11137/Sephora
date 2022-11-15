import React from "react";
import "../../CSS/Test.css";

const Test = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="#">Try it</a>{" "}
        </div>
        <ui className="nav-links">
          <li className="bala">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">manu</a>
          </li>
          <li>
            <a href="#">Megamanu</a>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <header>Design Services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">Custom logo</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Email Services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">web text</a>
                    </li>
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">Web marketing</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Security Services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">ssg</a>
                    </li>
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">Graphis</a>
                    </li>
                    <li>
                      <a href="#">CCNA logo</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ui>
      </div>
    </nav>
  );
};

export default Test;
