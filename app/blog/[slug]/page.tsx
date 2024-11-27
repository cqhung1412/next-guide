export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  return (
    <div>
      <h1>Blog Post</h1>
      <p>{slug}</p>
    </div>
  )
}