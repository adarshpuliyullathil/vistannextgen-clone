import React from "react";
import { Grid } from "@mui/material";
import "./Thirdsection.css";
import logoimage from "../../../assets/images/home/startupindialogo.png";
import logo1 from "../../../assets/images/home/logo/01.png";
import logo2 from "../../../assets/images/home/logo/02.png";
import logo3 from "../../../assets/images/home/logo/03.png";
import logo4 from "../../../assets/images/home/logo/04.png";
import logo5 from "../../../assets/images/home/logo/05.png";
import logo6 from "../../../assets/images/home/logo/06.png";
import logo7 from "../../../assets/images/home/logo/07.png";
import flag from "../../../assets/images/home/flag.png";

export default function Thirdsection() {
  return (
    <section id="third-section">
      <div className="section-body">
        <Grid container spacing={6}>
          <Grid item md={8} className="startup-promo">
            <div className="left-section">
              <div className="logo-section">
                <div className="logo-title">
                  <h4 className="logo-text"> WE ARE PART OF</h4>
                </div>
                <div className="logo-image">
                  <img src={logoimage} alt="logo"></img>
                </div>
              </div>
              <div className="para-section">
                <p>
                  Technology drives today’s generation. Everything you see, you
                  operate is an innovation done by a mastermind with an
                  intention to make the world a smarter and better place to live
                  in. Our intention is ignite the young minds for next
                  generation ideas and fuel their inventions to build their
                  imagination into working prototypes. Making the best use of
                  cognitive technologies, we convert these prototypes into
                  multi-functional products which will be of great use in
                  various cases from domestic to industrial sectors. Our bottom
                  line to the young master minds is - Have an idea that can
                  change the world? Hop in! Let’s work it out!
                </p>
              </div>
              <div className="certification-area">
                <h5> We are certified by</h5>
                <div className="certification-logo ">
                  <img className="logo-img " src={logo1} alt="logo" />
                  <img className="logo-img" src={logo2} alt="logo" />
                  <img className="logo-img" src={logo3} alt="logo" />
                  <img className="logo-img" src={logo4} alt="logo" />
                  <img className="logo-img" src={logo5} alt="logo" />
                  <img className="logo-img" src={logo6} alt="logo" />
                  <img className="logo-img" src={logo7} alt="logo" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={4} className="flag-image">
            <div className="image-section">
              <img src={flag} alt="flag" />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
