function Section({ children , ...props}) {
    return (
      <section className="container m-auto p-8 lg:max-w-3xl" id={props.id}>
          {children}
      </section>
    )
  }
  
  export default Section;