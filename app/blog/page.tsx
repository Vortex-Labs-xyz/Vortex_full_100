import Link from "next/link"
import Image from "next/image"
import { getSortedPostsData, type PostMeta } from "@/lib/blog"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative rounded-card bg-card border border-white/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden rounded-md mb-4">
          <Image
            src={post.cover || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <p className="text-xs text-textSub mb-2 font-inter">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3 className="font-bold text-text mb-2 line-clamp-2 font-lexend">{post.title}</h3>
        <p className="text-sm text-textSub line-clamp-3 flex-grow font-inter">{post.excerpt}</p>
      </div>
    </Link>
  )
}

export default function BlogIndexPage() {
  const allPosts = getSortedPostsData()

  return (
    <>
      <Header />
      <main className="bg-bg pt-24 sm:pt-32">
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-display mb-4">Blog</h1>
          <p className="text-body-large mb-12">Insights, news, and technical deep dives from the VortexGroup team.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
