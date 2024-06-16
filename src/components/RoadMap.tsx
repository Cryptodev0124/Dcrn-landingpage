import React from "react";
import phase1 from "../Assets/phase1.png";
import phase2 from "../Assets/phase2.png";
import phase3 from "../Assets/phase3.png";
import phase4 from "../Assets/phase4.png";
import phase5 from "../Assets/phase5.png";

const RoadMap = () => {
  return (
    <div
      className="roadmap text-white roadmap js-scroll fade-in-bottom"
      id="roadmap"
    >
      <h1>RoadMap</h1>
      <div className="roadmapboxs mt-10 gap-x-10">
        <div className="roadmap_item">
          <img src={phase1} />
          <div className="roadmap_title">
            {/* <h2 className="mt-4 text-[#4EC0F4] ">Research & Development</h2> */}
            <ul className="list-disc mt-2 ml-4 text-start leading-6">
              <li>Market Research</li>
              <li>Conceptualization of Dragon Crown</li>
              <li>Idea Validation</li>
              <li>Algorithm</li>
            </ul>
          </div>
        </div>
        <div className="roadmap-box roadmap_item">
          <div className="roadmap-cur1">
            <img src={phase2} />
          </div>
          <div className="roadmap_title">
            {/* <h2 className="mt-4 text-[#7795FD] text-[20px]">
              MagicHub V1.0 Launch
            </h2> */}
            <ul className="list-disc ml-4 mt-2 leading-6">
              <li> WhitePaper v.1 Release </li>
              <li> Community Building</li>
              <li> MVP Development</li>
              <li> Smart Contract Audit</li>
            </ul>
          </div>
        </div>
        <div className="roadmap_item">
          <div className="roadmap-cur">
            <img src={phase3} />
          </div>
          <div className="roadmap_title">
            {/* <h2 className="mt-4 text-[#E4A74A] text-[20px]">
              Ecosystem Expanding Development
            </h2> */}
            <ul className="list-disc mt-2 ml-4 leading-6">
              <li>Token Presale Launch</li>
              <li>Giveaway & Airdrops Launch</li>
              <li>Dragon Crown Swap Launch</li>
              <li>Collaborations & Partnerships</li>
              <li>Crypto Trackers Listing</li>
            </ul>
          </div>
        </div>
        <div className="roadmap_item">
          <div className="roadmap-cur1">
            <img src={phase4} />
          </div>
          <div className="roadmap_title">
            {/* <h2 className="text-[#96F0EA] text-[20px] mt-4">
              GameFi Features Released & Ecosystem Expanding
            </h2> */}
            <ul className="list-disc mt-2 ml-4 leading-6">
              <li>CEX Listing</li>
              <li>Game Alpha Release</li>
              <li>DAO Governance Event</li>
              <li>Audience Expansion</li>
              {/* <li>Ecosystem Expanding</li>
              <li>Will be updated and revealed!</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
