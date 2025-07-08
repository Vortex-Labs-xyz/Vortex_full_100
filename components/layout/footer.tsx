const VortexLogo = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2 text-textSub"
  >
    <path
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-bgSubtle border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center text-xs text-textSub">
            <VortexLogo />
            <span>© 2025 VORTEX GROUP // ALPHA GENERATION SYSTEMS</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-textSub">
            <a href="mailto:info@vortexgroup.xyz" className="hover:text-accent transition-colors">
              info@vortexgroup.xyz
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
