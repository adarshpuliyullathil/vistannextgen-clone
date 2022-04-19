import "./Firstsection.css";
import React from "react";
import bg from "../../../assets/images/home/bg.jpg";
import { Button, Grid } from "@mui/material";
import digitalindia from "../../../assets/images/home/firstsection/digitalindia.png";
import makeinindia from "../../../assets/images/home/firstsection/makeinindia.png";
import startupindia from "../../../assets/images/home/firstsection/startupindia.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong , faRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Firstsection() {
  return (
    <>
      <section id="first-page">
        <div className="first-section">
        <div className="carousel-banner">
          <div
            class="uk-position-relative uk-visible-toggle uk-light"
            tabindex="-1"
            uk-slider="clsActivated: uk-transition-active; {center: true}; autoplay: true; autoplay-interval: 5000"
          >
            <ul
              class="uk-slider-items uk-grid "
              uk-height-viewport="min-height: 300"
            >
              <li class="uk-width-1">
                <div class="uk-panel">
                  <div className="banner-image">
                    <img src={digitalindia}  alt="digital" width={300} />
                  </div>
                  <div className="banner-para">
                    <p>
                      Robotics is one of our core verticals in which we have
                      unparalleled capabilities. VIHR, our humanoid robot is
                      here to take care of all your tasks from personal needs to
                      corporate operations. One of it’s kind smart autonomous
                      service bot Flunkey is capable of replacing humans in
                      tedious tasks while they focus on what they do the best
                    </p>
                  </div>

                  <div class="uk-overlay uk-overlay-primary uk-position-center uk-text-bottom uk-transition-slide-bottom title-wrap">
                    <div className="banner-title">
                      <h3 class="uk-margin-remove">
                        #DIGITALISINGEVERYTHING
                        <br />
                        Fully autonomous smartest inventions for a new
                        experience
                      </h3>
                    </div>
                  </div>

                  <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-bottom uk-transition-slide-bottom">
                    <div className="button-wrap">
                      <Button className="home-button"
                        variant="contained"
                        size="large"
                      >Our Verticals</Button>
                      <Button
                        className="contactus-btn"
                        variant="contained"
                      >Contact Us</Button>
                    </div>
                  </div>
                </div>
              </li>
              {/*              Second-slide */}
              <li class="uk-width-1">
                <div class="uk-panel ">
                  <div className="banner-image startup-india">
                    <img src={startupindia} alt="digital" width={300}  />
                  </div>
                  <div className="banner-para">
                    <p>
                      Making the best use of cognitive technologies, our team of
                      young and enthusiastic innovators are given every possible
                      opportunity to convert their futuristic innovations into
                      astonishing inventions. Every invention of ours is to make
                      lives smarter, safer and easier by making a landmark move
                      in the digital India movement
                    </p>
                  </div>

                  <div class="uk-overlay uk-overlay-primary uk-position-center uk-text-bottom uk-transition-slide-bottom title-wrap second-slide">
                    <div className="banner-title">
                      <h3 class="uk-margin-remove">
                        #INCUBATINGINVENTIONS
                        <br />
                        Our inventions are beyond imagination
                      </h3>
                    </div>
                  </div>

                  <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-bottom uk-transition-slide-bottom startup-india">
                    <div className="button-wrap">
                      <Button variant="contained"
                        className="home-button"
                      >Our Verticals</Button>
                      <Button variant="contained"
                        className="contactus-btn"
                      >Contact Us</Button>
                    </div>
                  </div>
                </div>
              </li>

              {/* Third-slide */}

              <li class="uk-width-1">
                <div class="uk-panel ">
                  <div className="banner-image">
                    <img src={makeinindia} alt="digital" width={300} />
                  </div>
                  <div className="banner-para">
                    <p>
                      Every single product of ours is fully Indian from the
                      inception of the Idea to making it’s prototype and
                      building a working model. Empowering india to be self
                      dependant in every possible way by supporting the
                      Atmanirbhar Bharat Abhiyan by our honourable <br />
                      Prime Minister Shri. Narendra Modi ji.
                    </p>
                  </div>

                  <div class="uk-overlay uk-overlay-primary uk-position-center uk-text-bottom uk-transition-slide-bottom title-wrap">
                    <div className="banner-title">
                      <h3 class="uk-margin-remove">
                        #DIGITALISINGEVERYTHING
                        <br />
                        Fully autonomous smartest inventions for a new
                        experience
                      </h3>
                    </div>
                  </div>

                  <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-bottom uk-transition-slide-bottom">
                    <div className="button-wrap">
                      <Button variant="contained"
                        className="home-button"
                      >Our Verticals</Button>
                      <Button variant="contained"
                        className="contactus-btn"
                      >Contact Us</Button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <a
              class="uk-position-center-left uk-position-small "
              href="#"
              uk-slidenav-previous
              uk-slider-item="previous"
            >
              <p>
              <FontAwesomeIcon
                  icon={faLeftLong}
                  style={{ marginRight: '10px' }}
                />
                PREV
                </p>
            </a>
            
            <a
              class="uk-position-center-right uk-position-small "
              href="#"
              uk-slidenav-next
              uk-slider-item="next"
            >
              <p>NEXT
               
              <FontAwesomeIcon
                style={{ marginLeft: '10px' }}
                icon={faRightLong}
                />
                </p>
             
            </a>
          </div>
        </div>

        <div className="bottom-shape">
            <svg  viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"  />
            </svg>
          </div>
          </div>
      </section>
  
    </>
  );
}
