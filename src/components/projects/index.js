import TitleComponent from "../title";
import CardItemOp from "./item_oposite";

function ProjectsSection(props) {
  let i = 0;
  return (
    <section
      id="projects"
      data-aos="fade-right"
      className="overflow-hidden container pt-28 m-auto px-8 pb-2 lg:max-w-3xl"
    >
      <TitleComponent title="projects" />

      <div className="grid gap-20">
        {/* <div className="w-full h-[40vh] bg-[url('../public/images/snack.png')] bg-contain rounded-2xl lg:w-1/2"/> */}
        {props.projects.map((project) => (
          <CardItemOp project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
