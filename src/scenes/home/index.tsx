import React from "react";
import LandingSection from "../../components/LandingSection";
import CaseStudies from "./casestudies/CaseStudies";
import { SelectedPage } from "../../shared/types";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <div>
      <LandingSection setSelectedPage={setSelectedPage} />
      <CaseStudies setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default Home;
