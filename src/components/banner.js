import Typewriter from "typewriter-effect";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

function Banner() {
  return (
    <section className="px-8 container m-auto h-[90vh] sm:max-w-3xl flex flex-col justify-center items-start">
      <h2 className="h-1/2 uppercase flex items-end text-xl">
        {" "}
        hey, i'm vitor manoel. 👋🏼
      </h2>

      <h2 className="h-1/2 text-6xl font-bold uppercase">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delayFor: 750,
            pause: 100,
            strings: [
              "Full Stack Developer",
              "Web Developer",
              "Software Developer",
            ],
          }}
        />
      </h2>

      <p className="text-base list-none flex gap-2">
        Get in touch 👉🏼{" "}
        <Link
          href="mailto:contact@vitormnoel.dev"
          className="hover:text-indigo-500 underline underline-offset-4  duration-300"
        >
          /vitormnoel
        </Link>
      </p>

      <div className="w-full flex justify-center mt-20">
      <IoIosArrowDown size={25} className="hover:animate-bounce"/>
      </div>
    </section>
  );
}

export default Banner;
