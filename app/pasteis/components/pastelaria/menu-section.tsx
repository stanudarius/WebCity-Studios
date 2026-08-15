import Image from 'next/image'
import { Cake, Coffee, ShoppingBag } from 'lucide-react'
import { BentoCard, BentoGrid } from '@/app/pasteis/components/ui/bento-grid'

const features = [
  {
    Icon: Cake,
    name: 'Pastéis de Nata & Patiserie',
    description: 'Foietaj crocant, cremă caldă de ouă și rețete tradiționale aduse direct din Lisabona.',
    href: '#top',
    cta: 'Vezi Meniul Digital',
    background: (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop"
          alt="Pastéis de Nata & Patiserie"
          fill
          className="object-cover opacity-25 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    ),
    className: 'lg:col-span-2',
  },
  {
    Icon: Coffee,
    name: 'Specialty Coffee & Băuturi',
    description: 'Boabe prăjite atent și rețete portugheze clasice, preparate de baristii noștri.',
    href: '#top',
    cta: 'Află mai multe',
    background: (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop"
          alt="Specialty Coffee"
          fill
          className="object-cover opacity-25 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    ),
    className: 'lg:col-span-1',
  },
  {
    Icon: ShoppingBag,
    name: 'Pachete Cadou & Delicatese',
    description: 'Perfecte pentru cadouri sau pentru a duce acasă gustul autentic al Lisabonei.',
    href: '#top',
    cta: 'Comandă Acum',
    background: (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1200&auto=format&fit=crop"
          alt="Pachete Cadou"
          fill
          className="object-cover opacity-25 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    ),
    className: 'lg:col-span-3',
  },
]

export function MenuSection() {
  return (
    <section id="meniu" className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Specialitățile Noastre Portugheze
        </h2>
        <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Gustul autentic din Lisabona, combinat cu cafea de calitate superioară.
        </p>
      </div>

      <BentoGrid className="mt-12 lg:grid-rows-[auto_auto]">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  )
}
