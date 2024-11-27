import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image src="/logo-light.png" alt="logo" width={64} height={64} />
      <h1>Welcome to Big Bear City</h1>
    </header>
  )
}