import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/meals">Meals</Link>
      <Link href="/meals/share">Share meal</Link>
      <Link href="/community">Community</Link>
    </footer>
  )
}