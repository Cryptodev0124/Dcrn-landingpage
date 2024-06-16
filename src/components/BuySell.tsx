import React from "react";
import wallet from "../Assets/wallet-anim.gif";
import phone from "../Assets/phone_android.png";
import diversity_2 from "../Assets/diversity_2.png";
import ads_click from "../Assets/ads_click.png";
import auto_graph from "../Assets/auto_graph.png";

const BuySell = () => {
  return (
    <div className="buysell   text-white js-scroll slide-left" id="buysell">
      <div className="tokonomics-article flex-1 ">
        <h1 className="text-[50px]">How to Buy & Sell</h1>
        <div className="flex flex-col space-y-8 mt-10">
          <div className="flex space-x-6">
            <div className="flex justify-center items-center icon-box rounded-full h-12 buysell_img">
              <img src={phone} className="h-15" />
            </div>
            <div className="flex-1">
              <b className="text-[#50C6FB] block mb-4 text-lg ">
                Download & setup Unisat Wallet
              </b>
              <span>
                <a href="https://unisat.io/download" target="_blank">
                  Download UniSat
                </a>{" "}
                (a crypto wallet in form of a browser extension).
              </span>
            </div>
          </div>

          <div className="flex space-x-6">
            <div className="flex justify-center items-center icon-box rounded-full h-12 buysell_img">
              <img src={auto_graph} className="h-15" />
            </div>
            <div className="flex-1">
              <b className="text-[#50C6FB] block mb-4 text-lg">
                Buy and send BTC to UniSat
              </b>
              <span>
                Buy BTC on an exchange (i.e.{" "}
                <a href="https://Bitcoin.org" target="_blank">
                  Bitcoin.org
                </a>
                ,{" "}
                <a href="https://Coinbase.com" target="_blank">
                  Coinbase.com
                </a>
                ,{" "}
                <a href="https://Bitcoin.com" target="_blank">
                  Bitcoin.com
                </a>
                , etc.).
              </span>
            </div>
          </div>

          <div className="flex space-x-6">
            <div className="flex justify-center items-center icon-box rounded-full h-12 buysell_img">
              <img src={ads_click} className="h-15" />
            </div>
            <div className="flex-1">
              <b className="text-[#50C6FB] block mb-4  text-lg">
                Head on to MagicHub and swap for $MHUB
              </b>
              <span>
                <a href="https://dapp.magichubs.io">Click here</a> to head on
                over to MagicHub dapp. In the SWAP page, you can easily buy/sell
                $MHUB, and can claim rewards manually.
              </span>
            </div>
          </div>

          <div className="flex space-x-6">
            <div className="flex justify-center items-center icon-box rounded-full h-12 buysell_img">
              <img src={diversity_2} className="h-15" />
            </div>
            <div className="flex-1">
              <b className="text-[#50C6FB] block mb-4  text-lg">
                View all state
              </b>
              <span>
                You can get all information about your account on{" "}
                <a href="https://dapp.magichubs.io" target="_blank">
                  HOME page
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="tokonomics-img flex-1">
        <img src={wallet} />
      </div>
    </div>
  );
};

export default BuySell;
