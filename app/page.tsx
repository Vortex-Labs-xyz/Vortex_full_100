import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import CoreAdvantages from "@/components/sections/CoreAdvantages"
import Ecosystem from "@/components/sections/Ecosystem"
import AlternatingFeatures from "@/components/sections/alternating-features"
import MissionStatement from "@/components/sections/MissionStatement"
import LatestPosts from "@/components/sections/LatestPosts"
import Footer from "@/components/layout/footer"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="space-y-sectionY">
        <HeroSection />
        <CoreAdvantages />
        <AlternatingFeatures />
        <Ecosystem />
        <MissionStatement />
        <LatestPosts />
      </main>
      <Footer />
    </>
  )
}
