import { CheckCircle2, MousePointer2, Terminal } from "lucide-react"

const WarmwindLogo = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
    <path
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
      stroke="#131313"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
      stroke="#131313"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function UniqueFeaturesSection() {
  return (
    <section className="w-full bg-bg pb-20 sm:pb-28">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-4xl font-bold text-text sm:text-5xl">Was uns einzigartig macht</h2>
        <div className="mt-12 rounded-card bg-card shadow-card p-8 sm:p-12">
          <div className="flex flex-col items-center">
            <WarmwindLogo />
            <p className="text-lg font-medium text-text">
              Arbeitet wie ein Mensch mit <MousePointer2 className="inline-block h-5 w-5 mx-1" /> Maus und{" "}
              <Terminal className="inline-block h-5 w-5 mx-1" /> Tastatur
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-textSub">Kann Anwendungen sehen und damit interagieren</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-textSub">Keine Programmierkenntnisse notwendig</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
