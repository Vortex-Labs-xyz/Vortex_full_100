import Link from "next/link"
import Image from "next/image"
import { getSortedPostsData, type PostMeta } from "@/lib/blog"
import { ArrowRight } from "lucide-react"

function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative rounded-card bg-card border border-border p-4 transition-shadow duration-300 hover:shadow-card h-full">
        <div className="aspect-video relative overflow-hidden rounded-md mb-4">
          <Image
            src={post.cover || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <p className="text-xs text-textSub mb-2">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3 className="font-bold text-text mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-sm text-textSub line-clamp-3">{post.excerpt}</p>
      </div>
    </Link>
  )
}

export default function LatestPosts() {
  const posts = getSortedPostsData().slice(0, 6)

  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-text mb-12">Unsere neuesten Beiträge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-medium text-text hover:text-textSub transition-colors"
          >
            Alle Beiträge ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
