import { CheckCircle2, MapPin, Phone, Star, Clock, Flame } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/app/pasteis/components/ui/button'
import { Particles } from '@/app/pasteis/components/ui/particles'
import { ShimmerButton } from '@/app/pasteis/components/ui/shimmer-button'

const FEATURES = [
  'Rețetă Autentică din Lisabona',
  'Coapte Proaspăt în Fiecare Zi',
  'Cafea de Specialitate & Galão Tradițional',
  'Cutii Cadou To-Go & Terasă pe Smârdan',
]

const MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Strada+Smardan+Bucuresti'

export function HeroSection() {
  return (
    <section id="top" className="relative mx-auto w-full pt-10 sm:pt-14 lg:pt-20">
      <Particles 
        className="absolute inset-0 -z-10" 
        quantity={200} 
        ease={80} 
        color="#a0a0a0" 
        refresh 
      />
      <div className="relative mx-auto max-w-7xl px-4 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left column */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            <MapPin className="size-4" />
            Patiserie Autentică Portugheză • Centrul Vechi, Smârdan
          </div>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Tradiție Portugheză și{' '}
            <span className="text-primary">Pastéis de Nata</span> Proaspăt Scoase din Cuptor în Inima Bucureștiului
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Foietaj crocant, cremă caldă de ouă și un strat fin de scorțișoară presărată la final — după rețete
            aduse direct din Lisabona. Savurați-le alături de o cafea de specialitate, pe terasa noastră din
            Centrul Vechi.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm font-medium text-foreground/90">
                <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-secondary" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#meniu" className="w-full sm:w-auto inline-block">
              <ShimmerButton
                shimmerColor="#ffffff"
                shimmerSize="0.05em"
                shimmerDuration="3s"
                borderRadius="100px"
                background="var(--primary)"
                className="h-12 px-7 text-base w-full sm:w-auto"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                  Vezi Meniul &amp; Prețurile
                </span>
              </ShimmerButton>
            </a>
            <Button
              render={<a href={MAPS_URL} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-12 rounded-full px-7 text-base"
            >
              <MapPin className="size-4.5" />
              Cum Ajungi la Noi
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border/80 bg-card px-4 py-3 sm:w-fit">
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground/80">
              4.9/5 stele • Peste 1.200+ recenzii pe Google Maps
            </span>
          </div>
        </div>

        {/* Right column */}
        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl shadow-black/10">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/pasteis-hero.jpg"
                alt="Pastéis de nata proaspăt scoși din cuptor, cu foietaj crocant și cremă caramelizată"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
                <Flame className="size-3.5 text-secondary" />
                Coapte Din 30 în 30 de Minute
              </div>
            </div>

            <div className="flex flex-col gap-3 p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 font-medium text-foreground/90">
                  <Clock className="size-4 text-secondary" />
                  Program astăzi
                </span>
                <span className="font-semibold text-foreground">08:30 – 22:00</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground/90">Status</span>
                <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  Deschis acum • Loc liber
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground/90">Cutii To-Go</span>
                <span className="font-semibold text-foreground">de la 22 LEI</span>
              </div>
              <Button
                render={<a href="tel:+1 (555) 123-4567" />}
                nativeButton={false}
                className="mt-1 h-11 w-full rounded-xl"
              >
                <Phone className="size-4" />
                Comandă rapidă: +1 (555) 123-4567
              </Button>
            </div>
          </div>

          <div className="absolute -bottom-6 left-4 flex items-center gap-2 rounded-2xl border border-border/80 bg-card/90 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-md sm:-bottom-8 sm:left-6">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <CheckCircle2 className="size-4.5" />
            </span>
            <span className="text-xs font-semibold leading-tight text-foreground">
              100% Ingrediente Autentice
              <br />
              <span className="font-normal text-muted-foreground">Str. Smârdan</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
