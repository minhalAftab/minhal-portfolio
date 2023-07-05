import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Doorimage from "../assets/door_landing_page.png";

type Props = {};

const LandingSection = (props: Props) => {
  return (
    <section className="mx-20 mt-20 flex items-center justify-between">
      {/* Left Heading and Text */}
      <div className=" w-2/5  ">
        <h1 className="font-worksans text-4xl font-extrabold">
          Hi, I am Minhal Aftab, an emerging Product Designer. I have worked as
          a UX designer and love creating functional and user-centric designs.
        </h1>
        <p className="py-8 ">
          After reading the book "the design of everyday things" I was inspired
          to become a UX Designer.
        </p>
        <div className="flex items-center justify-start">
          <AnchorLink className="rounded-md bg-primary-100 px-10 py-2 hover:bg-secondary-100 hover:text-light-50">
            Contact me
          </AnchorLink>
          <p className="ml-8 text-secondary-100">Download Resume</p>
        </div>
      </div>
      {/* Door image */}
      <div className="mr-16 h-full">
        <img src={Doorimage} />
      </div>
    </section>
  );
};

export default LandingSection;
