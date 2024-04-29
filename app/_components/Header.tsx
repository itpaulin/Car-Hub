"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="absolute z-10 w-full">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-16">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Button
          label="Sign In"
          sx="text-primary-blue bg-white rounded-full min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Header;
