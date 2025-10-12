import items from '@/content/portfolio.json'
import { notFound } from 'next/navigation'

type Params = { params: { slug: string } }

export function generateStaticParams() {
  return items.map(i => ({ slug: i.slug }))
}

export function generateMetadata({ params }: Params) {
  const it = (items as any[]).find(i => i.slug === params.slug)
  if (!it) return {}
  return {
    title: `${it.title} — ${it.size} at ${it.venue}`,
    description: it.summary
  }
}

export default function CaseStudyPage({ params }: Params) {
  const it: any = (items as any[]).find(i => i.slug === params.slug)
  if (!it) return notFound()
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-brand">{it.title}</h1>
      <div className="text-sm text-slate-500 mt-1">{it.size} • {it.venue}</div>
      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <img src={it.cover} alt={it.title} className="rounded-2xl w-full aspect-[4/3] object-cover" />
          <p className="mt-4 text-slate-700">{it.summary}</p>
          {it.gallery?.length ? (
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {it.gallery.map((src: string, idx: number) => (
                <img key={idx} src={src} alt={it.title + ' ' + (idx+1)} className="rounded-xl w-full aspect-[4/3] object-cover" />
              ))}
            </div>
          ) : null}
        </div>
        <aside className="space-y-3">
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="font-semibold">Highlights</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              {(it.kpis || ['Turnkey design & build', 'On-time install']).map((k: string, i: number) => <li key={i}>{k}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="font-semibold">Next steps</div>
            <a className="underline underline-offset-4" href="/contact">Get a quote</a>
          </div>
        </aside>
      </div>
    </section>
  )
}
