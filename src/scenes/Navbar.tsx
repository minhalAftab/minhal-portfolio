import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

type Props = {};

const Navbar = ({}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <nav>
      <div
        className={`${flexBetween} h-16 flex-col px-[91px] py-[21px] text-[18px]`}
      >
        <div className={`${flexBetween} w-full`}>
          {/* Left Nav heading */}
          <div className="items-center">Minhal Aftab</div>
          {/* Right Nav heading */}

          <div className={`${flexBetween} gap-5`}>
            <p className="hover:text-primary-100">Case Studies</p>
            <p className="hover:text-primary-100">Extras</p>
            <p className="hover:text-primary-100">Resume</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
