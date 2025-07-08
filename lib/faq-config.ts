interface FaqItem {
  question: string
  answer: string
}

export const faqData: Record<string, FaqItem[]> = {
  bot: [
    {
      question: "Is the Rust Rocket Bot custodial?",
      answer:
        "No. The bot operates on a fully non-custodial basis. Your private keys are stored encrypted on your local device and are never shared with our servers. You maintain full control over your assets at all times.",
    },
    {
      question: "What fees apply for the bot?",
      answer:
        "The Rust Rocket Bot has a simple, transparent fee structure. We charge a flat 0.75% fee on profitable trades only. There are no subscription fees or charges for unprofitable trades.",
    },
    {
      question: "Which Solana wallets are supported?",
      answer:
        "You can import any standard Solana wallet using its private key. The bot is compatible with wallets created in Phantom, Solflare, and other popular Solana wallet providers.",
    },
  ],
  dex: [
    {
      question: "How does the Vortex Web DEX ensure best-price execution?",
      answer:
        "Our smart order router automatically splits your trades across multiple liquidity pools, including Raydium and Orca, to find the most efficient path and minimize price impact, ensuring you get the best possible rate.",
    },
    {
      question: "Are there fees for using the Web DEX?",
      answer:
        "The Vortex Web DEX itself does not charge any platform fees for swapping. You only pay the standard Solana network fees and any fees associated with the underlying liquidity pools you interact with.",
    },
  ],
  extension: [
    {
      question: "How does the Chrome Extension protect me from malicious sites?",
      answer:
        "The extension includes a built-in transaction simulation feature. Before you approve any transaction, it shows you exactly what assets will leave your wallet, helping you avoid drainer scams.",
    },
    {
      question: "Can I use the extension to trade on any website?",
      answer:
        "Yes, the extension is designed to overlay on any webpage. When it detects a Solana token address, it allows you to initiate a trade directly from that page without navigating away.",
    },
  ],
  leaderboard: [
    {
      question: "How is the leaderboard ranking calculated?",
      answer:
        "Rankings are based on verified PnL (Profit and Loss) performance over different time periods. We track wallet performance across all connected trading activities and update rankings in real-time.",
    },
    {
      question: "What rewards are available for top performers?",
      answer:
        "Top performers receive exclusive benefits including reduced trading fees, early access to new features, special Discord roles, and eligibility for monthly cash prizes and NFT rewards.",
    },
    {
      question: "Is my trading data private?",
      answer:
        "Yes, only your wallet address and PnL performance are displayed publicly. All other trading details remain private. You can opt out of the leaderboard at any time while still using other Vortex features.",
    },
  ],
  launchpad: [
    {
      question: "What does MiCA compliance mean for token launches?",
      answer:
        "MiCA (Markets in Crypto-Assets) is EU regulation for digital assets. Our platform ensures your token launch meets all regulatory requirements, including proper documentation, risk disclosures, and compliance frameworks.",
    },
    {
      question: "How long does the token launch process take?",
      answer:
        "The entire process from submission to live trading takes approximately 24 hours. This includes automated white-paper generation, compliance checks, liquidity setup, and market deployment.",
    },
    {
      question: "What are the fees for launching a token?",
      answer:
        "We charge a flat 0.2% fee on the initial token supply. This covers all compliance documentation, regulatory filing, smart contract deployment, and ongoing platform support.",
    },
  ],
}
