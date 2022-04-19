import React from 'react';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import './Contact.css';

function Contact() {
  return (
    <div style={{overflowX:'hidden'}}>
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Contact
