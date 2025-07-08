import Image from "next/image"

export default function AppIconsSection() {
  return (
    <section className="w-full bg-bg py-20 sm:py-28">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-4xl font-bold text-text sm:text-5xl">Der erste Cloud-Mitarbeiter</h2>
        <p className="mt-4 text-lg text-textSub">Nutzt alle deine Apps für dich.</p>
        <div className="mt-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bildschirmfoto%202025-07-05%20um%2014.20.33-zR9ubYQOwfRlv7ZIm2HRsY6JqMhf25.png"
            alt="Eine Leiste mit vielen Anwendungs-Icons wie WhatsApp, Instagram, LinkedIn, Gmail, Teams und SAP"
            width={800}
            height={80}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
