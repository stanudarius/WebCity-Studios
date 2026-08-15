import { Coffee } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col items-center gap-4 border-t border-border/80 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Coffee className="size-4" strokeWidth={2.25} />
          </span>
          <span className="font-serif text-sm font-semibold text-foreground">
            Pastéis de Nata <span className="text-muted-foreground">· Str. Smârdan, București</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pastéis de Nata Smârdan. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  )
}
