import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <Image src={""} alt="logo" />
      <nav>
        <Link href="#">Coaching Plans</Link>
        <Link href="#">One Time Plans</Link>
        <Link href="#">About Me</Link>
        <Link href="#">Clients&apos; Reviews</Link>
      </nav>
    </header>
  );
};

export default Navbar;
