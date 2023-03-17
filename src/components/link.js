import Link from "next/link";

function LinkItem({ href, children }) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default LinkItem;
