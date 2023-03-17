import Typewriter from "typewriter-effect";

function Banner() {
  return (
    <section className="container m-auto h-[95vh] sm:max-w-3xl justify-center items-start text-xl flex flex-col">
      <div className="uppercase p-8">
        <h2>
          hey, i am <span>vitor manoel</span>
        </h2>
        <h2 className="text-6xl font-bold">full stack developer</h2>
        {/* <h2 className="text-6xl font-bold">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delayFor: 750,
              pause: 100,
              strings: [
                "Full Stack Developer",
                "Front End Developer",
                "Software Developer",
              ],
            }}
          />
        </h2> */}
      </div>
    </section>
  );
}

export default Banner;
