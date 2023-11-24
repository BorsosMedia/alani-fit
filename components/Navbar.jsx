import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image src={""} alt="logo" />
      <Link href="#coaching">Coaching Plans</Link>
      <Link href="#one-time">One Time Plans</Link>
      <Link href="#">About Me</Link>
      <Link href="#">Clients&apos; Reviews</Link>
    </nav>
  );
};

export default Navbar;
