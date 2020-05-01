import React, { Component } from "react"
import axios from "axios";
import dotenv from "dotenv";
import "../components/style.css"
import coindesk from "./coindesk.png"
import cointelegraph from "./cointelegraph.png"
import blockchain from "./blockchain.png"
import moment from "moment"
import ReactMomentCountDown from 'react-moment-countdown'
// import { set } from "mongoose";

dotenv.config();

class Cryptocurrencies extends Component {
    state = {
        cryptoInfo: {},
        dateInFuture: undefined
        // BTC: []
    }
    componentDidMount() {
        console.log("component mounted");
        // const dateInFuture = moment('05-12-2020', 'MM-DD-YYYY')
        var key = process.env.APIKey
        // eslint-disable-next-line no-useless-concat
        var URL = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ADA&tsyms=USD,EUR' + `&api+key=${key}`;


        axios.get(URL)
            .then(res => {
                this.setState({
                    cryptoInfo: res.data,
                    dateInFuture: moment('05-12-2020', 'MM-DD-YYYY')
                })
                console.log(res.data)
            })
            .catch(err =>
                console.log(err)
            )

    }

    render() {
        const dateInFuture = moment('2020-05-12')
        return (

            <>
                <table className="table table-striped table-hover col-xs-12" style={{
                    marginTop:"50px",
                    backgroundColor:"lightgray"
        }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>USD</th>
                    <th>EUR</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active">
                    <td>
                        BITCOIN
                            </td>
                    <td>
                        {this.state.cryptoInfo && this.state.cryptoInfo.BTC && this.state.cryptoInfo.BTC.USD && this.state.cryptoInfo.BTC.USD}
                    </td>
                    <td>
                        {this.state.cryptoInfo && this.state.cryptoInfo.BTC && this.state.cryptoInfo.BTC.USD && this.state.cryptoInfo.BTC.EUR}
                    </td>
                </tr>
                <tr className="active">
                    <td>
                        ETHEREUM
                            </td>
                    <td>
                        {this.state.cryptoInfo && this.state.cryptoInfo.ETH && this.state.cryptoInfo.ETH.USD && this.state.cryptoInfo.ETH.USD}
                    </td>
                    <td>
                        {this.state.cryptoInfo && this.state.cryptoInfo.ETH && this.state.cryptoInfo.ETH.USD && this.state.cryptoInfo.ETH.EUR}
                    </td>
                </tr>
                <tr className="active">
                    <td>
                        CARDANO
                            </td>
                    <td>
                        {this.state.cryptoInfo && this.state.cryptoInfo.ADA && this.state.cryptoInfo.ADA.USD && this.state.cryptoInfo.ADA.USD}
                    </td>
                    <td>
                        {this.state.cryptoInfo && this.state.cryptoInfo.ADA && this.state.cryptoInfo.ADA.USD && this.state.cryptoInfo.ADA.EUR}
                    </td>
                </tr>
            </tbody>
        </table>
            <h2>Time Until Bitcoin Halfening:</h2>
            <ReactMomentCountDown style={{
                marginLeft: "20px"
            }} toDate={dateInFuture} targetFormatMask='DD:HH:mm:ss'></ReactMomentCountDown>
            <div className="card col-xs-12" style={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#5FDADF"
            }}>
                <div className="card-image col-xs-12">
                    <img src={coindesk} alt="coindesk" class="center"></img>
                </div>
                <div className="card-header">
                    <div className="card-title h5">CoinDesk</div>
                    <div className="card-subtitle text-black">Leader in blockchain news</div>
                </div>
                <div className="card-body">
                    Click here to access one of the best cryptocurrency news sites for your educational needs and all updates!
                    </div>
                <div class="card-footer">
                    <a href="https://www.coindesk.com/" target="_blank" rel="noopener noreferrer"><button>Click Here</button></a>
                </div>
                {/* <div class="card-footer">
                    <button onClick="window.location.href = 'https://www.coindesk.com/';">Click Here</button>
                </div> */}
            </div>

            <div className="card col-xs-12" style={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#5FDADF"
            }}>
                <div className="card-image col-xs-12">
                    <img src={cointelegraph} alt="cointelegraph" class="center"></img>
                </div>
                <div className="card-header">
                    <div className="card-title h5">COINTELEGRAPH</div>
                    <div className="card-subtitle text-black">The most recent news about crypto industry</div>
                </div>
                <div className="card-body">
                    Click here to access one of the best cryptocurrency news sites for your educational needs and all updates!
                    </div>
                <div class="card-footer">
                    <a href="https://www.cointelegraph.com/" target="_blank" rel="noopener noreferrer"><button>Click Here</button></a>
                </div>
                {/* <div class="card-footer">
                    <button onClick="window.location.href = 'https://cointelegraph.com/';">Click Here</button>
                </div> */}
            </div>

            <div className="card col-xs-12" style={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#5FDADF"
            }}>
                <div className="card-image col-xs-12">
                    <img src={blockchain} alt="blockchain" class="center"></img>
                </div>
                <div className="card-header">
                    <div className="card-title h5">Blockchain and Cryptocurrency</div>
                    <div className="card-subtitle text-black">What is blockchain technology? What is cryptocurrency?</div>
                </div>
                <div className="card-body">Learn about both blockchain and crypto and how they work together!</div>
                <div className="card-footer">
                    <a href="https://builtin.com/blockchain" target="_blank" rel="noopener noreferrer"><button>Blockchain 101</button></a>
                    <a href="https://www.nerdwallet.com/blog/investing/cryptocurrency-7-things-to-know/" target="_blank" rel="noopener noreferrer"><button>Crypto 101</button></a>
                    <a href="https://www.pwc.com/us/en/industries/financial-services/fintech/bitcoin-blockchain-cryptocurrency.html" target="_blank" rel="noopener noreferrer"><button>Blockchain + Crypto</button></a>
                </div>
            </div>
            </>
        )
    }
}

export default Cryptocurrencies

