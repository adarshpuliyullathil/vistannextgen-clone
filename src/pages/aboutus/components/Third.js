import { Grid } from "@mui/material";
import React from "react";
import "./Third.css";
import logo1 from "../../../assets/images/Aboutus/logo1.png";
import logo2 from "../../../assets/images/Aboutus/logo2.png";
import logo3 from "../../../assets/images/Aboutus/logo3.png";

export default function Third() {
  return (
      <section className="third-section">
          <div className="black-circle">
                  
                  </div>
          <div className="third-page">
              
        <div className="typo-section">
          <Grid container>
            <Grid item md={8}>
              <h4 className="sub-title">more about</h4>
              <h1 className="main-title">from an idea to an invention</h1>
              <p>
                Idea is the first step of any great innovation. We take it from
                the first step to the zenith of success and shape it into a
                brilliant invention which would be of great use to the mankind
                by streamlining the process with simple steps
              </p>
            </Grid>
          </Grid>
        </div>
        <div className="about-card-area">
          <Grid container spacing={4}>
            <Grid item sm={6} md={4}>
              <div className="about-card">
                <div className="about-card-logo">
                  <img className="about-logo-img" src={logo1} alt="logo" />
                </div>
                <div className="about-card-title">
                  <h3>IDEA FROM OUR RESEARCHERS</h3>
                </div>
                <div className="about-card-para">
                  <p>
                    Our researchers across the globe are involved in constant
                    R&D in their areas of expertise which helps us understand
                    what people need and come up with a solution that would
                    address their issue. After all, that’s what technology and
                    inventions are meant to do.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item sm={6} md={4}>
              <div className="about-card">
                <div className="about-card-logo">
                  <img className="about-logo-img" src={logo2} alt="logo" />
                </div>
                <div className="about-card-title">
                  <h3>BUILDING A PROTOTYPE</h3>
                </div>
                <div className="about-card-para">
                  <p>
                    Combining the best of cognitive technologies to make the
                    idea better, we build the prototype of the model which is
                    made by next generation engineers. This model is tested and
                    experimented with various use cases on a day-to-day basis
                    making it better with every trial.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={4}>
              <div className="about-card">
                <div className="about-card-logo">
                  <img className="about-logo-img" src={logo3} alt="logo" />
                </div>
                <div className="about-card-title">
                  <h3>EXTENSIVE SUPPORT FOR A SMOOTH USAGE</h3>
                </div>
                <div className="about-card-para">
                  <p>
                    Every invention of ours is adaptable based on the
                    requirement of the industry where it is used.
                  </p>
                </div>
              </div>
            </Grid>
                  </Grid>
                  
              </div>
              <div className="orange-circle">
                  
                  </div>
          </div>
         
    </section>
  );
}
