import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Doorimage from "../assets/door_landing_page.png";
import Checkimage from "../assets/yellow_check_bg.png";
import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const LandingSection = ({ setSelectedPage }: Props) => {
  return (
    <section className="mx-20 mt-20 flex items-center justify-between">
      {/* Left Heading and Text */}
      <motion.div
        className=" w-2/5  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="font-worksans text-4xl font-extrabold">
          Hi, I am Minhal Aftab, an emerging Product Designer. I have worked as
          a UX designer and love creating functional and user-centric designs.
        </h1>
        <p className="py-8 ">
          After reading the book "the design of everyday things" I was inspired
          to become a UX Designer.
        </p>

        <div className="flex items-center justify-start">
          <AnchorLink className=" relative z-30 rounded-md bg-primary-100 px-10 py-2 hover:bg-secondary-100 hover:text-light-50">
            Contact me
          </AnchorLink>

          <p className="ml-8 text-secondary-100">Download Resume</p>
        </div>
      </motion.div>
      <motion.div
        className=" absolute -bottom-2 -left-2 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <img src={Checkimage} alt="check-design-image.png" />
      </motion.div>
      {/* Door image */}
      <motion.div
        className="mr-16 h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <img src={Doorimage} alt="yellow-door-image.png" />
      </motion.div>
    </section>
  );
};

export default LandingSection;
