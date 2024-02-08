import Link from "next/link";
interface ILinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<ILinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-stone-400 
      sm:text-xl rounded md:p-0 hover:text-orange-600"
    >
      {title}
    </Link>
  );
};

export default NavLink;
