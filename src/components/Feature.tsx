import React from "react";
import rocket from "../Assets/rocket-anim.gif";
import { VscGraph } from "react-icons/vsc";
import { SiSpringsecurity } from "react-icons/si";

const Feature = () => {
  return (
    <div className="feature flex js-scroll fade-in-bottom" id="feature">
      <div className="img flex-1" id="feature-img">
        <img src={rocket} />
      </div>
      <div className="feature-text flex-1 text-[18px] text-white">
        <h1 className="text-[50px]">Fastest & Safe </h1>
        <p className="mt-5">
          <VscGraph className="text-[#4AB8E9] inline-block mr-1 text-2xl feature-img" />
          <span className="text-[#4AB8E9]"> Instant Trading: </span>
          You can engage in trades instantly, irrespective of the transaction
          amount, allowing for quick and efficient trading experiences. By
          eliminating the waiting time for transaction confirmations, you can
          save valuable time and execute trades promptly, seizing potential
          market opportunities.
        </p>
        <p className="mt-6 ">
          <SiSpringsecurity className="text-[#4AB8E9] inline-block mr-1 text-2xl feature-img" />
          <span className="text-[#4AB8E9]">Enhanced Security: </span>You can
          trade with peace of mind, knowing that MagicHubs has implemented
          robust security measures to safeguard your transactions and funds.
        </p>
      </div>
    </div>
  );
};

export default Feature;
