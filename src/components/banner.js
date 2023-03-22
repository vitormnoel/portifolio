import Typewriter from "typewriter-effect";

function Banner() {
  return (
    <section className="uppercase px-8 container m-auto h-[95vh] sm:max-w-3xl justify-center items-start text-xl flex flex-col">
      <h2 className="h-1/2 flex items-end">👋🏼 hey, i'm vitor.</h2>
      {/* <h2 className="text-6xl font-bold">full stack developer</h2> */}
      <h2 className="h-1/2 text-6xl font-bold">
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
    </section>
  );
}

export default Banner;
