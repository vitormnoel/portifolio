import Banner from "../banner";
import Contact from "../contact";
import Footer from "../footer";
import Icons from "../icons";
import Main from "../main";
import Section from "../section";
import TextComponent from "../text";
import TitleComponent from "../title";
import Container from "./container";
import Skills from "./skills";

function HomeContent(props) {
  const IMAGE1 = "/images/ufcat.png";
  const IMAGE2 = "/images/snack.png";
  const IMAGE3 = "/images/travel.png";
  const IMAGE4 = "/images/petshop.png";
  const IMAGE5 = "/images/feedback.png";

  return (
    <>
      <Main>
        <Banner />
        <Section id="about" fade="fade-left">
          <TitleComponent title="about" />
          <div>
            <p className="py-2 mt-6">
              I recently graduated from the Federal University of Goias after
              completing a Bachelor's degree in Computer Science. For the past 4
              years I have been working as a developer and I have experience
              with a wide range of technologies. You can find a list of my
              technical skills below.
            </p>
            <p className="py-2">
              I am a self-motivated learner, able to work independently and
              collaboratively in a team.{" "}
              <span className="bg-yellow-200 cursor-pointer">
                I am currently looking for a new opportunity
              </span>{" "}
              to continue refining my skills.
            </p>
            <p className="py-2">
              <span className="font-semibold">
                When I am not in front of a computer
              </span>
              , I will be doing an outdoor activity, traveling, playing video
              games or listening to music.
            </p>
            <Icons />
          </div>
        </Section>

        <Section id="skills" fade="fade-right">
          <TitleComponent title="skills" />
          <Skills />
        </Section>

        <Section id="work" fade="fade-left">
          <TitleComponent title="work" />
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
            <Container
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
            />
          </div>
        </Section>

        <Contact />

        <Footer />
      </Main>
    </>
  );
}

export default HomeContent;
