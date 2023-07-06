import { SelectedPage } from "../shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const CaseStudies = ({ setSelectedPage }: Props) => {
  return (
    <section className="mx-20 mt-24 h-full">
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
    </section>
  );
};

export default CaseStudies;
