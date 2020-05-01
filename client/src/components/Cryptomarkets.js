import React from "react";
import axios from "axios";
import dotenv from "dotenv";
import "../components/Style.css"


dotenv.config();

export default class Cryptomarkets extends React.Component {
    state = {
        cryptoInfo: {},
        // BTC: []
    }
    componentDidMount() {
        console.log("component mounted");
        var key = process.env.APIKey
        // eslint-disable-next-line no-useless-concat
        var URL = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ADA&tsyms=USD,EUR' + `&api+key=${key}`;
       
 
        axios.get(URL)
            .then(res => {
                this.setState({
                    cryptoInfo: res.data
                })
                console.log(res.data)
            })
            .catch(err =>
                console.log(err)
            )

    } 
    render() {
        console.log(this.state.cryptoInfo)

        return (

            <>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>USD</th>
                            <th>EUR</th>
                            <th>Change</th>
                            <th>Chart</th>

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
                            <td>Change{}</td>
                            <td>Chart</td>
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
                            <td>Change{}</td>
                            <td>Chart</td>
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
                            <td>Change{}</td>
                            <td>Chart</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}