import React from "react";
import "./Card.css";
import { Grid } from "@mui/material";

export default function Card(props) {
    console.log(props)
  return (
    <Grid item sm={4} md={3}>
    <div className="card-body uk-animation-toggle">
      <div className="card-img " >
        <img src={props.image} className="uk-animation-slide-bottom" alt="robot" />
      </div>
      <div className="card-title">
        <h3 className="card-header">{  props.header}</h3>
      </div>
      <div className="card-description">
        <p className="card-details">
          {props.details}
        </p>
      </div>
        <div className="card-btn">
        
          <a className="card-learnmore" href=''>           
            Learn More
          </a>
      </div>
      </div>
      </Grid>
  );
}
