"use client"

import { useEffect, useRef } from "react"
import { features } from "@/lib/constants"
import { CardCustom } from "@/components/ui/card-custom"
import { Section } from "@/components/ui/section"
import { Heading } from "@/components/ui/heading"

export default function FeaturesSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fadeInUp")
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Section background="default" size="large">
      <div className="mx-auto max-w-2xl lg:text-center">
        <Heading as="h2" align="center" className="animate-fadeInUp">
          Alles, was Sie für eine autonome Belegschaft brauchen
        </Heading>
        <p className="mt-6 text-lg leading-8 text-textSub animate-fadeInUp animation-delay-100">
          Unsere Cloud-Mitarbeiter integrieren sich nahtlos in Ihre bestehenden Workflows und übernehmen
          wiederkehrende Aufgaben, damit Sie sich auf das Wesentliche konzentrieren können.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg gap-10 lg:max-w-none md:grid-cols-2">
        {features.map((feature, index) => (
          <CardCustom
            key={feature.title}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className="opacity-0 flex flex-col"
          >
            <h3 className="mb-4 text-xl font-semibold text-text">{feature.title}</h3>
            <p className="text-textSub flex-grow">{feature.text}</p>
          </CardCustom>
        ))}
      </div>
    </Section>
  )
}
