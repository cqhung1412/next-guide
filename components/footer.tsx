import Image from "next/image";
import Link from "next/link";

export default function Footer(props: any) {
  return (
    <footer className={props.className}>
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
      <Link href="/blog">
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Our blogs
      </Link>
    </footer>
  )
}