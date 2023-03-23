import ListIcon from "./list_icon";

function Icons() {
  return (
    <ul className="py-4 flex flex-row sm:flex-col sm:gap-5 gap-10 justify-center">
      <ListIcon
        icon="resume"
        href="https://drive.google.com/file/d/1-xa0EdFRJnIBhaGe6CTDiRaZe3a8Ew8J/view?usp=sharing"
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
