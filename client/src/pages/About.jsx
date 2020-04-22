import React, { Component } from "react";
import blockC from "./blockC.jpg"


class About extends Component {
    render() {
        return (
            <div className="all">
                <div className="card" style={{
                    position: "absolute",
                    top: "70px",
                    borderRadius: "12px",
                    width: "100%",
                    backgroundColor: "#5FDADF",
                    textAlign: "center"
                }}>
                    <div className="card-header">
                        <div className="card-title h5"><strong>Develpoment Team</strong></div>
                        <div className="card-subtitle">We are a team of software developers who also have a passion for crypto.</div>
                    </div>
                    <div className="card-body">
                        <ul style={{
                            listStyle: "none",
                        }}>
                            <li>
                                <strong>Team Structure:</strong>
                            </li>
                            <li>
                                Front-End Team Members:<strong style={{
                                    display: "block",
                                }}>Paul Fodrovics :
                                    <a href="https://github.com/Shift4change" target="_blank" rel="noopener noreferrer" className="github"> <i class="fab fa-github-square"></i></a>
                                    <a href="https://www.linkedin.com/in/paul-eduard-fodrovics-bba8331a3/" target="_blank" rel="noopener noreferrer"> <i class="fab fa-linkedin"></i></a>
                                </strong>


                                <strong>Long Nguyen :
                                <a href="https://github.com/LNguyen95uzi" target="_blank" rel="noopener noreferrer" className="github"> <i class="fab fa-github-square"></i></a>
                                    <a href="https://www.linkedin.com/in/long-nguyen-a5aa13136/" target="_blank" rel="noopener noreferrer"> <i class="fab fa-linkedin"></i></a>
                                </strong>


                            </li>
                            <li>
                                Back-End Team Memebers: <strong style={{
                                    display: "block",
                                }}>Trion Bailey :
                                    <a href="https://github.com/trionb" target="_blank" rel="noopener noreferrer" className="github"> <i class="fab fa-github-square"></i></a>
                                    <a href="https://www.linkedin.com/in/trion-bailey-7717811a3/" target="_blank" rel="noopener noreferrer"> <i class="fab fa-linkedin"></i></a>
                                </strong>


                                <strong>Edwin Genova :
                                <a href="https://github.com/novaaaax" target="_blank" rel="noopener noreferrer" className="github"> <i class="fab fa-github-square"></i></a>
                                    <a href="https://www.linkedin.com/in/edwin-genova-409696117/" target="_blank" rel="noopener noreferrer"> <i class="fab fa-linkedin"></i></a>
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="card col-xs-12" style={{
                    top: "400px",
                    position: "relative",
                    width: "100%"
                }}>
                <img src={blockC} alt="blockchain" />
                </div>



                {/* FOR FUTURE REFERENCE CONTACT FORM */}

                {/* <div className="card col-xs-12" style={{
                    textAlign: "center",
                    position: "relative",
                    top: "400px",
                    backgroundColor: "#5FDADF"
                }}>
                    <div className="card-header">
                        <div className="card-title h1"><strong>Contact Us</strong></div>
                        <div className="card-subtitle">Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</div>
                        <div className="form-group">
                            <label className="form-label" for="input-example-1">Name*</label>
                            <input class="form-input" type="text" id="input-example-1" placeholder="Name"></input>
                        </div>

                        <div className="form-group">
                            <label className="form-label" for="input-example-1">Email Address*</label>
                            <input class="form-input" type="text" id="input-example-1" placeholder="Email"></input>
                        </div>

                        <div className="form-group">
                            <label className="form-label" for="input-example-3">Message*</label>
                            <textarea class="form-input" id="input-example-3" placeholder="Textarea" rows="5"></textarea>
                        </div>
                    </div>
                    <br></br>
                    <button class="btn btn-primary input-group-btn">Send Message</button>
                </div> */}
            </div>

        );
    }


}

export default About