import { FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";
import { BsFiletypePdf } from "react-icons/bs";

function ListIcon({ icon, href, ...props }) {
  function Icon() {
    if (icon == "linkedin") {
      return <FaLinkedinIn size="25"/>;
    } else if (icon == "github") {
      return <FaGithub size="25"/>;
    } else if (icon == "resume") {
      return <BsFiletypePdf size="25"/>;
    }else if (icon == "telegram") {
      return <FaTelegram size="25"/>;
    }
  }

  return (
    <li>
      <a href={href} target="_blank" className="hover:text-purple-mid duration-300" >{Icon()}</a>
    </li>
  );
}

export default ListIcon;