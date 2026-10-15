import MarqueeText from './MarqueeText'

type MarqueeSectionProps = {
  items?: string[] | null
}

export default function MarqueeSection({ items }: MarqueeSectionProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <section className="py-6">
      <div className="mx-auto px-4">
         <MarqueeText items={items} speed={25} />
      </div>
    </section>
  )
}
