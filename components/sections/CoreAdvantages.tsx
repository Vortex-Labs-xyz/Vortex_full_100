import { Zap, KeyRound, Bot, ShieldCheck } from "lucide-react"
import { Section } from "@/components/ui/section"
import { CardWithNotches } from "@/components/ui/card-with-notches"

const items = [
  {
    icon: Zap, 
    title: "<0.4 s Execution direkt im Block", 
    text: "Unsere Rust-Engine pusht deine Transaktion mit Jito-Bundle-Technologie direkt zum Leader – schneller als alle Standard-Bots."
  },
  {
    icon: KeyRound, 
    title: "MPC-Wallet in Sekunden – kein Seed", 
    text: "Non-custodial Wallet startet automatisch. Sicher, anonym, MiCA-fähig – sofort in Telegram nutzbar."
  },
  {
    icon: Bot, 
    title: "Copy-Trading in Telegram 24/7", 
    text: "Folge den profitabelsten Wallets live und gas-optimiert. Kein Interface, kein Login – volle Automatisierung."
  },
  {
    icon: ShieldCheck, 
    title: "Maximale Sicherheit, echte Strukturen", 
    text: "Gehostet in Europa, betrieben von Profis aus Deutschland & Liechtenstein. Kein Shadow-Team, kein Rug."
  },
]

export default function CoreAdvantages() {
  return (
    <Section id="advantages" size="default" background="default">
      <CardWithNotches className="max-w-[960px] mx-auto px-12 py-10">
        <ul className="divide-y divide-border">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 py-6 first:pt-0 last:pb-0">
              <Icon className="text-accent flex-shrink-0 mt-1" size={22} />
              <div className="space-y-1">
                <h3 className="font-medium text-text">{title}</h3>
                <p className="text-base leading-7 text-textSub">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardWithNotches>
    </Section>
  )
}
