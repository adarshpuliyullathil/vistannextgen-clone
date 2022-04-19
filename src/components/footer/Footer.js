import React from "react";
import "./Footer.css";
import Grid from "@mui/material/Grid";
import logo from "../../assets/images/logo.png";
import { Divider } from "@mui/material";
import { faFacebook,faTwitter,faLinkedin,faYoutube,faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <section id="footer-section">
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={12} sm={6}lg={6}>
            <div className="footer-logo">
              <img src={logo} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <div className="socialicon-area">
              <div className="social-icon">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size='2x'
                />
              </div>
              <div className="social-icon">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size='2x'
                />
              </div>
              <div className="social-icon">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size='2x'
                />
              </div>
              <div className="social-icon">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size='2x'
                />
              </div>
              <div className="social-icon">
                <FontAwesomeIcon
                  icon={faYoutube}
                  size='2x'
                />
              </div>
            </div>
          </Grid>
        </Grid>

        <div className="footer-details">
          <Grid container spacing={12}>
            <Grid item sm={4}>
              <div className="footer-partition">
                <div className="partition-heading">
                  <h3> COMPANY</h3>
                </div>
                <ul className="footer-list">
                  <li className="list-items">About Us</li>
                  <li className="list-items">Customers</li>
                  <li className="list-items">Management</li>
                </ul>
              </div>
            </Grid>
            <divider></divider>

            <Grid item sm={4}>
              <div className="footer-partition">
                <div className="partition-heading">
                  <h3> COMMUNITY</h3>
                </div>
                <ul className="footer-list">
                  <li className="list-items">Careers </li>
                  <li className="list-items">Blogs</li>
                  <li className="list-items">Contact Us</li>
                </ul>
              </div>
            </Grid>

            <Grid item sm={4}>
              <div className="footer-partition">
                <div className="partition-heading">
                  <h3>SOLUTIONS</h3>
                </div>
                <ul className="footer-list">
                  <li className="list-items">Privacy Policy</li>
                  <li className="list-items">Terms & Conditions</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <div className="copyright-area">
        <Divider></Divider>
        <Grid container justifyContent={'center'}>
          <Grid item sm={12}>
            <p className="copyright-text">
              CopyRight © 2019 - 2022 All Rights Reserved
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
