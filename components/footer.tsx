import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/about">
        <Image
          aria-hidden
          src="/vercel.svg"
          alt="Vercel icon"
          width={16}
          height={16}
        />
        About us
      </Link>
      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
    </footer>
  )
}