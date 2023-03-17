import { useEffect, useState } from "react";
import skillsIcons from "./data_icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  const [tag, setTag] = useState("all");
  const [filteredIcons, setFilteredIcons] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();

    tag === "all"
      ? setFilteredIcons(skillsIcons)
      : setFilteredIcons(skillsIcons.filter((icon) => icon.tag === tag));
  }, [tag]);

  return (
    <div className="">
      <div className="flex place-content-around mb-10">
        <TagButton
          name="all"
          handleSetTag={setTag}
          active={tag === "all" ? true : false}
        />
        <TagButton
          name="front-end"
          handleSetTag={setTag}
          active={tag === "front-end" ? true : false}
        />
        <TagButton
          name="back-end"
          handleSetTag={setTag}
          active={tag === "back-end" ? true : false}
        />
        <TagButton
          name="prototype"
          handleSetTag={setTag}
          active={tag === "prototype" ? true : false}
        />
      </div>
      <div>
        <ul className="grid grid-cols-3 items-center md:grid-cols-4 gap-20">
          {filteredIcons.map((skill) => (
            <li key={skill.id} className="flex flex-col items-center" data-aos="zoom-in">
              {skill.icon}
              <p className="text-base pt-2 capitalize">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, active }) => {
  return (
    <button
      className={`${active ? "bg-slate-200 font-semibold duration-500" : null}` + " uppercase p-2 rounded-lg "}
      onClick={() => {
        handleSetTag(name);
      }}
    >
      {name}
    </button>
  );
};

export default Skills;
