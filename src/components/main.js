import Menu from "./menu/menu";

function Main({ children, ...props }) {
  return (
    <>
      <Menu />
      
      <main className="overflow-hidden">{children}</main>
    </>
  );
}

export default Main;
