import React, { useEffect, useRef } from "react";
import logo from "../Assets/logo.png";
import { HiBars3 } from "react-icons/hi2";

const Navbar = (ref: any) => {
  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          const menu = document.getElementById("menu");
          if (!menu?.classList.contains("hide")) menu?.classList.add("hide");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div className="navbar">
      <div className="inside-div">
        <div className="list flex flex-row justify-end nav-wrap">
          <ul id="menu" className="hide items-center" ref={wrapperRef}>
            <li>
              <a
                href="#home"
                onClick={() => {
                  const menu = document.getElementById("menu");
                  console.log(menu?.style);

                  if (menu?.classList.contains("hide")) {
                    menu?.classList.remove("hide");
                  } else menu?.classList.add("hide");
                }}
              >
                Home
              </a>
            </li>
            {/* <li>
              <a
                href="#feature"
                onClick={() => {
                  const menu = document.getElementById("menu");
                  console.log(menu?.style);

                  if (menu?.classList.contains("hide")) {
                    menu?.classList.remove("hide");
                  } else menu?.classList.add("hide");
                }}
              >
                Feature
              </a>
            </li> */}
            <li>
              <a
                href="#tokenomics"
                onClick={() => {
                  const menu = document.getElementById("menu");
                  console.log(menu?.style);

                  if (menu?.classList.contains("hide")) {
                    menu?.classList.remove("hide");
                  } else menu?.classList.add("hide");
                }}
              >
                Tokenomics
              </a>
            </li>
            {/* <li>
              <a
                href="#buysell"
                onClick={() => {
                  const menu = document.getElementById("menu");
                  console.log(menu?.style);

                  if (menu?.classList.contains("hide")) {
                    menu?.classList.remove("hide");
                  } else menu?.classList.add("hide");
                }}
              >
                Buy/Sell
              </a>
            </li> */}
            {/* <li>
              <a
                href="#strategy"
                onClick={() => {
                  const menu = document.getElementById("menu");
                  console.log(menu?.style);

                  if (menu?.classList.contains("hide")) {
                    menu?.classList.remove("hide");
                  } else menu?.classList.add("hide");
                }}
              >
                Strategy
              </a>
            </li> */}
            <li>
              <a
                href="#keyfeatures"
                onClick={() => {
                  const menu = document.getElementById("menu");
                  console.log(menu?.style);

                  if (menu?.classList.contains("hide")) {
                    menu?.classList.remove("hide");
                  } else menu?.classList.add("hide");
                }}
              >
                KeyFeatures
              </a>
            </li>
            <li>
              <a
                href="#gamefeatures"
                onClick={() => {
                  const menu = document.getElementById("menu");
                  console.log(menu?.style);

                  if (menu?.classList.contains("hide")) {
                    menu?.classList.remove("hide");
                  } else menu?.classList.add("hide");
                }}
              >
                GameFeatures
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                onClick={() => {
                  const menu = document.getElementById("menu");
                  console.log(menu?.style);

                  if (menu?.classList.contains("hide")) {
                    menu?.classList.remove("hide");
                  } else menu?.classList.add("hide");
                }}
              >
                RoadMap
              </a>
            </li>
            <a href="https://dex.dragoncrown.org/" style={{ width: "100%" }}>
              <button className="rounded-lg btn border-none p-2 w-[165px] text-white mt-5 ">
                Buy
              </button>
            </a>
          </ul>
          <div
            className="mt-2 rounded mr-2 bars"
            onClick={() => {
              const menu = document.getElementById("menu");
              console.log(menu?.style);

              if (menu?.classList.contains("hide")) {
                menu?.classList.remove("hide");
              } else menu?.classList.add("hide");
            }}
          >
            <HiBars3 className="text-yellow" size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
