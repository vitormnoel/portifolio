import { FaTelegram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

function Social() {
  return (
    <div className="my-16 flex gap-10 flex-col sm:flex-row items-center justify-center">
      <a
        href="mailto:hello@vitormnoel.dev"
        className="flex gap-2 items-center justify-center w-[220px] rounded-lg border-2 border-orange-300 text-orange-400 p-5 hover:text-white hover:bg-orange-300 duration-300"
      >
        <MdAlternateEmail size="20"/>
        <p>hello@vitormnoel.dev</p>
      </a>
      <a
        href="https://t.me/vitormnoel"
        className="flex gap-2 items-center justify-center w-[220px] rounded-lg border-2 border-sky-500 text-sky-600 p-5 hover:text-white hover:bg-sky-500 duration-300"
      >
        <FaTelegram size="20" />
        <p>vitormnoel</p>
      </a>
    </div>
  );
}

export default Social;
