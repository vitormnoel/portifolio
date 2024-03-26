import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TitleComponent from "../title";
import Icons from "../icons";

function AboutSection() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  //   AOS.refresh();
  // });

  return (
    <section
      id="about"
      // data-aos="fade-left"
      className="overflow-hidden container pt-28 m-auto px-8 lg:max-w-3xl"
    >
      <TitleComponent title="about" />

      <div>
        <p className="py-2 mt-6">
          I graduated from the Federal University of Goias after
          completing a Bachelor's degree in Computer Science and moved abroad
          , I am currently located in Barcelona /Spain.
        </p>
        <p className="py-2">
          I am passionate about building good looking interfaces, web apps, and
          everything in between. I am a self-motivated learner, able to work
          independently and collaboratively in a team.
        </p>
        <p className="py-2">
          For the past 4 years I have been working as a developer and I gathered
          experience with a wide range of technologies.{" "}
          <span className="bg-yellow-200 cursor-pointer">
            I am currently looking for a new opportunity
          </span>{" "}
          to continue refining my skills.
        </p>
        <p className="py-2">
          <span className="font-semibold">
            When I am not in front of a computer
          </span>
          , I will be doing an outdoor activity, traveling, playing video games
          or listening to music.
        </p>

        <Icons />
      </div>
    </section>
  );
}

export default AboutSection;
