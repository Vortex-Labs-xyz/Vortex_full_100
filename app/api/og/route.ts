import { NextResponse } from "next/server"

export const runtime = "edge"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get("title") ?? "VortexChain"

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <rect fill="#050505" width="100%" height="100%"/>
      <text x="50%" y="50%" fill="#14b8a6" font-size="48" font-family="Inter, sans-serif" text-anchor="middle" dominant-baseline="middle">${title}</text>
   </svg>`

    return new NextResponse(svg, { headers: { "Content-Type": "image/svg+xml" } })
  } catch (e: any) {
    console.error(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
