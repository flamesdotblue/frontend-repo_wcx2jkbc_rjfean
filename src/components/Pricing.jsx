import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For early projects and personal use',
    features: ['Up to 1,000 API calls/mo', 'Basic analytics', 'Community support'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/mo',
    desc: 'Scale with predictable pricing',
    features: ['100k API calls/mo', 'Team collaboration', 'Priority email support', 'Custom webhooks'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Contact',
    desc: 'For large teams and enterprises',
    features: ['Unlimited API calls', 'SSO/SAML', 'Dedicated support', 'Uptime SLA'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free, then scale as you grow. No hidden fees.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                'rounded-2xl border p-6 shadow-sm ' +
                (tier.highlight
                  ? 'border-pink-200 bg-gradient-to-br from-pink-50 via-sky-50 to-violet-50 shadow-pink-100'
                  : 'border-slate-200 bg-white')
              }
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                {tier.highlight && (
                  <span className="rounded-full bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-700">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                {tier.period && <span className="text-slate-500">{tier.period}</span>}
              </div>
              <p className="mt-2 text-sm text-slate-600">{tier.desc}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  'mt-8 flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm ' +
                  (tier.highlight
                    ? 'bg-slate-900 text-white hover:brightness-110'
                    : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50')
                }
              >
                {tier.price === 'Contact' ? 'Contact sales' : 'Choose plan'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
