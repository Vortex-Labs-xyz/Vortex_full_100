export default function RocketLaunchIcon({ className }: { className?: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rocket Body */}
      <path
        d="M32 8L36 20L32 32L28 20L32 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Rocket Fins */}
      <path
        d="M28 20L24 24L28 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M36 20L40 24L36 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Rocket Window */}
      <circle cx="32" cy="16" r="2" stroke="currentColor" strokeWidth="2" fill="none" />

      {/* Launch Pad Base */}
      <rect x="20" y="48" width="24" height="4" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />

      {/* Launch Pad Support */}
      <path d="M24 48L24 44M32 48L32 40M40 48L40 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Flame/Exhaust */}
      <path
        d="M30 32L28 38L32 36L36 38L34 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
