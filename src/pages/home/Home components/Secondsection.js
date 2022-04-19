import React from "react";
import { Grid } from "@mui/material";
import cardicon1 from "../../../assets/images/home/cardicon1.png";
import cardicon2 from "../../../assets/images/home/cardicon2.png";
import cardicon3 from "../../../assets/images/home/cardicon3.png";
import './Secondsection.css';

function Secondsection(){

    return (


        <section id="second-section">
            <div className="service-section">
                <div className="service-cards">
                    <div className="card-list">
                        <Grid container spacing={7}>
                            <Grid item md={4} sm={6}>
                                <div className="card1">
                                    <div className="card-icon">
                                        <div className="card-image">
                                            <img src={cardicon1} className='buzz-out-on-hover' alt="icon"></img>
                                        </div>
                                    </div>
                                    <div className="card-heading">
                                        <h4>INTERNATIONAL KNOWLEDGE RESOURCES CENTERS</h4>
                                        <p>
                                            Ideas come from everywhere and anywhere, we have
                                            knowledge centres where constant R&D is done by Vistan
                                            NextGen equipped with best of the cognitive
                                            technologies.
                                        </p>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item md={4} sm={6}>
                                <div className="card2">
                                    <div className="round-div-top"></div>
                                    <div className="card-icon">
                                        <div className="card-image">
                                            <img src={cardicon2} className='buzz-out-on-hover' alt="icon"></img>
                                        </div>
                                    </div>
                                    <div className="card-heading">
                                        <h4>SCRATCH TO END PRODUCT DEVELOPMENT</h4>
                                        <p>
                                            If idea is the first step of any invention,we stand by
                                            every idea in taking it to it’s final step by providing
                                            the best of everything it needs. Not just that, every
                                            idea that comes to us is valued with utmost respect and
                                            honour following all the legal norms.
                                        </p>
                                    </div>
                                    <div className="round-div-bottom"></div>
                                </div>
                            </Grid>

                            <Grid item md={4} sm={12}>
                                <div className="card3">
                                    <div className="card-icon">
                                        <div className="card-image">
                                            <img src={cardicon3} className='buzz-out-on-hover' alt="icon"></img>
                                        </div>
                                    </div>
                                    <div className="card-heading">
                                        <h4>SUPPORT TEAM WITH IT’S BASE IN INDIA</h4>
                                        <p>
                                            India has a huge potential of going fullydigital with
                                            the recent push from the government. We have our support
                                            base with highly proficient team in India equipped with
                                            all the necessary mechanization to address any queries
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </section>
    );

}
export default Secondsection;
