export interface FooterLink {
  name: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { name: "Telegram Bot", href: "/products/bot" },
      { name: "Web DEX", href: "/products/dex" },
      { name: "Chrome Extension", href: "/products/extension" },
      { name: "Launchpad", href: "/products/launchpad" },
      { name: "Leaderboard", href: "/products/leaderboard" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Press Kit", href: "/press" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "MiCA Compliance", href: "/mica" },
    ],
  },
]

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  { name: "Twitter", href: "https://twitter.com/vortexgroup_xyz", icon: "Twitter" },
  { name: "Telegram", href: "https://t.me/vortexgroup", icon: "MessageCircle" },
  { name: "GitHub", href: "https://github.com/vortexgroup", icon: "Github" },
  { name: "LinkedIn", href: "https://linkedin.com/company/vortexgroup", icon: "Linkedin" },
] 