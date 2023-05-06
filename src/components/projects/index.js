import Container from "../container";
import TitleComponent from "../title";

function ProjectsSection() {
  const IMAGE1 = "/images/ufcat.png";
  const IMAGE2 = "/images/snack.png";
  const IMAGE3 = "/images/travel.png";
  const IMAGE4 = "/images/petshop.png";
  const IMAGE5 = "/images/feedback.png";

  return (
    <section
      id="projects"
      data-aos="fade-right"
      className="overflow-hidden container pt-28 m-auto px-8 lg:max-w-3xl"
    >
      <TitleComponent title="projects" />

      <div className="grid grid-col md:grid-cols-2 gap-20">
        <Container
          imagePath={IMAGE1}
          links="git"
          git="https://github.com/welesonbatista/UFMIAU"
          title="UFCat App"
          description=""
          alt="screen shot - UFCat app login page "
          tech={["flutter", "dart", "firebase"]}
        />
        <Container
          imagePath={IMAGE2}
          links="both"
          git="https://github.com/vitormnoel/delivery"
          link="https://snackinho-test.vercel.app/"
          title="Snack - Delivery App"
          description=""
          alt="screen shot - snack food delivery app"
          tech={["next", "typeScript", "sass"]}
        />
        {/* <Container
              imagePath={IMAGE3}
              links="both"
              git="https://github.com/vitormnoel/travel-notes"
              link="https://travel-notes.vercel.app/"
              title="Travel App"
              description=""
              alt="screen shot - ui travel app"
              tech={["react", "javaScript", "CSS 3"]}
            />
            <Container
              imagePath={IMAGE4}
              links="git"
              git="https://github.com/vitormnoel/petshop-application"
              title="PetShop+"
              description=""
              alt="screen shot - code editor with java code"
              tech={["java", "mySQL"]}
            />
            <Container
              imagePath={IMAGE5}
              links="git"
              git="https://github.com/vitormnoel/app_client"
              title="Feedback App"
              description=""
              alt="screen shot - hospital feedback app"
              tech={["Flutter", "Rest API", "PHP"]}
            /> */}
      </div>
    </section>
  );
}

export default ProjectsSection;
