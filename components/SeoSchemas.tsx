export default function SeoSchemas() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vortex Group",
    url: "https://vortex.group",
    logo: "https://vortex.group/logo.svg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "info@vortexgroup.xyz",
        contactType: "customer support",
      },
    ],
    address: [
      { "@type": "PostalAddress", addressLocality: "Vaduz", addressCountry: "LI" },
      { "@type": "PostalAddress", addressLocality: "Munich", addressCountry: "DE" },
      { "@type": "PostalAddress", addressLocality: "Singapore", addressCountry: "SG" },
    ],
  }

  const softwareAppSchemaBot = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rust Rocket Bot",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Telegram",
    offers: { "@type": "Offer", price: "0.75", priceCurrency: "SOL" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "88",
    },
  }

  const softwareAppSchemaDex = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Vortex Web DEX",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "102",
    },
  }

  const softwareAppSchemaExtension = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Vortex Chrome Extension",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Chrome",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchemaBot) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchemaDex) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchemaExtension) }}
      />
    </>
  )
}
