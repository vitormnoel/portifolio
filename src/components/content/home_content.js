import Banner from "../banner";
import Main from "../main";
import Section from "../section";
import Social from "../social";
import TextComponent from "../text";
import TitleComponent from "../title";
import Container from "./container";
import Skills from "./skills";

function HomeContent() {
  const text1 = `
    Hello world! I am Vitor, a Software Engineer based in Vancouver.
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
          <Social/>
        </Section>

        <Section id="skills" fade="fade-right">
          <TitleComponent title="skills" />
          <Skills />
        </Section>

        <Section id="work" fade="fade-left">
          <TitleComponent title="work" />
          <div className="grid grid-col md:grid-cols-2 gap-20">
          <Container imagePath={IMAGE1} title="UFCat App" description="" alt="screen shot - UFCat app login page " tech={['flutter', 'dart', 'firebase']}/>
          <Container imagePath={IMAGE1} title="PetShop+" description="" alt="description" tech={['java', 'mySQL']}/>
          <Container imagePath={IMAGE1} title="Notes" description="" alt="description" tech={['react', 'javaScript', 'CSS 3']}/>
          </div>
        </Section>
      </Main>
    </>
  );
}

export default HomeContent;
