import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // In a future iteration, this can post to the backend. For now, provide instant feedback.
    setStatus('Thanks! We\'ll be in touch shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact our team</h2>
          <p className="mt-3 text-slate-600">Tell us a little about your use case and we\'ll get back within 1 business day.</p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-2xl gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-pink-50 via-sky-50 to-violet-50 p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">First name</label>
              <input required name="firstName" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-pink-200 focus:ring" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Last name</label>
              <input required name="lastName" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-pink-200 focus:ring" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Work email</label>
            <input type="email" required name="email" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-pink-200 focus:ring" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Company</label>
            <input name="company" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-pink-200 focus:ring" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">How can we help?</label>
            <textarea rows={4} required name="message" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-pink-200 focus:ring" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">By submitting, you agree to our Terms and Privacy.</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-white shadow-md hover:brightness-110">
              <Send className="h-4 w-4" />
              Send message
            </button>
          </div>
          {status && (
            <div className="rounded-xl bg-emerald-50 p-3 text-sm font-medium text-emerald-700">{status}</div>
          )}
        </form>

        <footer className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 text-sm text-slate-600 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-pink-200 to-violet-200" />
            <span>© {new Date().getFullYear()} PastelPay</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Status</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
