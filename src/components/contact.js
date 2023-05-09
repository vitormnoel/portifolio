import Social from "./social";
import TitleComponent from "./title";

function Contact() {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    // console.log(formData);

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });

    cancelCourse();
    Alert();
  }

  function cancelCourse() {
    document.getElementById("form1").reset();
  }

  function Alert() {
    return window.alert(
      "Thank you for your message! I will get back to you as soon as possible."
    );
  }

  return (
    <section id="contact" className="pt-28 container m-auto w-[90%] md:w-1/2">
      <TitleComponent
        className="capitalize text-2xl font-semibold pb-6 text-center"
        title="get in touch"
      />

      <Social />

      <p className="text-center text-base text-slate-600">
        or 
      </p>

      <form
        method="POST"
        onSubmit={handleOnSubmit}
        id="form1"
        className="flex flex-col items-center mb-20 text-slate-700"
      >
        <input
          className="w-full pl-4 py-2 mt-8 bg-zinc-100 rounded-md focus:outline-none hover:border-purple-light hover:ring-1 hover:ring-purple-mid focus:border-purple-mid focus:ring-2 focus:ring-purple-mid"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="w-full pl-4 py-2 mt-8 bg-zinc-100 rounded-md focus:outline-none hover:border-purple-light hover:ring-1 hover:ring-purple-mid focus:border-purple-mid focus:ring-2 focus:ring-purple-mid"
          type="email"
          name="email"
          required
          placeholder="Your E-mail *"
        />
        <textarea
          className="w-full pl-4 py-2 mt-8 bg-zinc-100 rounded-md focus:outline-none hover:border-purple-light hover:ring-1 hover:ring-purple-mid focus:border-purple-mid focus:ring-2 focus:ring-purple-mid"
          name="message"
          required
          placeholder="Your Message *"
          rows="5"
        ></textarea>
        <button className="mt-8 capitalize hover:bg-purple-mid/95 bg-purple-mid w-1/2 sm:w-1/3 py-2 px-4 rounded-md text-white hover:bg-purple-dark">
          send message
        </button>
      </form>
    </section>
  );
}

export default Contact;
