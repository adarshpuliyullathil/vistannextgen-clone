import React from 'react';
import './About.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

function About() {
  return (
    <div style={{overflow:'hidden'}}>
      <First />
      <Second />
      <Third/>
    </div>
  )
}

export default About
