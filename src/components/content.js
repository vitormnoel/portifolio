import Menu from "./menu";
import Banner from "./banner";
import AboutSection from "./about";
import ProjectsSection from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";

function HomeContent(props) {
  return (
    <main className="overflow-hidden">
      <Menu />
      <Banner />

      <AboutSection />

      <ProjectsSection projects={props.projects}/>

      <Skills />

      <Contact />

      <Footer />
    </main>
  );
}

export default HomeContent;
