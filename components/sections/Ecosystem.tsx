export default function Ecosystem() {
  const logos = ["solana", "raydium", "orca", "jito", "bloxroute", "turnkey", "helius", "phantom"]

  return (
    <section id="ecosystem" className="py-16 bg-bg sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl font-bold text-text sm:text-3xl lg:text-4xl">
            Built on a proven, high-performance ecosystem
          </h2>
          <p className="mt-3 text-base text-textSub sm:mt-4 sm:text-lg">
            From execution speed to non-custodial security – every layer is battle-tested.
          </p>
        </div>
        <div className="mx-auto max-w-5xl grid grid-cols-4 gap-8 justify-items-center items-center md:grid-cols-8">
          {logos.map((name) => (
            <img
              key={name}
              src={`/icons/${name}.svg`}
              alt={`${name} logo`}
              className="h-8 w-auto transition sm:h-10"
              style={{
                filter: "grayscale(1) invert(1) brightness(0.7) contrast(2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
