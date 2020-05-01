import React from "react";


export default function Home() {
    return (
        <>
            <div style={{
                marginTop: "15px",
                backgroundColor: "#007DB3",
                color: "#black",
                borderRadius: "25px",
                textAlign: "center"
            }} className="hero column col-11 col-xs-12 container">
                <h1>Welcome to Solve Staking</h1>
                <h3>Your new go to site for all your cryptocurrency questions!</h3>
            </div>

            <div className="form-group">
                <div className="col-3">
                    <label className="form-label" textAlign="center" for="input-example-8">Sign up for our newsletter</label>
                </div>
                <div className="col-9">
                    <input class="form-input" id="input-example-8" type="email" placeholder="Email" value="johndoe@example.com" pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" />
                </div>
            </div>

            <div class="docs-demo columns">
                <div class="column col-12">
                    <div class="empty">
                        <div class="empty-icon">
                            <i class="icon icon-people"></i>
                        </div>
                        <p class="empty-title h5">You have no new messages</p>
                        <p class="empty-subtitle">Click the button to start a conversation.</p>
                        <div class="empty-action">
                            <button class="btn btn-primary">Send a message</button>
                        </div>
                    </div>
                </div>
                <div class="column col-12">
                    <div class="empty">
                        <div class="empty-icon"><i class="icon icon-3x icon-mail"></i></div>
                        <p class="empty-title h5">You've successfully signed up</p>
                        <p class="empty-subtitle">Click the button to invite your friends</p>
                        <div class="empty-action">
                            <button class="btn btn-primary">Invite your friends</button>
                        </div>
                        <div class="empty-action">
                            <button class="btn btn-link">Skip</button>
                        </div>
                    </div>
                </div>
                <div class="column col-12">
                    <div class="empty">
                        <div class="empty-icon"><i class="icon icon-3x icon-people"></i></div>
                        <p class="empty-title h5">You are not following anyone</p>
                        <p class="empty-subtitle">Start to meet new friends</p>
                        <div class="empty-action input-group input-inline">
                            <input class="form-input" type="text" placeholder=""/>
                                <button class="btn btn-primary input-group-btn">Search</button>
                            </div>
                        </div>
                    </div>
                </div>


        </>
    );
}