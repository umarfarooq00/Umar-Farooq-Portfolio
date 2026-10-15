import React from 'react'

type MarqueeTextProps = {
  items?: string[] | null
  speed?: number
}

export default function MarqueeText({
  items,
  speed = 20,
}: MarqueeTextProps) {
  if (!items || items.length === 0) {
    return null
  }

  const labelText = items.map((item) => item.toUpperCase()).join('   •   ')
  const repeatedText = `${labelText}   •   `

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        <span className="mr-10 sm:text-5xl text-3xl uppercase tracking-[0.1em] font-bold text-[#0f0e0e] whitespace-nowrap">
          {repeatedText}
        </span>
        <span className="mr-10 sm:text-5xl text-3xl uppercase tracking-[0.1em] font-bold text-[#0f0e0e] whitespace-nowrap">
          {repeatedText}
        </span>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}