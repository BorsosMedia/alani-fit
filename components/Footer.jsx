import Image from "next/image";
import Link from "next/link";

import instagram from "../public/assets/instagram.png";
import logo from "../public/assets/logo.png";
import tiktok from "../public/assets/tik-tok.png";
import youtube from "../public/assets/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Image src={logo} alt="Logo" className="h-32 w-auto" />
      <section className="flex-row-center container mx-auto w-full">
        <div className="footer-separator" />
        <div className="flex-row-center min-w-fit">
          <a
            href="https://www.instagram.com/alanixfit/"
            target="_blank"
            rel="noopenner noreferrer nofollow"
          >
            <Image
              src={instagram}
              alt="Instagram"
              className="social-icon-footer"
            />
          </a>
          <a
            href="https://www.tiktok.com/@alanixfit"
            target="_blank"
            rel="noopenner noreferrer nofollow"
          >
            <Image src={tiktok} alt="TikTok" className="social-icon-footer" />
          </a>
          <a
            href="https://www.youtube.com/@AlaniXFit"
            target="_blank"
            rel="noopenner noreferrer nofollow"
          >
            <Image src={youtube} alt="YouTube" className="social-icon-footer" />
          </a>
        </div>
        <div className="footer-separator" />
      </section>
      <section className="flex-col-center gap-4">
        <Link
          href="https://training.alanixfitcoaching.com/legal-and-privacy-policy"
          target="_blank"
          className="underline"
        >
          Legal and Privacy Policy
        </Link>
        <p className="md:hidden">
          Copyright © {new Date().getFullYear()} Alani X Fit LLC - All Rights
          Reserved
          <br />
          Website Developed and Designed by{" "}
          <a
            href="https://www.borsosmedia.com/"
            target="_blank"
            className="underline"
          >
            Borsos Media
          </a>
        </p>
        <p className="hidden md:block">
          Copyright © {new Date().getFullYear()} Alani X Fit LLC - All Rights
          Reserved / Website Developed and Designed by{" "}
          <a
            href="https://www.borsosmedia.com/"
            target="_blank"
            className="underline"
          >
            Borsos Media
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
