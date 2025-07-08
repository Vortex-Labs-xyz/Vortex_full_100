import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FaqSection from "@/components/sections/FaqSection"
import { productMeta } from "@/lib/seo"
import { products } from "@/lib/products-config"
import { faqData } from "@/lib/faq-config"

type ProductSlug = keyof typeof productMeta

export async function generateStaticParams() {
  // Filter out products that don't have a dedicated page, like the leaderboard.
  const pageProducts = products.filter((p) => p.href.startsWith("/products/"))
  return pageProducts.map((p) => ({
    slug: p.id,
  }))
}

export async function generateMetadata({ params }: { params: { slug: ProductSlug } }): Promise<Metadata> {
  const slug = params.slug
  if (!productMeta[slug]) {
    return notFound()
  }

  const meta = productMeta[slug]
  return {
    title: meta.title,
    description: meta.desc,
    alternates: {
      canonical: `/products/${slug}`,
    },
  }
}

export default function ProductPage({ params }: { params: { slug: ProductSlug } }) {
  const slug = params.slug
  const product = products.find((p) => p.id === slug)
  const faqs = faqData[slug] || []

  if (!product) {
    return notFound()
  }

  return (
    <>
      <Header />
      <main className="bg-bg pt-24 sm:pt-32">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-text leading-tight">{product.title}</h1>
                <p className="mt-4 text-lg text-textSub">{product.subtitle}</p>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block rounded-lg bg-text px-6 py-3 font-medium text-white transition-colors hover:bg-text/80"
                >
                  {product.ctaText}
                </a>
              </div>
              <div className="aspect-square relative rounded-xl bg-card border border-border p-8">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.alt || `${product.title} interface`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        <FaqSection items={faqs} />
      </main>
      <Footer />
    </>
  )
}
