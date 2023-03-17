import Link from "../link";
import SideMenu from "./side_menu";

function Menu() {
  const TITLE = "(vitormnoel);";
  return (
    <>
      <header className="flex items-center text-slate-600 font-medium place-content-around pt-8 pb-2 fixed top-0 w-[100vw] z-50 bg-white drop-shadow-sm">
        <h1 className="text-lg">{TITLE}</h1>

        <nav className="text-base uppercase hidden md:block">
          <ul className="flex gap-10">
            <Link href="/">about</Link>
            <Link href="/">skills</Link>
            <Link href="/">work</Link>
            <Link href="/">contact</Link>
          </ul>
        </nav>

        <div className="grid grid-cols-2 hidden">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <SideMenu/>
    </>
  );
}

export default Menu;
