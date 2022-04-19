import React from "react";
import "./Second.css";
import robo from "../../../assets/images/Aboutus/robo.png";
import startupindia from "../../../assets/images/Aboutus/startupindia.png";
import { Grid } from "@mui/material";

export default function Second() {
  return (
    <section className="second-section">
      <div className="second-page">
        <div className="robo-area">
          <Grid container spacing={2}>
                      <Grid item md={6}>
                          <div className="robo-img">
                              <img src={robo} alt="robo" />
                              </div>
            </Grid>
            <Grid item md={6}>
              <div className="robo-desc">
                <h4 className="sub-title">WE ARE PART OF</h4>
                <img src={startupindia} alt="startup"></img>
                <h3 className="desc-title">
                  Forging ahead beyond imaginations making the best use of
                  technology for a better tomorrow
                </h3>
                <p className="description-text">
                  We believe technology is what powers the future. There are
                  numerous possibilities if you use technology in the right way
                  by combining it with the smartest ideas from the next
                  generation innovators. Secondly, our arc doesn’t end with
                  delivering a highly competent product. We continue exploring
                  the possibilities of the product with constant R&D done by a
                  team of experts across the globe.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}
