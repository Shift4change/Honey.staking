import React, { Component } from "react"
import staking from "./staking.png"


class StakingService extends Component {
    render() {
        return (
            <div className="all" >
                <div style={{
                    paddingTop: "120px",
                    backgroundColor: "#5FDADF",
                    color: "#black",
                    borderRadius: "25px",
                    textAlign: "center"
                }} className="hero column col-11 col-xs-12 container">
                    <h1>What is Staking?</h1>
                    <h3>Support your favorite blockchain network!</h3>
                    <h4>Coming soon!</h4>
                    <h5>Contact an admin to learn more about staking with us and how to support your favorite cryptocurrencies!</h5>
                    <div className="column col-12 col-xs-12">
                        <div className="card" style={{
                            textAlign: "center",
                            padding: "20px",
                            backgroundColor: "#6cace4"
                        }}>
                            <div className="card-image">
                                <img src={staking} class="center"alt="staking" ></img>
                            </div>
                            <div className="card-header">

                                <div className="card-footer">
                                    <button onClick="window.location.href = 'https://medium.com/@stevekrohn/everything-you-need-to-know-about-staking-coins-686ea95041c';">Beginner's Guide to Staking</button>
                                    <button onClick="window.location.href = 'https://trustwallet.com/staking/';">More Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}

export default StakingService