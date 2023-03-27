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

function HomeContent() {
  const text1 = `
    Hello world! I am a Software Engineer based in Vancouver /Canada.
    I received my Bachelor's degree in Computer Science from the 
    Federal University of Catalão in 2022. For the past 4 years I have 
    been working as a developer and I have experience with a wide 
    range of technologies. You can find a list of my technical skills below.`;

  const text2 = `
  I am passionate about building web applications that are fast, 
  responsive and accessible. I am also a fan of open source 
  software and I am always looking for new ways to contribute 
  to the community.
  `;

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
            <TextComponent text={text1} />
            <br />
            <TextComponent
              text={text2}
              span="I am currently looking for a new opportunity"
              after="
                    to continue refining my skills with the right 
                    company."
            />
          </div>

          <div className="mt-20 sm:hidden">
            <Icons/>
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
