import { getPostMetaBySlug, getPostWithContentBySlug, getSortedPostsData, getAllPostSlugs } from "@/lib/blog"
import { notFound } from "next/navigation"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { PostCard } from "@/components/PostCard"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllPostSlugs()
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostMetaBySlug(slug)
  if (!post) {
    return notFound()
  }

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vortexgroup.xyz" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://vortexgroup.xyz/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://vortexgroup.xyz/blog/${slug}`,
      },
    ],
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
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

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostWithContentBySlug(slug)
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

  // Simple markdown to HTML conversion for basic formatting
  const formatContent = (content: string) => {
    return content
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^\*\*(.*)\*\*$/gm, '<strong>$1</strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/^\* (.*$)/gm, '<li>$1</li>')
      .replace(/^- (.*$)/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<[h|u|l])/gm, '<p>')
      .replace(/(?<!>)$/gm, '</p>')
      .replace(/<p><\/p>/g, '')
      .replace(/<p>(<[h|u])/g, '$1')
      .replace(/(<\/[h|u]>)<\/p>/g, '$1')
  }

  return (
    <>
      <Header />
      <main className="bg-bg pt-24 sm:pt-32">
        <article>
          <header className="container mx-auto max-w-3xl px-4 text-center py-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4 font-inter">VortexGroup Insights</p>
            <h1 className="text-hero">{post.title}</h1>
            <p className="mt-6 text-textSub text-lg font-inter">{formattedDate}</p>
          </header>

          <div className="container mx-auto max-w-5xl px-4">
            <div className="relative aspect-video overflow-hidden rounded-card border border-border">
              <Image src={post.cover || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>
          </div>

          <div className="blog-content mx-auto max-w-3xl px-4 py-16">
            <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
          </div>
        </article>

        <section className="bg-bgSubtle py-16 sm:py-24 border-t border-border">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-center text-display mb-12">Related Posts</h2>
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
