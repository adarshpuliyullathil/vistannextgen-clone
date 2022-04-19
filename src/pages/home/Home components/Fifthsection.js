import React from "react";
import { Grid } from "@mui/material";
import "./Fifthsection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Fifthsection() {
  return (
    <section id="fifth-section">
      <div className="section-body">
        <Grid container spacing={4}>
          <Grid item sm={6} md={3}>
            <div className="mission-card uk-animation-toggle">
              <div className="mission-logo uk-animation-slide-bottom ">
                <FontAwesomeIcon icon={faPaperPlane}
                  size='2x'
                />
              </div>
              <div className="mission-title">
                <h3>OUR MISSION</h3>
              </div>
              <div className="mission-description">
                <p>
                  Organizations are noticeably thirsty for innovative solutions
                  that harness tech to alter and improve their businesses. We
                  are here to quench this thirst through solutions that enable
                  our clients to tackle their challenges with adept solutions
                  spanning across the fields of best of cognitive technologies.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item sm={6} md={3}>
            <div className="vision-card uk-animation-toggle">
              <div className="mission-logo uk-animation-slide-bottom">
                <FontAwesomeIcon icon={faGlobe}
                  size='2x'
                />
              </div>
              <div className="mission-title">
                <h3>OUR VISION</h3>
              </div>
              <div className="mission-description">
                <p>
                  With a vision to better connect the world & make it all the
                  more efficient through passion for tech, spanning across a
                  wide range of fields to address a wider spectrum of human
                  needs, From an individual to multinational organizations,
                  Vistan Next Gen strives at providing solutions that work.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <div className="collaboration">
              <div className="sub-heading">
                <h3>COLLABORATION WITH US</h3>
              </div>
              <div className="title-head">
                <h1>INNOVATION | INCUBATION | INVENTION</h1>
              </div>
              <div className="description-area">
                <h2>Being Atmanirbhar In The Smartest Possible Way</h2>
                <p>
                  India is our homeground where there is a huge potential for
                  numerous ideas and unparalleled opportunities of using
                  technology in the rapidly changing sectors that are adapting
                  to the new-age methods of serving their customers. All our
                  products are manufactured and assembled in India by a team of
                  Indians through which we extend our respect and support to the
                  government’s initiative of making india self dependent. We are
                  proud to be a part of this movement and our inventions will
                  definitely be a landmark move towards the digital india
                  initiative.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
