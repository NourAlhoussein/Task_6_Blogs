import Items from "../Data/Navbar";
import { NavLink } from "react-router-dom";
import { PiSunDimLight } from "react-icons/pi";
import { IoMoonOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
// import React from "react";
// import type { SetStateAction } from "react";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";
import { useState, useEffect } from "react";
function Navbar() {
  const modeCtx = useContext(ModeContext);
  const { mode, setMode } = modeCtx;
  const [active, setActive] = useState("Blog");
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div
      className="flex flex-row items-center justify-between fixed w-full lg:py-[40px] py-[20px]
    lg:px-[112px] px-[20px] dark:text-white dark:bg-primaryColor bg-white top-0 z-50"
    >
      <div className="font-semibold lg:text-xl md:text-lg text-base cursor-pointer dark:text-white text-primaryColor">
        Your Name
      </div>
      {/* big Navbar */}
      <div className="sm:flex hidden flex-row items-center justify-center lg:gap-[30px] gap-[20px]">
        {Items.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.link}
              onClick={() => {
                setActive(item.name);
              }}
              className={`font-normal lg:text-xl md:text-lg text-base cursor-pointer ${
                active === item.name ? "is-active" : ""
              }`}
            >
              {item.name}

              <span
                className={`flex h-[1px] dark:bg-white bg-primaryColor ${
                  active === item.name
                    ? "w-[95%] transition-all duration-500 ease-in-out"
                    : "w-0 transition-all duration-500 ease-in-out"
                }`}
              ></span>
            </NavLink>
          );
        })}

        {/* change between dark and light mood in desktup navbar */}
        <button
          onClick={() => {
            setMode(mode === "dark" ? "light" : "dark");
          }}
          className="relative flex items-center cursor-pointer px-[8px] w-[96px] h-[40px] dark:bg-white bg-primaryColor rounded-[30px] transition-colors overflow-hidden"
          aria-label="Toggle dark mode"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mode === "light" ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between w-full"
              >
                <PiSunDimLight className="text-2xl text-white" />
                <span className="bg-white w-[24px] h-[24px] rounded-full"></span>
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between w-full"
              >
                <span className="bg-primaryColor w-[24px] h-[24px] rounded-full"></span>
                <IoMoonOutline className="text-2xl text-primaryColor" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* small Navbar */}

      <div className="sm:hidden">
        {/* Button to open navbar */}
        <button
          onClick={() => {
            setOpenMenu((prev) => (prev = !prev));
          }}
          className="text-2xl dark:text-white text-primaryColor"
        >
          <MdOutlineMenu />
        </button>
        <AnimatePresence>
          {openMenu && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute z-50 flex flex-col items-center justify-center left-0 top-0 w-full h-[100vh]
           dark:bg-primaryColor dark:text-white text-primaryColor bg-white gap-[30px]"
            >
              <div className="mb-[20px] font-semibold lg:text-xl md:text-lg text-base cursor-pointer dark:text-white text-primaryColor">
                Your Name
              </div>{" "}
              {Items.map((item) => {
                return (
                  <NavLink
                    key={item.id}
                    to={item.link}
                    onClick={() => {
                      setActive(item.name);
                      setOpenMenu((prev) => (prev = !prev));
                    }}
                    className={`font-normal lg:text-xl md:text-lg text-base cursor-pointer ${
                      active === item.name ? "is-active" : ""
                    }`}
                  >
                    {item.name}
                    <span
                      className={`flex h-[1px] dark:bg-white bg-primaryColor ${
                        active === item.name
                          ? "w-[95%] transition-all duration-500 ease-in-out"
                          : "w-0 transition-all duration-500 ease-in-out"
                      }`}
                    ></span>
                  </NavLink>
                );
              })}
              {/* change between dark and light mood in small navbar*/}
              <button
                onClick={() => {
                  setMode(mode === "dark" ? "light" : "dark");
                  setOpenMenu(false);
                }}
                className="relative flex items-center cursor-pointer px-[8px] w-[96px] h-[40px] dark:bg-white bg-primaryColor rounded-[30px] transition-colors overflow-hidden"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mode === "light" ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between w-full"
                    >
                      <PiSunDimLight className="text-2xl text-white" />
                      <span className="bg-white w-[24px] h-[24px] rounded-full"></span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between w-full"
                    >
                      <span className="bg-primaryColor w-[24px] h-[24px] rounded-full"></span>
                      <IoMoonOutline className="text-2xl text-primaryColor" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>{" "}
              <button
                className="absolute bottom-[2%] text-2xl"
                onClick={() => {
                  setOpenMenu((prev) => (prev = !prev));
                }}
              >
                <IoCloseSharp />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
