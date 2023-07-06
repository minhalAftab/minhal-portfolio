import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavLink from "../shared/NavLink";
import { SelectedPage } from "../shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setisMenuToggled] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-30 w-full bg-light-50">
      <div
        className={`${flexBetween} h-16  flex-col  px-[91px] py-[21px] text-lg`}
      >
        <div className={`${flexBetween} w-full `}>
          {/* Left Nav heading */}
          <div className="items-center">Minhal Aftab</div>
          {/* Right Nav heading */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} gap-5 pl-10`}>
              <NavLink
                page="Case Studies"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavLink
                page="Extras"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavLink
                page="Resume"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          ) : (
            <button
              className="rounded-md bg-primary-100 p-2"
              onClick={() => setisMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className=" h-6 w-6 text-dark-50" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
