import React, { Component } from "react"
// import cardano from "./components/cardano.svg/"
// import cardano from "../components/assets/img/cardanoada.jpg"

class Cardano extends Component {
    render() {
        return (

            <div className="master">


                <div style={{
                    //  backgroundImage: "url(" + cardano + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    // paddingTop:"293px",
                    // paddingBottom:"127px",
                    // marginTop:"-75px"
                }} id="cardano" className="hero column col-11 col-xs-12 container">
                    <div className="row">
                        <div className="column1">


                            <div id="imgcardano" style={{ width: '50px', height: '50px' }}  >
                                <img src="https://ucarecdn.com/f211e437-00c3-4ff2-8604-b5a94a3b8290/-/resize/300/" alt="Cardano" />

                            </div>

                            <h1>Cardano</h1>
                        </div>



                    </div>
                </div>


                <div id="carda" className="hero column col-11 col-xs-12 container">
                    <div className="row">
                        <div className="column">

                            <h5>We are exited about Cardano</h5>
                            <h5>The First blockchain protocol evolved out of a scientific philosophy and a research-first approach</h5>
                            <ul>
                                <li>Cardano is a public blockchain and a cryptocurrency project </li>
                                <li>Build from ground up by a large team of expert researchers and engineers from IOHK using peer reviewed academic papers </li>
                                <li>Cardano strives to become a social and economic decentralized system </li>
                                <li>Using the Ouroboros, Proof of Stake algorithm Cardano is 1000 times more decentralized then Bitcoin </li>
                                <li>Cardano is developing a smart contract platform that will outperform any cryptocurrency on the market. </li>
                                <li>With its treasury system Cardano will solve the governance/funding issue that other blockchain systems are having. </li>
                                <li>Scalability and interoperability of the network will be solved in the Basho era.</li>

                            </ul>
                        </div>
                        <div className="card">
                  <div className="card-image"><img className="img-responsive" src="" alt=""/></div>
                  <div className="card-header">
                  <div className="card-subtitle text-gray">Ouroboros Chronos: Proof-of-Stake </div>
                    <div className="card-title h5"><a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://eprint.iacr.org/2019/838.pdf">Read the Paper</a></div>
                    <br></br>
                    <div className="card-subtitle text-gray">Hydra: Fast Isomorphic State Channels</div>
                    <div className="card-title h5"><a className="btn btn-primary" href="#cards">Read the Paper</a></div>
                   
                    {/* <div className="card-subtitle text-gray">Software and hardware</div> */}
                  </div>
                  <div className="card-body">Find more peer reviewed papers and learn more about IOHK </div>
                  <div className="card-footer"><a className="btn btn-primary" target="_blank" rel="noopener noreferrer"  href="https://iohk.io/en/research/library/">IOHK Library</a> <a class="btn btn-primary" target="_blank" rel="noopener noreferrer"  href="https://iohk.io/en/research/researchers/">Researchers</a></div>
                </div>
                     
                      
                       

                    </div>
                </div>
                
            </div>

        )
    }


}

export default Cardano