import React from 'react';
import { Router } from "@reach/router";

import "./components/assets/scss/profile.scss"
import "./components/assets/scss/home.scss";
import "./components/assets/scss/staking.scss";
import "./components/assets/scss/about.scss";
import "./components/assets/scss/profile.scss";
import "./components/assets/scss/signup.scss";
import "./components/assets/scss/login.scss";
import "./components/assets/scss/wallets.scss";

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Cryptomarkets from './components/Cryptomarkets';
import "./components/assets/scss/cardano.scss";

import ResponsiveNavigation from "./components/ResponsiveNavigation";
import About from "./pages/About";
import Home from "./pages/Home";
import Cardano from "./pages/Cardano";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import StakingService from "./pages/StakingService";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Wallets from "./pages/Wallets";
import cardano from './components/cardano.svg';

import stake from "./components/stakeholder.svg"
import logo from "./components/logo.svg"
import team from "./components/team.svg"
import wallet from "./components/wallet.svg"
import home from "./components/home.svg"
import blockchain from "./components/blockchain.svg"
import login from "./components/login.svg"
import logout from "./components/logout.svg"
import Profile from "./pages/Profile"
import signup from "./components/sign-up.svg"
import profile from "./components/avatar.svg"


function App() {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: home
    },
    {
      text: "Cryptocurrencies",
      path: "/crypto",
      icon:  blockchain 
    },
    {
      text: "Cardano",
      path: "/cardano",
      icon: cardano
    },
    {
      text: "Staking Service",
      path: "/staking",
      icon: stake
    },
    {
      text: "Wallets",
      path: "/wallets",
      icon: wallet
    },
    {
      text: "About",
      path: "/about",
      icon: team
    },
    // {
    //   text: "Contact",
    //   path: "/contact ",
    //   icon: contact
    // },
    {
      text: "SignUp",
      path: "/signup ",
      icon: signup
    },
    {
      text: "Login",
      path: "/login",
      icon: login
    },
    {
      text: "Profile",
      path: "/profile",
      icon: profile
    }


  ]
 

  return (


    <div className="App">
      <ResponsiveNavigation
        navLinks= { navLinks }
        logo= { logo }
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
        
      />

    
      {/* <div className="mob"> */}

      <Router>
        <Home path="/" />
        <Cryptocurrencies path="/crypto" />
        <Cardano path="/cardano" />
        <StakingService path="/staking" />
        <Wallets path ="/wallets" />
        <About path="/about" />
        {/* <Contact path="/contact" /> */}
        <Login path="/login" />
        <SignUp path="/signup" />
        <Profile path="/profile"></Profile>

      </Router>
      {/* </div> */}
    </div>



  );




}



export default App;
