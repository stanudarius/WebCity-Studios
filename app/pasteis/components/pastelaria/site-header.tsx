'use client'

import { useState } from 'react'
import { Coffee, Menu, X, MapPin } from 'lucide-react'
import { Button } from '@/app/pasteis/components/ui/button'

const NAV_LINKS = [
  { label: 'Meniu', href: '#meniu' },
  { label: 'Meniu To-Go', href: '#meniu-to-go' },
  { label: 'Despre Noi', href: '#despre-noi' },
  { label: 'Locație', href: '#locatie' },
]

const MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Strada+Smardan+Bucuresti'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-7xl px-4">
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card/80 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Coffee className="size-5" strokeWidth={2.25} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-semibold tracking-tight text-foreground sm:text-lg">
              Pastéis de Nata
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              București • Str. Smârdan
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            <MapPin className="size-4 text-secondary" />
            Cum ajung
          </a>
          <Button render={<a href="#meniu" />} nativeButton={false} size="lg" className="rounded-full px-5">
            Vezi Meniul
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-border/80 bg-card/95 p-4 shadow-lg shadow-black/5 backdrop-blur-md lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
          >
            <MapPin className="size-4 text-secondary" />
            Cum ajung la noi
          </a>
          <Button
            render={<a href="#meniu" onClick={() => setOpen(false)} />}
            nativeButton={false}
            size="lg"
            className="mt-2 rounded-full"
          >
            Vezi Meniul
          </Button>
        </div>
      )}
    </header>
  )
}
