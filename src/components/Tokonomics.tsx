import React from "react";
import coins from "../Assets/coins-with-phone_1.gif";
import circle from "../Assets/circle.png";

const Tokonomics = () => {
  return (
    <div
      className="flex tokonomics text-white js-scroll slide-left"
      id="tokenomics"
    >
      <div className="tokonomics-article flex-1 ">
        <h1 className="text-[50px]">Tokenomics</h1>
        <span className="text-gray-400">Tokenomics of DCRN</span>
        <p className="text-[14px] mt-8 border-[#f1a610] description3">
          <span className="text-[#42E8E0] name3"> Name: </span> Dragon Crown{" "}
          <br />
          <span className="text-[#42E8E0] tax3"> Symbol:</span> $DCRN
          <br />
          <span className="text-[#42E8E0] tax3"> Chain:</span> Arbitrum One
          <br />
          <span className="text-[#42E8E0] tax3"> Standard:</span> ERC404
          <br />
          <span className="text-[#42E8E0] totalsupply3">
            {" "}
            Total Supply:
          </span>{" "}
          1000000 <br />
          
          <span className="text-[#42E8E0] tax3"> Decimal:</span> 18
          <br />
          <span className="text-[#42E8E0] tax3"> Tax System:</span> 3% sell fee{" "}/ {" "} 2% buy fee{" "}
          <br />
          <span className="mt-4 block">
            <span className="my-2 block tokenomics-dec1">
              This fee structure encourages token retention and enables us to
              invest in the continued enhancement of the Dragon Crown ecosystem.
            </span>
            {/* <span className="my-2 block tokenomics-dec2">
              Of the 10% sell fee, 7% is redistributed to DCRN holders. This
              feature incentivizes holding, as it allows token holders to earn
              passive income, thereby creating a thriving and engaged community.
            </span> */}
          </span>
        </p>
      </div>
      {/* <div className="tokonomics-img flex-1">
        <img src={coins} className="coins" />
      </div> */}
      <div className="img_div">
        <img src={circle} id="img" />
      </div>
    </div>
  );
};

export default Tokonomics;
