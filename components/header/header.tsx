import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./header.module.css";
import HeaderBackground from "./header-background";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="logo" priority />
          NextLevel Foodies
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
