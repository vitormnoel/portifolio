import Link from "../link";
import MobileNav from "./mobile_menu";
import SideMenu from "./side_menu";

function Menu() {
  const TITLE = "(vitormnoel);";

  return (
    <>
      <header className="flex items-center text-slate-700 font-medium place-content-around pt-8 pb-2 fixed top-0 w-[100vw] z-50 bg-white drop-shadow-sm">
        <h1 className="text-lg">{TITLE}</h1>

        <nav className="text-base uppercase hidden md:block">
          <ul className="flex gap-10">
            <Link href="#about">about</Link>
            <Link href="#skills">skills</Link>
            <Link href="#work">work</Link>
            <Link href="#contact">contact</Link>
          </ul>
        </nav>

        {/* TO DO */}
        {/* <MobileNav /> */}
      </header>
    </>
  );
}

export default Menu;
