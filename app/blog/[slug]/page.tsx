export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </div>
  )
}