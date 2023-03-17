import ListIcon from "../list_icon";

function SideMenu() {
  return (
    <div className="px-2 bg-white drop-shadow-lg fixed sm:left-5 left-[50%] bottom-[10%] rounded-lg">
      <ul className="py-4 flex flex-row sm:flex-col gap-5 justify-center">
        <ListIcon icon="resume" />
        <ListIcon icon="linkedin" />
        <ListIcon icon="github" />
        <ListIcon icon="telegram" />
      </ul>
    </div>
  );
}

export default SideMenu;
