import { FaLinkedinIn, FaGithub, FaFilePdf, FaTelegram } from "react-icons/fa";

function ListIcon({ icon, href, ...props }) {
  function Icon() {
    if (icon == "linkedin") {
      return <FaLinkedinIn size="25" className="hover:text-slate-500 duration-200"/>;
    } else if (icon == "github") {
      return <FaGithub size="25" className="hover:text-slate-500 duration-200"/>;
    } else if (icon == "resume") {
      return <FaFilePdf size="25" className="hover:text-slate-500 duration-200"/>;
    }else if (icon == "telegram") {
      return <FaTelegram size="25" className="hover:text-slate-500 duration-200"/>;
    }
  }

  return (
    <li>
      <a href={href} target="_blank" >{Icon()}</a>
    </li>
  );
}

export default ListIcon;
