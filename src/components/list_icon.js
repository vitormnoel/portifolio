import { FaGithub, FaTelegram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";

function ListIcon({ icon, href, ...props }) {
  function Icon() {
    if (icon == "linkedin") {
      return <GrLinkedinOption size="32" />;
    } else if (icon == "github") {
      return <FaGithub size="32" />;
    } else if (icon == "telegram") {
      return <FaTelegram size="32" />;
    } else if (icon == "email") {
      return <MdOutlineAlternateEmail size="32" />;
    }
  }

  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="hover:text-purple-mid duration-300"
      >
        {Icon()}
      </a>
    </li>
  );
}

export default ListIcon;
