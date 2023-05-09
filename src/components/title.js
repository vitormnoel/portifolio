function TitleComponent({ children, ...props }) {
  return (
    <h2 className="capitalize text-3xl font-semibold pb-6" {...props}>{props.title}</h2>
  );
}

export default TitleComponent;
