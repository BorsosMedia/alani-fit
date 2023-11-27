import Image from "next/image";
import Link from "next/link";

import logo from "../public/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image src={logo} alt="logo" className="h-auto w-24" />
      <Link href="#coaching">Coaching Plans</Link>
      <Link href="#one-time">One Time Plans</Link>
      <Link href="#about">About Me</Link>
      <Link href="#reviews">Clients&apos; Reviews</Link>
    </nav>
  );
};

export default Navbar;
