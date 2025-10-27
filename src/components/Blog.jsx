import React from 'react';

const posts = [
  {
    title: 'Designing a softer fintech: why pastels convert',
    excerpt:
      'We studied 200 landing pages across fintech and found that soft palettes consistently improved trust and time-on-page.',
    tag: 'Design',
  },
  {
    title: 'From MVP to millions: scaling payments APIs',
    excerpt:
      'How to move from a weekend project to a robust platform with observability, idempotency, and graceful retries.',
    tag: 'Engineering',
  },
  {
    title: 'Chargebacks, explained in plain English',
    excerpt:
      'A step-by-step guide for product teams to reduce disputes without sacrificing customer experience.',
    tag: 'Playbook',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="w-full bg-gradient-to-b from-white to-pink-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">From the blog</h2>
            <p className="mt-3 text-slate-600">Insights on product, design, and payments.</p>
          </div>
          <a href="#" className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 md:inline">View all</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-700">{p.tag}</span>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900 group-hover:underline">
                <a href="#">{p.title}</a>
              </h3>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              <div className="mt-4 text-sm font-medium text-slate-900">Read more →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
