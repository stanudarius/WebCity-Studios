import { MapPin, Clock, Phone, Navigation, ShoppingBag, Armchair, Coffee, Timer } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/app/pasteis/components/ui/button'

const MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Strada+Smardan+Bucuresti'

const VIBE_BADGES = [
  { icon: ShoppingBag, label: 'Opțiune Takeaway în Cutii Speciale' },
  { icon: Armchair, label: 'Terasă Mică pe Zona Pietonală' },
  { icon: Coffee, label: 'Ideal pentru Mic Dejun & Gustare' },
  { icon: Timer, label: 'Servire Rapidă & Cafea To-Go' },
]

export function LocationSection() {
  return (
    <section id="locatie" className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
      <div className="overflow-hidden rounded-3xl border border-border/80 bg-card/80 backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left side */}
          <div className="relative flex flex-col gap-6 p-8 sm:p-10">
            <div className="relative -m-8 mb-2 h-48 sm:-m-10 sm:mb-2 sm:h-56">
              <Image
                src="/images/pasteis-plate.jpg"
                alt="Pastéis de nata proaspăt pudrate cu zahăr și scorțișoară"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                Vizitează-ne
              </span>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Locație &amp; Program
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Adresă</p>
                  <p className="text-sm text-muted-foreground">Strada Smârdan, Centrul Vechi, București</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <Clock className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Program</p>
                  <p className="text-sm text-muted-foreground">Luni – Duminică: 08:30 – 22:00</p>
                </div>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="tel:+1 (555) 123-4567" />}
                nativeButton={false}
                size="lg"
                className="h-11 rounded-full"
              >
                <Phone className="size-4" />
                Apelează Direct
              </Button>
              <Button
                render={<a href={MAPS_URL} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-11 rounded-full"
              >
                <Navigation className="size-4" />
                Ruta pe Google Maps
              </Button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col justify-center gap-6 border-t border-border/80 bg-muted/40 p-8 sm:p-10 lg:border-l lg:border-t-0">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">Atmosfera Pastelaria</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                O mică bucată de Lisabona pe străzile pavate din Centrul Vechi al Bucureștiului.
              </p>
            </div>
            
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/60">
              <Image
                src="/images/pasteis-bakery-shelves.jpg"
                alt="Rafturile artizanale cu produse calde de patiserie"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {VIBE_BADGES.map((badge) => {
                const Icon = badge.icon
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-3 rounded-xl border border-border/80 bg-card px-4 py-3.5"
                  >
                    <Icon className="size-4.5 shrink-0 text-secondary" />
                    <span className="text-sm font-medium leading-snug text-foreground/90">{badge.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
