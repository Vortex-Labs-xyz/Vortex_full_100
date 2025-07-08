import { NextResponse } from "next/server"

export async function GET() {
  // In a real application, this would fetch data from a database or a real-time API.
  const stats = {
    trades24h: 1_234_567,
    volume24h: 87_654_321,
    hitRate: 98.7,
  }

  return NextResponse.json(stats)
}
