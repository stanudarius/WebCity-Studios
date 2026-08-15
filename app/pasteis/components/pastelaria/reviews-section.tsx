import { Marquee } from "@/app/pasteis/components/ui/marquee"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Alexandru M.",
    username: "@alexm",
    body: "Cele mai bune pastéis de nata din București! Fix ca la Lisabona. Recomand cu căldură.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Maria C.",
    username: "@mariac",
    body: "Superb! Aluat crocant, crema fierbinte. Un deliciu alături de o cafea de specialitate.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Ion P.",
    username: "@ionp",
    body: "Atmosferă excelentă, te simți ca în Portugalia. Recomand din tot sufletul.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Elena G.",
    username: "@elenag",
    body: "Delicios! Vin aici mereu când mi-e poftă de ceva dulce și fin. Nu dezamăgesc niciodată.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Victor T.",
    username: "@victort",
    body: "Un loc mic și primitor. Prețuri bune și calitatea produselor este ireproșabilă.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Cristina D.",
    username: "@cristinad",
    body: "Am luat o cutie pentru acasă, prietenii mei au fost foarte impresionați de gust.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full size-8 object-cover" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-foreground/80">{body}</blockquote>
      <div className="mt-3 flex text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3 fill-primary text-primary" />
        ))}
      </div>
    </figure>
  );
};

export function ReviewsSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Ce Spun Clienții Noștri
        </h2>
        <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Peste 1.200 de recenzii pozitive pe Google Maps.
        </p>
      </div>

      <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-border/80 bg-card/50">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s] mt-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background dark:from-background"></div>
      </div>
    </section>
  )
}
