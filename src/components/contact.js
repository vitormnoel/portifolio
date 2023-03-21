import Section from "./section";
import TitleComponent from "./title";

function Contact() {
    return(
        <Section id="contact">
            <TitleComponent className="capitalize text-2xl font-semibold pb-6 text-center" title="get in touch"/>
        </Section>
    )
}

export default Contact;