import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Container({ imagePath, title, tech, links, ...props }) {
  function Links() {
    if (links === "both") {
      return (
        <div className="flex items-center gap-4">
          <a href={props.link} target="blank">
            <div className="font-semibold flex items-center gap-1 my-18 text-base text-purple-mid py-1 px-4 border-2 border-purple-mid rounded-md hover:bg-purple-mid hover:text-white duration-300 cursor-pointer">
              <p>view</p>
              <FiArrowUpRight size="20" />
            </div>
          </a>
          <a href={props.git} target="blank">
            <FaGithub
              size="35"
              className="hover:text-purple-mid duration-300"
            />
          </a>
        </div>
      );
    } else if (links === "web") {
      return (
        <div className="font-semibold flex items-center gap-1 my-18 text-base text-purple-mid py-1 px-4 border-2 border-purple-mid rounded-md hover:bg-purple-mid hover:text-white duration-300 cursor-pointer">
          <a href={props.link} target="blank">
            view
          </a>
          <FiArrowUpRight size="20" />
        </div>
      );
    } else if (links === "git") {
      return (
        <div className="font-semibold flex items-center my-18 cursor-pointer">
          <a href={props.git} target="blank">
            <FaGithub
              size="35"
              className="hover:text-purple-mid duration-300"
            />
          </a>
        </div>
      );
    }
  }

  return (
    <div className="overflow-hidden p-2 flex flex-col items-center">
      <div className="h-[100%] flex ">
        <Image
          src={imagePath}
          width={1000}
          height={1000}
          alt={props.alt}
          className="rounded-xl"
        />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="pt-2 text-center text-base font-medium">{title}</h3>
        <div className="capitalize flex gap-2 justify-center my-4 text-sm">
          {tech.map((item) => (
            <p
              className="font-medium px-4 py-1 text-slate-700 bg-purple-mid/10 rounded"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
        {Links()}
      </div>
    </div>
  );
}

export default Container;
