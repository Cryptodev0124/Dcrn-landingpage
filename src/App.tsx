import React, { useEffect, useRef } from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import ape from "./Assets/ape.png";
import rugdoc from "./Assets/rugdoc.png";
import guard from "./Assets/0xGuard.png";
import vital from "./Assets/VitalBlock.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Feature from "./components/Feature";
import Tokonomics from "./components/Tokonomics";
import ToeknAllocation from "./components/ToeknAllocation";
import BuySell from "./components/BuySell";
import Strategy from "./components/Strategy";
import KeyFeatures from "./components/KeyFeatures";
import GameFeatures from "./components/GameFeatures";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";
import Dragon from "./Assets/dragon.png";
import MobileDragon from "./Assets/dragon_mobile.png";
import Bg from "./Assets/bg.png";
import MobileBg from "./Assets/bg_mobile.png";
import MainFunction from "./components/MainFunction";



function App() {
  return (
    <div id="home">
      <img src={Bg} className="img-bg"/>
      <img src={MobileBg} className="img-bg-mobile"/>
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="top-wrap">
        <div className="flex flex-col">
          <div className="flex w-full my-banner js-scroll fade-in" id="banner">
            <div id="banner-top">
              <img src={Dragon} className="img-dragon"/>
              <img src={MobileDragon} className="img-dragon-mobile"/>
            </div>
            <div id="banner-bottom"></div>
            <div id="banner-left"></div>
            <div id="banner-right"></div>
            <div id="banner-top-left"></div>
            <div id="banner-top-right"></div>
            <div id="banner-bottom-left"></div>
            <div id="banner-bottom-right"></div>
            <div className="banner-art space-y-6 text-white flex-1 flex flex-col jusify-center ">
              <h1>Dragon Crown</h1>
              <p className="justify-content  text-xl">
                Dragon Crown (DCRN) stands as a pioneering venture merging the realms of decentralized finance (DeFi) and play-to-earn (P2E) gaming. Rooted in innovation, it seeks to forge an unprecedented ecosystem characterized by streamlined token utility and unparalleled user engagement.
              </p>
              <div className="social flex flex-row space-x-8 text-[#50C6FB]">
                <a href="https://twitter.com/DragonCrownSwap" target="_blank">
                  <AiOutlineTwitter />
                </a>
                <a href="https://t.me/cryptodev0615" target="_blank">
                  <FaTelegramPlane />
                </a>
                <a href="https://t.me/DRAGONCROWN_CHAT" target="_blank">
                  <FaTelegramPlane />
                </a>
              </div>
              <div className="flex space-x-2 links">
                <a
                  href="https://dex.dragoncrown.org/"
                  className="rounded-full border border-[#FFB652] text-[#FFB652] text-center"
                  id="buy-btn"
                >
                  Buy Tokens
                </a>
                <a
                  href="https://dragoncrown.org/DragonCrownDocs.pdf"
                  className="rounded-full border border-[#50C6FB] text-[#50C6FB] text-center paperlink"
                  target="_blank"
                  id="whitepaper-btn"
                >
                  White paper
                </a>
              </div>
              {/* <div className="flex space-x-2 proof">
                <div id="slider-container">
                  <div id="slider-scroller">
                    <div className="slider-item"><a href="https://0xguard.com/"><img src={guard} /></a></div>
                    <div className="slider-item"><a href="https://vitalblock.org/"><img src={vital} /></a></div>
                    <div className="slider-item"><a href="https://www.apeoclock.com/"><img src={ape} /></a></div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="flex-1 img ">
              {/* <img src={pic1} className="h-96" /> */}
              <MainFunction />
            </div>
          {/* <img src="./Assets/wood_right.png" alt="" className="right-side"/> */}

          </div>
          {/* <Feature /> */}
          <Tokonomics />
          {/* <ToeknAllocation /> */}
          {/* <BuySell /> */}
          {/* <Strategy /> */}
          <KeyFeatures />
          <GameFeatures />
          <RoadMap />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
