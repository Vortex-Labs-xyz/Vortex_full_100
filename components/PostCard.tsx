import Image from "next/image"
import Link from "next/link"
import type { PostMeta } from "@/lib/blog"

export function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative block h-full rounded-card bg-card border border-white/10 p-4 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="absolute -inset-px rounded-card bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex flex-col h-full">
        <div className="aspect-video relative overflow-hidden rounded-md mb-4">
          <Image
            src={post.cover || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <p className="text-xs text-textSub mb-2 font-inter">{formattedDate}</p>
        <h3 className="font-bold text-text mb-2 leading-snug line-clamp-2 font-lexend">{post.title}</h3>
        <p className="text-sm text-textSub leading-relaxed line-clamp-3 flex-grow font-inter">{post.excerpt}</p>
      </div>
    </Link>
  )
}
