import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  items: FaqItem[]
}

function FaqPageSchema({ items }: FaqSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

export default function FaqSection({ items }: FaqSectionProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <section className="bg-bgSubtle py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-center text-3xl font-bold text-text mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-text">{item.question}</AccordionTrigger>
              <AccordionContent className="text-textSub text-base leading-relaxed">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <FaqPageSchema items={items} />
    </section>
  )
}
