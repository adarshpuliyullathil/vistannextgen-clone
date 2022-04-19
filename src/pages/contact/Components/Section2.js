import React from "react";
import "./Section2.css";
import bg from "../../../assets/images/Contact/bg.png";
import { Button, Grid, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import { faEdit, faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faMessage } from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";

export default function Section2() {
  return (
    <section style={{ backgroundImage: `url(${bg})` }}>
      <div className="contact-page">
        <div className="reach-us">
          <Grid container>
            <Grid item md={12}>
              <h4 className="sub-title">REACH US</h4>
              <h1 className="main-title">INTRIGUED BY OUR INVENTION?</h1>
              <p>
                Our ultimate goal is to make every business and every sector
                become automated when it comes to tedious and hectic tasks that
                doesn’t need human attention. This will improve the efficiency
                and quality of the result delivered to the people finally making
                the lives smarter, safer and easier. Reach us out now to see how
                our technologies and inventions can contribute towards your
                growth.
              </p>
            </Grid>
          </Grid>
        </div>

        <div className="contact-area">
          <Grid container spacing={2}>
            <Grid item md={5}>
              <div className="contact-details">
                <div className="office-wrap">
                  <div className="contact-icon">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      size="3x"
                      color="orange"
                    />
                  </div>
                  <div className="office-details">
                    <h3>OFFICE ADDRESS</h3>
                    <h5>India Office</h5>
                    <p>
                      # Trendz JR, 5B, Plot No: 23 & 24 Vittal Rao Nagar,
                      Madhapur
                      <br />
                      Hyderabad, Telangana 500081
                    </p>

                    <h5>UK Office</h5>
                    <p>
                      Gold Building 3, Chiswick Park, Chiswick High Road,
                      <br />
                      London - W45YA
                    </p>
                  </div>
                </div>
                <div className="phone-wrap">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faPhone} size="3x" color="orange" />
                  </div>
                  <div className="phone-details">
                    <h3>PHONE NUMBER</h3>
                    <p>
                      IND : +91-8106929231, 9577845678
                      <br />
                      UK : +44-20-39274230
                      <br />
                      USA : +1-518-545-5327
                    </p>
                  </div>
                </div>
                <div className="email-wrap">
                  <div className="contact-icon">
                    <FontAwesomeIcon
                      icon={faMessage}
                      size="3x"
                      color="orange"
                    />
                  </div>
                  <div className="email-details">
                    <h3>EMAIL ADDRESS</h3>
                    <p>
                      IND : info@vistannextgen.com
                      <br />
                      UK : info-uk@vistannextgen.com
                      <br />
                      USA : info-usa@vistannextgen.com
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={7}>
              <div className="contact-form-wrap">
                <Grid container>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ "& > :not(style)": { m: 2 } }}>
                      <TextField
                        placeholder="Name"
                        className="input-field"
                        id="input-with-icon-textfield"
                        InputProps={{
                          startAdornment: (
                            <PersonOutlineOutlinedIcon
                              style={{ color: "orange" }}
                            />
                          ),
                        }}
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ "& > :not(style)": { m: 2 } }}>
                      <TextField
                        placeholder="Email"
                        className="input-field"
                        id="input-with-icon-textfield"
                        InputProps={{
                          startAdornment: (
                            <MailOutlinedIcon style={{ color: "orange" }} />
                          ),
                        }}
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ "& > :not(style)": { m: 2 } }}>
                      <TextField
                        placeholder="Phone"
                        className="input-field"
                        id="input-with-icon-textfield"
                        style={{width:"%"}}
                        InputProps={{
                          startAdornment: (
                            <PhoneEnabledOutlinedIcon
                              style={{ color: "orange" }}
                            />
                          ),
                        }}
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ "& > :not(style)": { m: 2 } }}>
                      <TextField
                        placeholder="Subject"
                        className="input-field"
                        id="input-with-icon-textfield"
                        InputProps={{
                          startAdornment: (
                            <FontAwesomeIcon
                              icon={faEdit}
                              style={{
                                width: "20px",
                                height: "20px",
                                color: "orange",
                              }}
                            />
                          ),
                        }}
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box sx={{ "& > :not(style)": { m: 2 } }}>
                    <TextareaAutosize
                      className="input-field"
                      aria-label="minimum height"
                      minRows={12}
                      placeholder="Your Message"
                      style={{ width: "100%", padding:'20px 0 0 50px' }}
                    />
                    <FontAwesomeIcon
                      className="edit-icon"
                      icon={faEdit}
                      style={{ width: "20px", height: "20px" ,color:'orange' }}
                    />
                  </Box>
                </Grid>
                <Button className="quote-btn" variant="contained">
                  get a quote
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}
