import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-pink-50 via-sky-50 to-violet-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient veil to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/70" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-200 to-violet-200 shadow-inner" />
          <span className="font-semibold tracking-tight text-slate-800">PastelPay</span>
        </div>
        <nav className="hidden items-center gap-6 text-slate-600 md:flex">
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="#" className="rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm backdrop-blur hover:bg-white">Sign in</a>
          <a href="#" className="rounded-full bg-gradient-to-r from-pink-400 to-violet-400 px-4 py-2 text-sm font-semibold text-white shadow-md hover:brightness-110">Start free</a>
        </nav>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 md:py-24">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <Shield className="h-3.5 w-3.5" />
            <span>Secure, modern, minimalist banking infrastructure</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Financial tooling that feels soft, fast, and friendly
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Launch payments, cards, and payouts with a delightful developer
            experience and a pastel-simple dashboard your team will love.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 hover:translate-y-[-1px] hover:shadow-slate-900/20">
              <Rocket className="h-4 w-4" />
              Get started
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 text-slate-800 shadow-sm backdrop-blur hover:bg-white">
              <CreditCard className="h-4 w-4" />
              Talk to sales
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><div className="h-2.5 w-2.5 rounded-full bg-emerald-400" /><span>PCI compliant</span></div>
            <div className="flex items-center gap-2"><div className="h-2.5 w-2.5 rounded-full bg-sky-400" /><span>99.99% uptime</span></div>
            <div className="flex items-center gap-2"><div className="h-2.5 w-2.5 rounded-full bg-violet-400" /><span>24/7 support</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
