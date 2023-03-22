import ListIcon from "./list_icon";

function Icons() {
  return (
    <ul className="py-4 flex flex-row sm:flex-col sm:gap-5 gap-10 justify-center">
      <ListIcon
        icon="resume"
        href="https://drive.google.com/drive/folders/1o-wKfWKNpwvzqsznNa_duCRrYg2E5YD7?usp=sharing"
      />
      <ListIcon
        icon="linkedin"
        href="https://www.linkedin.com/in/vitormnoel/"
      />
      <ListIcon icon="github" href="https://github.com/vitormnoel" />
    </ul>
  );
}

export default Icons;
