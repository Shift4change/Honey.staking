import React, { Component } from "react"
// import "../components/assets/style.css"
// import "./components/assets/scss/home.scss";
// import centralized from "../components/assets/img/centralized.png"
import cent from "../components/assets/img/cent.png"
import decent from "../components/assets/img/decent.png"
// import vs from "../components/assets/img/vs.png"
import solve8 from "../components/assets/img/solve8.jpeg"
// import solve7 from "../components/assets/img/solve7.jpeg"
import bitcoin1 from "../components/assets/img/bitcoin1.jpeg"
import tree from "../components/assets/img/tree.png"
import sky from "../components/assets/img/sky1.jpeg"
class Home extends Component {
    render() {
        return (
            <div id="master">


                <div style={{
                    // backgroundImage: "url(" + sky + ")",
                    // background:""
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                    // backgroundImage: solve8
                    // paddingTop: "120px",
                    // backgroundColor: "#74e2ff",
                    // color: "#black",
                    // borderRadius: "25px",
                    // textAlign: "center"

                }} id="welcome" className="hero column col-11 col-xs-12 container">
                    {/* <p> <img id="solve8" src={solve8} alt="solve"></p> */}
                    <h1>Welcome to Solve,</h1>
                    <h3> we recognize that we must pave the way for the next generation and therefore, we are committed to take you on the Journey of awareness about Cryptocurrencies, Cardano and Decentralization.</h3>
                    {/* </img> */}
                    {/* <h1> </h1>
                    <h3></h3> */}

                    <div id="tree" style={{ width: '50px', height: '50px' }}  >
                        <img src={tree} alt="ADA" />

                    </div>

                </div>

                <div id="centralize" className="hero column col-11 col-xs-12 container">
                    <div className="row">
                        <div className="column1">
                            <div >
                                <img src={cent} align="right" alt="cent"></img>
                            </div>
                            <h5>First lets take a look at what centralized systems look like.</h5>
                            {/* like vs. decentralized systems */}
                            <ul>
                                <li>A centralized system is a kind of system that requires, to you give your power, data or money to either a big corporation, a bank or, a government for convenience.</li>
                                <li>Banks are centralized - FOR profit systems that are not, accessible to all! Especially the lower class and those in poorer countries, 1.7 Billion Adults are un banked !</li>
                                <li>Centralized systems confine you to their strict rules and regulations </li>
                                <li>In Centralized systems you don't have control over your data </li>
                                <li>You can lose your freedom of speech on a centralized platform and even be banned</li>
                                <li>A very good example of the ramifications of a fully centralized system is China. A country that is using its digital power to control and suppress the people, where basic rights are being taken away, censorship is taking over and a social score is being implemented. </li>

                            </ul>

                        </div>

                    </div>
                </div>
                {/* <div id="vs" className="hero column col-4 col-xs-12 container">
                    <div className="row">


                        <div id="cvsd">
                            <img src={vs}></img>
                        </div>

                    </div>

                </div> */}
                <div id="decentralize" className="hero column col-11 col-xs-12 container">
                    <div className="row">
                        <div className="column2">
                            <div id="decent1">
                                <img src={decent} align="left"></img>
                            </div>


                            <h5> Now lets take a look at what decentralized systems look like</h5>
                            <ul>
                                <li>A Decentralized system is a kind of system that has no central authority making decisions in the name of all participants. </li>
                                <li>Each participant, also known as ‘peer,’ makes their own autonomous decisions pursuing their own self-interest that may collide with the goals of other peers.</li>
                                <li>In decentralized systems the participants directly interact with each other, share information, or, offer services to others.</li>
                                <li>In an open, decentralized system, there are no limits or regulations for new users to access it because of country or their social and economic status.</li>
                                <li>Any new participant can enter or leave the system at will.</li>
                                <li>No one can be banned and each individual can vote by being part of the system and by owning a pice of the system</li>
                            </ul>

                        </div>

                    </div>

                </div>

                <div style={{
                    // backgroundImage: "url(" + bitcoin1 + ")",
                    // backgroundPosition: "center",
                    // backgroundSize: "cover"
                    // backgroundImage: solve8
                    // paddingTop: "120px",
                    // backgroundColor: "#74e2ff",
                    // color: "#black",
                    // borderRadius: "25px",
                    // textAlign: "center"

                }} id="decentralize" className="hero column col-11 col-xs-12 container">
                    <div className="row">

                        <div id="decent2">

                            <img style={{ height: "450px" }} src={bitcoin1} align="left"></img>
                        </div>

                        <h6>After the 2008 financial crash and bailout of the "to-big to fail" corporations and banks, </h6>
                        <h4>a new system of technology emerged!</h4>
                        <ul>
                            <li>This system is like the internet where people can build on top of it</li>
                            <li>It is fully transparent </li>
                            <li>Censorship resistent</li>
                            <li>Not only can you own a pice of the system but you can transfer it</li>
                            <li>It is borderless </li>
                            <li>This system is deflationary</li>
                            <li>It is used as a store of value, because of its set supply</li>
                            <li>Bitcoin is the first generation of cryptocurrencies aka. digital gold</li>
                            {/* <li> Decentralization began with bitcoin and continues with to expand throughout the globe</li> */}
                        </ul>
                        <h3>We sincerely believe that decentralization began with bitcoin and that it continues to expand its reach with <a color="red" href="/cardano">Cardano</a>.</h3>


                    </div>

                </div>

















































                {/* <div className="form-group">
                    <div className="col-3">
                        <label className="form-label" textalign="center" htmlFor="input-example-8">Sign up for our newsletter</label>
                    </div>
                    <div className="col-9">
                        <input className="form-input" id="input-example-8" type="email" placeholder="Email" defaultValue="johndoe@example.com" pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" />
                    </div>
                </div>

                <div className="docs-demo columns">
                    <div className="column col-12">
                        <div className="empty">
                            <div className="empty-icon">
                                <i className="icon icon-people"></i>
                            </div>
                            <p className="empty-title h5">You have no new messages</p>
                            <p className="empty-subtitle">Click the button to start a conversation.</p>
                            <div className="empty-action">
                                <button className="btn btn-primary">Send a message</button>
                            </div>
                        </div>
                    </div>
                    <div className="column col-12">
                        <div className="empty">
                            <div className="empty-icon"><i className="icon icon-3x icon-mail"></i></div>
                            <p className="empty-title h5">You've successfully signed up</p>
                            <p className="empty-subtitle">Click the button to invite your friends</p>
                            <div className="empty-action">
                                <button className="btn btn-primary">Invite your friends</button>
                            </div>
                            <div className="empty-action">
                                <button className="btn btn-link">Skip</button>
                            </div>
                        </div>
                    </div>
                    <div className="column col-12">
                        <div className="empty">
                            <div className="empty-icon"><i className="icon icon-3x icon-people"></i></div>
                            <p className="empty-title h5">You are not following anyone</p>
                            <p className="empty-subtitle">Start to meet new friends</p>
                            <div className="empty-action input-group input-inline">
                                <input className="form-input" type="text" placeholder="" />
                                <button className="btn btn-primary input-group-btn">Search</button>
                            </div>
                        </div>
                    </div>
                </div> */}


            </div>
        );
    }


}

export default Home