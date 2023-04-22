import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/events" passHref>
          Events
        </Link>
        <Link href="/about" passHref>
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
