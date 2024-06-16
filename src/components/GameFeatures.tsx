import React from "react";
import romatheater from "../Assets/romatheater.png";
import dragonroster from "../Assets/dragonroster.png";
import synergy from "../Assets/synergy.png";
import duel from "../Assets/duel.png";
import versus from "../Assets/versus.png";
import community from "../Assets/community.png";

const GameFeatures = () => {
    return (
        <div className="usecases js-scroll slide-right" id="gamefeatures">
            <h1 className="text-[50px] usecases_title">Game Features</h1>
            <div className="usecases_wrap">
                <div className="usecases_item">
                    <div className="p-10 ">
                        <img className="mx-auto" src={romatheater} alt="" />
                        <div className="font-bold text-2xl text-white mb-8 mt-4 text-center">
                            Dynamic Dragon Duels
                        </div>
                        <p className="usecases_dec">
                            Engage in heart-pounding one-on-one dragon duels within dynamic arenas, where shifting terrains influence tactics and strategies.
                        </p>
                    </div>
                </div>
                <div className="usecases_item">
                    <div className="p-10">
                        <img className="mx-auto" src={dragonroster} alt="" />
                        <div className="font-bold text-2xl text-center text-white mb-8 mt-4">
                            Diverse Dragon Roster
                        </div>
                        <p className="usecases_dec">
                            Choose from a diverse roster of dragons, each crafted with unique stats, elemental alignments, and abilities, offering a rich and strategic gaming experience.
                        </p>
                    </div>
                </div>
                <div className="usecases_item">
                    <div className="p-10">
                        <img className="mx-auto " src={synergy} alt="" />
                        <div className="font-bold text-2xl text-center text-white mb-8 mt-4">
                            Strategic Synergy
                        </div>
                        <p className="usecases_dec">
                            Experience strategic synergy as dragons interact to amplify battlefield impact, utilizing elemental traits and surroundings to gain a tactical advantage.
                        </p>
                    </div>
                </div>
            </div>
            <div className="usecases_wrap">
                <div className="usecases_item">
                    <div className="p-10">
                        <img className="mx-auto" src={duel} alt="" />
                        <div className="font-bold text-2xl text-center text-white mb-8 mt-4">
                            Global Multiplayer Duels
                        </div>
                        <p className="usecases_dec">
                            Embark on epic global showdowns, transcending borders for intense battles against adversaries worldwide, emphasizing real-time strategy and dynamic alliances.
                        </p>
                    </div>
                </div>
                <div className="usecases_item">
                    <div className="p-10">
                        <img className="mx-auto" src={versus} alt="" />
                        <div className="font-bold text-2xl text-center text-white mb-8 mt-4">
                            Token-Infused Multiplayer Battles
                        </div>
                        <p className="usecases_dec">
                            Enter the battlefield with a strategic investment for Crown Coins per Dragon Lord, fostering a financially participative and engaging environment.
                        </p>
                    </div>
                </div>
                <div className="usecases_item">
                    <div className="p-10">
                        <img className="mx-auto" src={community} alt="" />
                        <div className="font-bold text-2xl text-center text-white mb-8 mt-4">
                            Community-Driven Gameplay
                        </div>
                        <p className="usecases_dec">
                            Actively participate in staking, voting, and community events, shaping the narrative and fostering a dynamic and engaging community within Dragon Crown War.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameFeatures;
