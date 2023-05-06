import { useState } from "react";

import Link from "../link";

function MobileNav() {
  //false because it's not open
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end items-center md:hidden">
      <MobileNavBar open={open} setOpen={setOpen} />

      <div
        className="group z-50 relative w-6 h-6 cursor-pointer flex-col justify-between items-center flex"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span
          className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
            open ? "w-0" : "w-full"
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
            open ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></span>
      </div>
    </div>
  );
}

//mobile
function MobileNavBar({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 bottom-0 right-0 bg-white w-screen h-screen text-center transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter`}
    >
        <nav className="text-base uppercase mt-32">
          <ul className="flex flex-col justify-center itens-center gap-10">
            <Link href="#about">about</Link>
            <Link href="#skills">skills</Link>
            <Link href="#projects">projects</Link>
            <Link href="#contact">contact</Link>
          </ul>
        </nav>
    </div>
  );
}

export default MobileNav;
