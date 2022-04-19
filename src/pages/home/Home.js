import React from "react";
import "./Home.css";
import Navbar from "../../components/header/HeaderComponents/Navbar";

import Firstsection from "./Home components/Firstsection";
import Secondsection from "./Home components/Secondsection";
import Thirdsection from "./Home components/Thirdsection";
import Fourthsection from "./Home components/Fourthsection";
import Fifthsection from "./Home components/Fifthsection";
import Sixthsection from "./Home components/Sixthsection";
import Seventhsection from "./Home components/Seventhsection";

function Home() {
  return (
    <div className="home-body">
      {/* <Navbar/> */}

      <Firstsection/>
      <Secondsection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
      <Sixthsection />
      <Seventhsection />
    </div>
  );
}

export default Home;
