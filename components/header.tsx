import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <Image src="/logo-light.png" alt="logo" width={64} height={64} />
      <h1>Welcome to Big Bear City</h1> */}
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="logo" priority />
        NextLevel Foodies
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/meals">Browse meal</Link></li>
          {/* <li><Link href="/meals/share">Share a meal</Link></li> */}
          <li><Link href="/community">Foodies community</Link></li>
        </ul>
      </nav>
    </header>
  )
}