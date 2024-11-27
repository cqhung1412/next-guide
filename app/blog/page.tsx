import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h1>The Blog</h1>
      <ol>
        <li><Link href="/blog/blog-1">Blog 1</Link></li>
        <li><Link href="/blog/blog-2">Blog 2</Link></li>
      </ol>
    </div>
  )
}