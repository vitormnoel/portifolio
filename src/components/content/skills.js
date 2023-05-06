import { useEffect, useState } from "react";
import skillsIcons from "./data_icons";

function Skills() {
  const [tag, setTag] = useState("all");
  const [filteredIcons, setFilteredIcons] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredIcons(skillsIcons)
      : setFilteredIcons(skillsIcons.filter((icon) => icon.tag === tag));
  }, [tag]);

  return (
    <div className="">
      <div className="flex place-content-around mb-16">
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
      </div>
      <div>
        <ul className="grid grid-cols-2 items-center sm:grid-cols-3 md:grid-cols-4 gap-20">
          {filteredIcons.map((skill) => (
            <li
              key={skill.id}
              className="flex flex-col items-center drop-shadow-lg hover:drop-shadow-md"
            >
              <img className="w-[46px]" src={skill.icon} />

              <p className="text-base text-slate-600 pt-6 capitalize">
                {skill.name}
              </p>
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
      className={
        `font-semibold text-slate-500 ${active ? "bg-stone-100 text-slate-800 duration-500" : null}` +
        " uppercase p-2 rounded-lg"
      }
      onClick={() => {
        handleSetTag(name);
      }}
    >
      {name}
    </button>
  );
};

export default Skills;
