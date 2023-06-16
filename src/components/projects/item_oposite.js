import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function CardItemOp(props) {
  return (
    <Fragment>
      <div>
        <div className="overflow-hidden rounded">
        <Image
          src={"/" + props.project.image}
          width="0"
          height="0"
          sizes="100vw"
          alt="a"
          key={10}
          className="hover:scale-105 duration-300 xl:w-1/2 xl:max-w-[25vw]"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        </div>
        <ul className="grid grid-cols-3 text-center gap-2 mt-4 text-sm justify-center">
          {props.project.tags.map((item) => (
            <li
              className="mr-4 bg-slate-200/80 p-2 rounded-md font-medium cursor-pointer text-slate-600"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-1/2">
        <h4 className="mb-4 font-semibold text-2xl text-slate-700">
          {props.project.title}
        </h4>

        <p>{props.project.description}</p>

        <div className="m-6 flex gap-10 justify-center">
          <Link href={props.project.github} target="blank">
            <FaGithub
              size="35"
              className="hover:text-purple-mid duration-300"
            />
          </Link>
          <Link href={props.project.preview} target="blank">
            <div className="font-semibold flex items-center gap-1 my-18 text-base text-purple-mid py-1 px-4 border-2 border-purple-mid rounded-md hover:bg-purple-mid hover:text-white duration-300 cursor-pointer">
              <p>Preview</p>
              <FiArrowUpRight size="20" />
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default CardItemOp;
