import React from "react";
import circle from "../Assets/circle.png";

const ToeknAllocation = () => {
  return (
    <div className="flex token_allocation text-white js-scroll slide-right">
      <div className="img_div">
        <img src={circle} id="img" />
      </div>

      {/* <div className="ml-10 flex-1 flex flex-col justify-center allocation-text ">
        <div className="relative">
          <img
            src={Ellipse2}
            className="icon absolute  -left-7 -top-[15px] h-14"
          />
        </div>

        <h1 className="text-[50px]">Token Allocation</h1>
        <div className="ml-2 mt-5 text-[18px]">
          The DCRN token distribution strategy is designed to ensure the
          project's longevity and continuous growth. The allocation of the total
          supply of DCRN tokens is divided strategically to support the optimal
          development, promotion, and operation of the project. The distribution
          is as follows:
          <ul className="list-disc mt-4 ml-4 space-y-2">
            <li>
              <span>Pre-sale</span>
              <p>
                30% of the tokens are allocated for the Initial DEX Offering.
              </p>
            </li>
            <li>
              <span>Liquidity Provision (LP)</span>
              <p>
                A significant portion, 21.6% of tokens, are set aside for
                liquidity provision.
              </p>
            </li>
            <li>
              <span>Rewards</span>
              <p> 20% of the tokens are reserved for rewards.</p>
            </li>
            <li>
              <span>Team</span>
              <p>
                2% of tokens are set aside for the Dragon Crown team.
              </p>
            </li>
            <li>
              <span>Marketing</span>
              <p>
                4.4% of tokens are set aside for the DCRN Marketing team.
              </p>
            </li>
            <li>
              <span>CEX Liquidity</span>
              <p>
                10% of tokens are set aside for the CEX Liquidity.
              </p>
            </li>
            <li>
              <span>P2E Rewards</span>
              <p>8% of the tokens are dedicated to the gaming platform.</p>
            </li>
            <li>
              <span>Game Development</span>
              <p>
                4% of the tokens are allocated to the Game Development.
              </p>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default ToeknAllocation;
