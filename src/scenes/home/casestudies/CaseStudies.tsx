import { casestudies } from "../../../constants/Constants";
import { CaseType, SelectedPage } from "../../../shared/types";

import { Link } from "react-router-dom";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const CaseStudy = ({ id, image, title }: CaseType) => {
  return (
    <Link
      to={`/projects/${id}`}
      className="h-[340px] w-[340px] flex-col items-center justify-center rounded-3xl bg-primary-500 bg-clip-content
    "
    >
      <p className="mb-5 mt-4 flex justify-center font-roboto text-lg">
        {title}
      </p>
      <span className="flex justify-center">
        <img src={image} />
      </span>
    </Link>
  );
};

const CaseStudies = ({ setSelectedPage }: Props) => {
  return (
    <section className="mx-20 mt-24 h-full" id="casestudies">
      {/* Heading */}
      <div className=" ">
        <h2 className="font-worksans text-2xl font-semibold">
          UX / UI Case Studies
        </h2>
        <p className=" mt-2 w-2/4 pb-10 text-base">
          The following case studies showcase my understanding of UX concepts,
          User research and Testing and my ability to adapt to different
          techniques under different circumstances.
        </p>
      </div>
      {/* Grid */}
      <div className=" justify-center gap-3 md:flex md:flex-wrap">
        {casestudies.map((casestudy: CaseType) => (
          <CaseStudy
            id={casestudy.id}
            image={casestudy.image}
            title={casestudy.title}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
