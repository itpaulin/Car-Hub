import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col border-t border-gray-100 text-black-100">
      <div className="flex flex-wrap items-start justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image
            src="/logo.svg"
            alt="footer logo"
            className="object-contain"
            width={118}
            height={18}
          />
          <p className="text-base capitalize text-gray-700 ">
            CarHub 2024 <br />- All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((item, index) => (
            <div className="footer__link" key={index}>
              <h3 className="font-bold">{item.title}</h3>
              {item.links.map((link, index) => (
                <Link key={index} href={link.url} className="text-gray-500">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-end justify-between gap-10 border-t border-gray-100 px-6 py-10 md:gap-0 md:px-16 ">
        <p className="sm:text-wrap ">@2024 CarHub All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
