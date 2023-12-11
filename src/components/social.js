import { FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Social() {
  return (
    <div className="my-16 flex gap-10 flex-col sm:flex-row items-center justify-center">
      <a
        href="mailto:contact@vitormnoel.dev"
        target="_blank"
        className="flex gap-2 items-center justify-center w-[240px] rounded-lg border-2 border-purple-mid text-purple-mid p-5 hover:text-white hover:bg-purple-mid duration-300"
      >
        <HiOutlineMail size="20"/>
        <p>contact@vitormnoel.dev</p>
      </a>
      <a
        href="https://t.me/vitormnoel"
        target="_blank"
        className="flex gap-2 items-center justify-center w-[240px] rounded-lg border-2 border-sky-500 hover:border-white text-sky-600 p-5 hover:text-white hover:bg-gradient-to-r to-sky-500 via-blue-400 from-indigo-500 duration-300"
      >
        <FaTelegram size="20" />
        <p>vitormnoel</p>
      </a>
    </div>
  );
}

export default Social;
