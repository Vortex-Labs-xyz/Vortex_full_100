import { getPostMetaBySlug, getSortedPostsData, getAllPostSlugs } from "@/lib/blog"
import { notFound } from "next/navigation"
import dynamic from "next/dynamic"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { PostCard } from "@/components/PostCard"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllPostSlugs()
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostMetaBySlug(params.slug)
  if (!post) {
    return notFound()
  }

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vortex.group" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://vortex.group/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://vortex.group/blog/${params.slug}`,
      },
    ],
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [`/api/og?title=${encodeURIComponent(post.title)}`],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      images: [`/api/og?title=${encodeURIComponent(post.title)}`],
    },
    other: {
      breadcrumbs: JSON.stringify(breadcrumbs),
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostMetaBySlug(params.slug)
  if (!post) {
    return notFound()
  }

  const allPosts = getSortedPostsData()
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const PostContent = dynamic(() => import(`@/content/blog/${params.slug}.mdx`))

  return (
    <>
      <Header />
      <main className="bg-bg pt-24 sm:pt-32">
        <article>
          <header className="container mx-auto max-w-3xl px-4 text-center py-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Vortex Insights</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">{post.title}</h1>
            <p className="mt-4 text-textSub">{formattedDate}</p>
          </header>

          <div className="container mx-auto max-w-5xl px-4">
            <div className="relative aspect-video overflow-hidden rounded-card border border-border">
              <Image src={post.cover || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>
          </div>

          <div className="prose prose-invert prose-lg mx-auto max-w-3xl px-4 py-16 prose-headings:text-text prose-a:text-accent hover:prose-a:text-accent/80 prose-strong:text-text">
            <PostContent />
          </div>
        </article>

        <section className="bg-bgSubtle py-16 sm:py-24 border-t border-border">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold text-text mb-12">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
