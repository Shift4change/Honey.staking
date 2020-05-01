import React from "react";
import { NavLink } from 'react-router-dom';


export default function Narbar() {
    return (
        <div>
            <nav style={{
                backgroundColor: "Black",
                paddingTop: "15px",
                paddingBottom: "15px",
                textAlign: "center"
            }}>
                <NavLink to="/" style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none"
                }}>Home</NavLink>
                <NavLink to="/learncrypto" style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none"
                }}>Learn Crypto</NavLink>
                <NavLink to="/markets" style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none"
                }}>Crypto Markets</NavLink>
                <NavLink to="/about" style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none"
                }}>About</NavLink>
                <NavLink to="/signup" style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none"
                }}>Sign Up</NavLink>
            </nav>
        </div>
    );
}