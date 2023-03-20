import ListIcon from "../list_icon";

function SideMenu() {
  return (
    <div className="hidden sm:block px-2 bg-white drop-shadow-lg fixed left-3 bottom-[10%] rounded-lg">
      <ul className="py-4 flex flex-row sm:flex-col gap-5 justify-center">
        <ListIcon icon="resume" href="https://drive.google.com/drive/folders/1o-wKfWKNpwvzqsznNa_duCRrYg2E5YD7?usp=sharing"/>
        <ListIcon icon="linkedin" href="https://www.linkedin.com/in/vitormnoel/"/>
        <ListIcon icon="github" href="https://github.com/vitormnoel"/>
      </ul>
    </div>
  );
}

export default SideMenu;
