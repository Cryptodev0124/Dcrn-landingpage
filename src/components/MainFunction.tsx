import React, { Component } from "react";
import { VscGraph } from "react-icons/vsc";
import { SiSpringsecurity } from "react-icons/si";
import ERC20ABI from "../abi/presaleErc20.json";
import { AbiItem } from "web3-utils";
import Timer from "./Timer";
// import Timer from "./Timer";
// import Web3 from "web3";


const MainFunction = () => {
    // const web3 = new Web3(new Web3.providers.HttpProvider("https://arb1.arbitrum.io/rpc"));
    // const presaleContract = new web3.eth.Contract((ERC20ABI as unknown) as AbiItem, '0xd77A509F3a72d9f63a9BAa2BA9439864731C50a0');
    const startDate = new Date('2024-03-05T00:00:00');
    const currentDate = Date.now();
    const endDate = new Date('2024-03-05T00:00:00');
    let state;
    if (currentDate < startDate.getTime()) {
        state = "Presale Starts In:";
    } else if (currentDate >= startDate.getTime() && currentDate <= endDate.getTime()){
        state = "Presale Ends In:";
    } else if (currentDate > endDate.getTime()) {
        state = "Presale Ended";
    }
    return (
        <div className="feature flex fade-in-bottom" id="mainFunction">
            <div className="feature-text flex-1 text-[18px] text-white">
                <h1 className="text-[50px]">{state} </h1>
                <Timer />
                {/* <Countdown date={date} className="mytimer" /> */}
                <div>
                    <VscGraph className="text-[#FFFFFF] inline-block mr-1 text-2xl mainFunction-img" />
                    <span className="text-[#FFFFFF]"> DCRN Price: </span>
                    <div className="usdc-value">
                        <span className="text-[#00ffff] mr-4">0</span><span className="text-[#deb462]"> USDC</span>
                    </div>
                </div>
                <div className="marginBottom">
                    <SiSpringsecurity className="text-[#FFFFFF] inline-block mr-1 text-2xl mainFunction-img" />
                    <span className="text-[#FFFFFF]">Total Gathered: </span>
                    <div className="usdc-value">
                        <span className="text-[#00ffff] mr-4">0 </span><span className="text-[#deb462]"> USDC</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFunction;
