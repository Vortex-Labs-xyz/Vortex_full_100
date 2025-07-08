import Image from "next/image"

const VortexChainLogo = () => (
  <Image
    src="/vortex-chain-logo.png"
    alt="VortexChain Logo"
    width={24}
    height={24}
    className="mr-2 rounded-full"
  />
)

export default function Footer() {
  return (
    <footer className="bg-bgSubtle border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center text-xs text-textSub">
            <VortexChainLogo />
            <span>© 2025 VORTEXCHAIN GROUP // ALPHA GENERATION SYSTEMS</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-textSub">
            <a href="mailto:info@vortexchain.xyz" className="hover:text-accent transition-colors">
              info@vortexchain.xyz
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Docs
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Compliance
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
