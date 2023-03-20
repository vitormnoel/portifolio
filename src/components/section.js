import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Section({ children, fade , ...props}) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  });
    return (
      <section data-aos={fade} className="overflow-hidden container pt-28 m-auto px-8 lg:max-w-3xl" id={props.id}>
          {children}
      </section>
    )
  }
  
  export default Section;