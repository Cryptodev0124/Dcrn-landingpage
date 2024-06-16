import React from "react";
import staking from "../Assets/staking.png";
import margin from "../Assets/margin.png";
import aibot from "../Assets/aibot.png";
import game from "../Assets/game.png";

const KeyFeatures = () => {
  return (
    <div className="usecases js-scroll fade-in" id="keyfeatures">
      <h1 className="text-[50px] usecases_title">Key Features</h1>
      <div className="usecases_wrap">
        <div className="usecases_item_circle">
          <div className="p-10 ">
            <img className="mx-auto" src={staking} alt="" />
            <div className="font-bold text-2xl text-white mb-8 mt-4 text-center">
              Staking
            </div>
            <p className="usecases_dec">
              Introducing LP staking for liquidity providers and token staking for DCRN holders, offering dual opportunities for rewards.
            </p>
          </div>
        </div>
        <div className="usecases_item_circle">
          <div className="p-10">
            <img className="mx-auto" src={margin} alt="" />
            <div className="font-bold text-2xl text-center text-white mb-8 mt-4">
              Margin Staking
            </div>
            <p className="usecases_dec">
              Optimize profits through strategic "margins staking" a dynamic approach that leverages lending/borrowing protocols like Aave.
            </p>
          </div>
        </div>
      {/* </div>
      <div className="usecases_wrap"> */}
        <div className="usecases_item_circle">
          <div className="p-10">
            <img className="mx-auto " src={aibot} alt="" />
            <div className="font-bold text-2xl text-center text-white mb-8 mt-4">
              Trading Bot
            </div>
            <p className="usecases_dec">
              Connect your wallet, deposit funds, and trade autonomously with our diverse bot options including DCA Bot, Grid Trading Bot, and Rebalancing Bot.
            </p>
          </div>
        </div>
        <div className="usecases_item_circle">
          <div className="p-10">
            <img className="mx-auto" src={game} alt="" />
            <div className="font-bold text-2xl text-center text-white mb-8 mt-4">
              Play-to-Earn (P2E) Game
            </div>
            <p className="usecases_dec">
              Immerse yourself in a rewarding gaming experience where participation not only entertains but also contributes to your financial success through play-to-earn mechanics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
