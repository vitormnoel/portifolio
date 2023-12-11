import ListIcon from "./list_icon";

function Icons() {
  return (
    <ul className="pt-12 flex flex-row sm:gap-5 gap-10 justify-center">
      
      <ListIcon
        icon="email"
        href="mailto:contact@vitormnoel.dev"
      />
      <ListIcon
        icon="linkedin"
        href="https://www.linkedin.com/in/vitormnoel/"
      />
      <ListIcon icon="github" href="https://github.com/vitormnoel" />
      <ListIcon
        icon="telegram"
        href="https://t.me/vitormnoel"
      />
      
    </ul>
  );
}

export default Icons;
