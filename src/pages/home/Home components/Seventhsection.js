import React from "react";
import './Seventhsection.css';
import logo1 from '../../../assets/images/home/seventh/logo1.png'
import logo2 from '../../../assets/images/home/seventh/logo2.png';
import logo3 from '../../../assets/images/home/seventh/logo3.png';
import logo4 from '../../../assets/images/home/seventh/logo4.png';
import logo5 from '../../../assets/images/home/seventh/logo5.png';
import logo6 from '../../../assets/images/home/seventh/logo6.jpg';
import logo7 from '../../../assets/images/home/seventh/logo7.png';
import logo8 from '../../../assets/images/home/seventh/logo8.png';
import logo9 from '../../../assets/images/home/seventh/logo9.png';
import logo10 from '../../../assets/images/home/seventh/logo10.png';
import logo11 from '../../../assets/images/home/seventh/logo11.png';

export default function Seventhsection() {
    return (
        <section id="seventh-section" style={{overflowX:"hidden"}}>
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="{center:true}">

<ul class="uk-slider-items ">
    <li>
        < img className="partner-logo"  src={logo1}  alt=""/>
        <div class="uk-position-center uk-panel"><h1>1</h1></div>
    </li>
    <li>
        < img className="partner-logo" src={logo2}  alt=""/>
        <div class="uk-position-center uk-panel"><h1>2</h1></div>
    </li>
    <li>
        < img className="partner-logo" src={logo3}  alt=""/>
        <div class="uk-position-center uk-panel"><h1>3</h1></div>
    </li>
    <li>
        < img className="partner-logo" src={logo4}  alt=""/>
        <div class="uk-position-center uk-panel"><h1>4</h1></div>
    </li>
    <li>
        < img className="partner-logo" src={logo5}  alt=""/>
        <div class="uk-position-center uk-panel"><h1>5</h1></div>
    </li>
    <li>
        < img className="partner-logo" src={logo6}  alt=""/>
        <div class="uk-position-center uk-panel"><h1>6</h1></div>
    </li>
    <li>
        < img className="partner-logo" src={logo7}  alt=""/>
        <div class="uk-position-center uk-panel"><h1>7</h1></div>
    </li>
    <li>
        < img className="partner-logo" src={logo8}  alt=""/>
        <div class="uk-position-center uk-panel"><h1>8</h1></div>
    </li>
    <li>
        < img className="partner-logo" src={logo9}  alt=""/>
        <div class="uk-position-center uk-panel"><h1>9</h1></div>
    </li>
    <li>
        < img className="partner-logo" src="images/slider5.jpg"  alt=""/>
        <div class="uk-position-center uk-panel"><h1>10</h1></div>
    </li>
</ul>

<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous">Prev</a>
<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next">Next</a>

</div>
        </section>
    );
}