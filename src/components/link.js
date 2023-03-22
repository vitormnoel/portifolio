import Link from "next/link";

function LinkItem({ href, children }) {
  return (
    <li>
      <Link href={href} className="hover:text-purple-mid">{children}</Link>
    </li>
  );
}

export default LinkItem;
