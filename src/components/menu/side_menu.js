import Icons from "../icons";
import ListIcon from "../list_icon";

function SideMenu() {
  return (
    <div className="hidden sm:block px-2 bg-white drop-shadow-lg fixed left-3 bottom-[10%] rounded-lg">
      <Icons/>
    </div>
  );
}

export default SideMenu;
