import React from "react";
import "./Sixthsection.css";
import flunkey from "../../../assets/images/home/sixthsection/flunkey.png";
import triaksh from "../../../assets/images/home/sixthsection/triaksh.png";
import vihr from "../../../assets/images/home/sixthsection/vihr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Sixthsection() {
  return (
    <section id="sixth-section">
      <div
        class="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slider="clsActivated: uk-transition-active; {center: true}"
      >
        <ul
          class="uk-slider-items uk-grid "
          uk-height-viewport="offset-top: true; offset-bottom: 30"
        >
          <li class="uk-width-3-4">
            <div class="uk-panel">
              <img src={triaksh} width="500" height="500" alt="" />
              <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <div className="description-wrap triaksh-text">
                  <h3 class="uk-margin-remove">TRIAKSH</h3>
                  <p class="uk-margin-remove">
                    <a>
                      We call it the third-eye on the watch for your safety and
                      security. Our milestone move towards smart city solutions
                      is Triaksh. Making the best use of block chain and
                      artificial intelligence, Triaksh can do the magic of
                      capturing data from multiple sources at the same time and
                      analyzing it for facial recognition, weapon detection and
                      many other use-cases.
                    </a>
                  </p>
                  <a>
                    <div className="arrow-wrap">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        size="2x"
                      ></FontAwesomeIcon>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="uk-width-3-4 {uk-active}">
            <div class="uk-panel">
              <img src={flunkey} width="500" height="500" alt="" />
              <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <div className="description-wrap">
                  <h3 class="uk-margin-remove">FLUNKEY</h3>
                  <p class="uk-margin-remove">
                    <a>
                      Fully autonomous service bots made in different variants
                      for different sectors. We call flunkey as a game changer
                      in the service sector. Be it a hospital, restaurant or
                      even a classroom, flunkey has the power to do every
                      tedious and hectic tasks done by humans. Even during the
                      tough times, when human interaction is risky, flunkey
                      comes to the rescue.
                    </a>
                  </p>
                  <a>
                    <div className="arrow-wrap">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        size="2x"
                      ></FontAwesomeIcon>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="uk-width-3-4">
            <div class="uk-panel">
              <img src={vihr} width="500" height="500" alt="" />
              <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <div className="description-wrap">
                  <h3 class="uk-margin-remove">VIHR</h3>
                  <p class="uk-margin-remove">
                    <a>
                      Humanoid robots will be the helping hand to humans while
                      they are busy in their personal space. Our VIHR is capable
                      of understanding and analysing the tasks given to it and
                      learns the behaviour or a regular basis which makes it
                      smarter day by day adapting itself to your lifestyle by
                      getting your tasks done even before you expect it to be
                      done.
                    </a>
                  </p>
                  <a>
                    <div className="arrow-wrap">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        size="2x"
                      ></FontAwesomeIcon>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
      </div>
    </section>
  );
}
