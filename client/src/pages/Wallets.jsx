import React, { Component } from "react"
import ada from "../components/assets/img/ADA.png"
import yoroi from "../components/assets/img/yoroi.png"
import daedalus from "../components/assets/img/Daedalus.png"

class Wallets extends Component {
    render() {
        return (

            <div className="wallet">

                <div style={{
                    //  backgroundImage: "url(" + cardano + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    // paddingTop:"293px",
                    // paddingBottom:"127px",
                    // marginTop:"-75px"
                }} id="wall" className="hero column col-11 col-xs-12 container">
                    <div className="row">
                        <div className="column1">


                            <h1>ADA</h1>

                        </div>

                        <div id="imgada" style={{ width: '50px', height: '50px' }}  >
                            <img src={ada} alt="ADA" />

                        </div>


                    </div>
                </div>
                <div id="wallets" className="hero column col-11 col-xs-12 container">
                    <div className="row">
                        <div className="column">

                            <h5>The currency, powering the Cardano platform</h5>

                            <ul>
                                <li>ADA at its core, is money.</li> 
                                <li>You have to see it like cash...</li>
                                <li>With the only difference that, with ADA, like with Bitcoin for example, you have access to the whole history of that cash.</li>
                                <li> Now, if we look at ADA, the currency powering the Cardano platform, you have to think about it like fuel...</li>
                                <li>Consider Cardano your car, and ADA your fuel. If you don't have fuel, you can't drive.  </li>
                                <li>This also applies to Cardano, meaning, if you don't have ADA, you can't interact with Cardano. </li>


                            </ul>
                        </div>
                        {/* <div class="card">
                            <div class="card-image"><img class="img-responsive" src="" alt="" /></div>
                            <div class="card-header">
                                <div class="card-subtitle text-gray">Ouroboros Chronos: Proof-of-Stake </div>
                                <div class="card-title h5"><a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://eprint.iacr.org/2019/838.pdf">Read the Paper</a></div>
                                <br></br>
                                <div class="card-subtitle text-gray">Hydra: Fast Isomorphic State Channels</div>
                                <div class="card-title h5"><a class="btn btn-primary" href="#cards">Read the Paper</a></div>

                                {/* <div class="card-subtitle text-gray">Software and hardware</div> */}
                        {/* </div>
                            <div class="card-body">Find more peer reviewed papers and learn more about IOHK </div>
                            <div class="card-footer"><a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://iohk.io/en/research/library/">IOHK Library</a> <a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://iohk.io/en/research/researchers/">Researchers</a></div>
                        </div> */}

                    </div>
                </div>




                <div id="ada" className="hero column col-11 col-xs-12 container">
                    <div className="row">
                        <h3>With any currency, you will need a wallet!</h3>
                    
                    </div>



                    <div className="column">

                        

                        <div className="column">
                        <h6>This wallet downloads the whole Cardano blockchain! Because you need a wallet.</h6>
                            <div class="card">
                                <div class="card-image"  ><img class="img-responsive"  src={daedalus} alt="" /></div>
                                <div class="card-header">
                                    {/* <div class="card-subtitle text-gray">: Proof-of-Stake </div> */}
                                    <div class="card-title h5"><a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://daedaluswallet.io/en/download/">Download Daedalus</a></div>
                                    <br></br>
                                    <div class="card-subtitle text-gray">Specially created for ada holders who want to help, test new Daedalus wallet features.</div>
                                    <div class="card-title h5"><a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://daedaluswallet.io/en/flight/">DAEDALUS FLIGHT</a></div>

                                    {/* <div class="card-subtitle text-gray">Software and hardware</div> */}
                                </div>
                                <div class="card-body">Find more peer reviewed papers and learn more about IOHK </div>
                                <div class="card-footer"><a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://daedaluswallet.io/en/">Learn more</a> <a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://daedaluswallet.io/en/team/">Team</a></div>
                            </div>


                        </div>

                                 <h5>Light Wallet, for Mobile or Chrome extension.  Because you will need a wallet!</h5>
                        {/* <div className="column"> */}

                        

                            <div  id=" you" class="card">
                                <div class="card-image" ><img class="img-responsive" src={yoroi} alt="" /></div>
                                <div class="card-header">
                                    {/* <div class="card-subtitle text-gray">by Emurgo </div> */}
                                    <div class="card-title h5"><a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://yoroi-wallet.com/#/">Download Yoroi Wallet</a></div>
                                    <br></br>
                                    {/* <div class="card-subtitle text-gray">Hydra: Fast Isomorphic State Channels</div> */}
                                    <div class="card-title h5"><a class="btn btn-primary" target="_blank" rel="noopener noreferrer"  href="https://yoroi-wallet.com/#/faq/1">FAQ</a></div>

                                    {/* <div class="card-subtitle text-gray">Software and hardware</div> */}
                                </div>
                                {/* <div class="card-body">Find more peer reviewed papers and learn more about IOHK </div> */}
                                <div class="card-footer"><a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://yoroi-wallet.com/#/about">About</a> <a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://emurgo.io/en">Emurgo</a></div>
                            </div>
                        </div>

                        <h4> If you are one of the first 10 people to ask we will send you 25$ in Ada after you download and created your wallet.</h4>


                    </div>

                </div>
            




        )
    }


}

export default Wallets