import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../pages/home/Home';
import Aboutus from '../pages/aboutus/About';
import Robotics from '../pages/verticals/robotics/Robotics';
import Iot from '../pages/verticals/iot/Iot';
import AI from '../pages/verticals/ai/Ai';
import AR from '../pages/verticals/ar/Ar';
import Agritech from '../pages/verticals/agritech/Agritech';

import Servicerobots from '../pages/products/servicerobots/Servicerobots';
import Industrialrobots from '../pages/products/industrialrobots/Industrialrobots';
import Socialhumanoid from '../pages/products/socialhumanoid/Socialhumanoid';
import Interactiverobots from '../pages/products/interactiverobots/Interactiverobots';
import Robotteacher from '../pages/products/robotteacher/Robotteacher';
import Medicaldevice from '../pages/products/medicaldevice/Medicaldevice';
import Smartcity from '../pages/products/smartcity/Smartcity';

import Careers from '../pages/company/careers/Careers';
import Management from '../pages/company/management/Management';
import Customers from '../pages/company/customers/Customers';

import Contact from '../pages/contact/Contact';



export default function Navigate() {
  return (
    <BrowserRouter>
        <div>
            <Header/>
        </div>
    <Routes>
             
      <Route exact path="/" element={<Home />}/>
      <Route path="/Aboutus" element={<Aboutus/>}/>
      <Route path="/Robotics" element={<Robotics />}/>
      <Route path="/Iot" element={<Iot />}/>
      <Route  path="/Ai" element={<AI/>}/>
      <Route path="/Ar" element={<AR/>}/>
      <Route path="/Agritech" element={<Agritech />}/>

      <Route path="/Servicerobots" element={<Servicerobots />}/>
      <Route path="/Industrialrobots" element={<Industrialrobots />}/>
      <Route path="/Socialhumanoid" element={<Socialhumanoid />}/>
      <Route path="/Interactiverobots" element={<Interactiverobots />}/>
      <Route path="/Robotteacher" element={<Robotteacher />}/>
      <Route path="/Medicaldevice" element={<Medicaldevice />}/>
      <Route path="/Smartcity" element={<Smartcity />}/>

      <Route path="/Careers" element={<Careers />}/>
      <Route path="/Management" element={<Management />}/>
      <Route path="/Customers" element={<Customers />}/>


      <Route  path="/Contact" element={<Contact />}/>


        
    </Routes>

        <div>
            <Footer/>
        </div>
  </BrowserRouter>
    
        
                
  );
}

