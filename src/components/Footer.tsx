import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 footer text-white">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <nav className="flex flex-wrap justify-center">
          <a
            href="#home"
            className="underline text-gray-300 hover:text-white px-4 py-2"
          >
            Home
          </a>
          <a
            href="#tokenomics"
            className="underline text-gray-300 hover:text-white px-4 py-2"
          >
            Tokenomics
          </a>
          {/* <a
            href="#strategy"
            className="underline text-gray-300 hover:text-white px-4 py-2"
          >
            Strategy
          </a> */}
          <a
            href="#keyfeatures"
            className="underline text-gray-300 hover:text-white px-4 py-2"
          >
            KeyFeatures
          </a>
          <a
            href="#gamefeatures"
            className="underline text-gray-300 hover:text-white px-4 py-2"
          >
            GameFeatures
          </a>
          <a
            href="#roadmap"
            className="underline text-gray-300 hover:text-white px-4 py-2"
          >
            RoadMap
          </a>
        </nav>
        <div className="content w-2/4 text-center my-6 " id="footer_wide">
          © Copyright 2024 | Dragon Crown | All Rights Reserved
        </div>
        <div id="footer_narrow">
          <div className="content text-center mb-2 mt-2">
            © Copyright 2023 | Dragon Crown
          </div>
          <div className="content text-center mb-4">All Rights Reserved</div>
        </div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          If you have any questions for DCRN Team, contact{" "}
          <a href="#" className="text-[#50C6FB]">
            admin@dragoncrown.org
          </a>
        </div>
        <div className="social flex flex-row space-x-8 text-2xl text-[#50C6FB]">
          <a href="https://twitter.com/DragonCrownSwap" target="_blank">
            <AiOutlineTwitter />
          </a>
          {/* <a href="https://discord.gg/u7s4Q4mW" target="_blank">
            <BsDiscord />
          </a> */}
          <a href="https://t.me/DRAGONCROWN_ANNOUNCEMENTS" target="_blank">
            <FaTelegramPlane />
          </a>
          <a href="https://t.me/DRAGONCROWN_CHAT" target="_blank">
            <FaTelegramPlane />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
