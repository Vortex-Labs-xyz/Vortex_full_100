import { NextResponse } from "next/server"
import { getSortedPostsData } from "@/lib/blog"

export async function GET() {
  const posts = getSortedPostsData()

  const items = posts
    .map((p) => {
      return `
     <item>
       <title><![CDATA[${p.title}]]></title>
       <link>https://vortexchain.xyz/blog/${p.slug}</link>
       <guid>https://vortexchain.xyz/blog/${p.slug}</guid>
       <pubDate>${new Date(p.date).toUTCString()}</pubDate>
       <description><![CDATA[${p.excerpt}]]></description>
     </item>`
    })
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>VortexChain Blog</title>
    <link>https://vortexchain.xyz/blog</link>
    <description>Latency, MEV & Non-Custody Insights</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
    <atom:link href="https://vortexchain.xyz/api/rss" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
