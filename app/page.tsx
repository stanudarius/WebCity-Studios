import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-6 antialiased selection:bg-neutral-800">
      <div className="w-full max-w-3xl space-y-8">
        <header className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider uppercase bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400">
            Unified Monorepo
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            WebCity Studios
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base">
            Web applications consolidated into a single unified deployment.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/pasteis"
            className="group p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-900 hover:border-blue-500/50 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">🇵🇹</span>
              <span className="text-xs font-mono text-neutral-500 group-hover:text-blue-400 transition-colors">
                /pasteis &rarr;
              </span>
            </div>
            <h2 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
              Pastéis de Nata
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Patiserie autentică portugheză din Centrul Vechi, Str. Smârdan.
            </p>
          </Link>

          <Link
            href="/toka"
            className="group p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-900 hover:border-orange-500/50 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">🌿</span>
              <span className="text-xs font-mono text-neutral-500 group-hover:text-orange-400 transition-colors">
                /toka &rarr;
              </span>
            </div>
            <h2 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
              TOKA Garden Bistro
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Restaurant, specialty coffee &amp; urban garden pe Calea Călărași.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
