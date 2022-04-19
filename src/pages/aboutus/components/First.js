import React from "react";
import "./First.css";
import bg from "../../../assets/images/Aboutus/breadcrumb.jpg";

export default function First() {
  return (
    <section>
      <div
        className="breadcrumb-section"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div></div>
        <div className="main-title">
          <h1>About us</h1>
        </div>
        <div className="bg-text">
          <span className="big-text">vistan</span>
        </div>
              <div className="toggle-btn">
                  <ul className="toggle-list">
                      <li>
                          <a href="/" >Home</a>
                      </li>
                      <li>
                          About Us
                      </li>
                  </ul>
        </div>
        <div className="breadcrumb-shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
                  </svg>
                  
        </div>
      </div>
    </section>
  );
}
