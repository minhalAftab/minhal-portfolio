import { CaseType, SelectedPage } from "../../shared/types";
import { useParams } from "react-router-dom";
import Home from "../home";
import { useState } from "react";
import LandingSection from "../../components/LandingSection";

const ProjectContainer = () => {
  const { projectId } = useParams();
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  console.log(projectId);
  let project = <></>;
  switch (projectId) {
    case "elderlyCaseStudy":
      break;
    default:
      project = (
        <LandingSection setSelectedPage={setSelectedPage}></LandingSection>
      );
  }
  return project;
};

export default ProjectContainer;
