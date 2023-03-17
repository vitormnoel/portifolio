import Menu from "./menu/menu";

function Main({ children, ...props }) {
  return (
    <>
      <Menu />
      
      <main>{children}</main>
    </>
  );
}

export default Main;
