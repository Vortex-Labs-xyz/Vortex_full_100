import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import FeaturesCardSection from "@/components/sections/features-card-section"
import Ecosystem from "@/components/sections/Ecosystem"
import AlternatingFeatures from "@/components/sections/alternating-features"
import MissionStatement from "@/components/sections/MissionStatement"
import HowToStartRustRocket from "@/components/sections/HowToStartRustRocket"
import LatestPosts from "@/components/sections/LatestPosts"
import Footer from "@/components/layout/footer"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="space-y-sectionY">
        <HeroSection />
        <FeaturesCardSection />
        <AlternatingFeatures />
        <Ecosystem />
        <MissionStatement />
        <HowToStartRustRocket />
        <LatestPosts />
      </main>
      <Footer />
    </>
  )
}
