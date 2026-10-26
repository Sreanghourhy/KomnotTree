/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { ArrowRight, RefreshCw, ShieldCheck } from "lucide-react";
import shield from "../assets/komnot-shield.png";

// komnot.online moved: every visit is sent to the new links page.
const NEW_HOME = "https://plateform.komnot.org/";
const COUNTDOWN_SECONDS = 3;

const khmerDigits = (n: number) => String(n).replace(/\d/g, (d) => "០១២៣៤៥៦៧៨៩"[Number(d)]);

/** Keeps any campaign parameters (?utm_…) and replaces this page in history, so Back doesn't loop here. */
function goToNewHome() {
  window.location.replace(NEW_HOME + window.location.search + window.location.hash);
}

export default function App() {
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) {
      goToNewHome();
      return;
    }
    const timer = window.setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [secondsLeft]);

  const progress = 1 - secondsLeft / COUNTDOWN_SECONDS;

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#070b16] px-4 py-10 text-slate-100">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="aurora-blob left-1/2 top-[-14rem] h-[30rem] w-[40rem] -translate-x-1/2 bg-blue-600/45" />
        <div className="aurora-blob bottom-[-12rem] left-[-10rem] h-[26rem] w-[26rem] bg-cyan-500/25 [animation-delay:-6s]" />
        <div className="aurora-blob bottom-[-10rem] right-[-10rem] h-[28rem] w-[28rem] bg-violet-600/35 [animation-delay:-12s]" />
        <div className="grid-lines absolute inset-0" />
      </div>

      <main className="relative w-full max-w-md">
        <div className="rise rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center shadow-[0_30px_80px_-30px_rgba(37,99,235,0.6)] backdrop-blur-2xl sm:p-9">
          {/* Logo inside the countdown ring */}
          <div className="relative mx-auto size-32">
            <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90" aria-hidden="true">
              <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="url(#ring)"
                strokeWidth="4"
                strokeLinecap="round"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset={1 - progress}
                className="transition-[stroke-dashoffset] duration-1000 ease-linear"
              />
              <defs>
                <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#3b82f6" />
                  <stop offset="0.5" stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-3 grid place-items-center rounded-full bg-gradient-to-b from-slate-800/80 to-slate-900/80 ring-1 ring-white/10">
              <img src={shield} alt="Komnot" className="h-14 w-auto drop-shadow-[0_6px_20px_rgba(59,130,246,0.55)]" />
            </div>
          </div>

          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <ShieldCheck className="size-3.5" />
            <span className="font-khmer">ផ្លូវការ</span>
            <span className="opacity-50">·</span>
            Official
          </span>

          <h1 lang="km" className="font-khmer mt-5 text-2xl font-bold leading-snug sm:text-[1.7rem]">
            Komnot បានផ្លាស់គេហទំព័រថ្មី
          </h1>
          <p className="mt-1 text-lg font-semibold text-slate-300">Komnot has moved</p>

          <div className="mx-auto mt-5 space-y-2 text-sm text-slate-400">
            <p lang="km" className="font-khmer leading-7">
              តំណផ្លូវការរបស់យើងឥឡូវនេះនៅ <span className="font-semibold text-sky-300">plateform.komnot.org</span>
            </p>
            <p>
              Our official links now live at <span className="font-semibold text-sky-300">plateform.komnot.org</span>
            </p>
          </div>

          <a
            href={NEW_HOME}
            onClick={(event) => {
              event.preventDefault();
              goToNewHome();
            }}
            className="group relative mt-7 flex h-14 w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 px-5 font-semibold text-white shadow-[0_14px_40px_-12px_rgba(59,130,246,0.9)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span className="sheen" aria-hidden="true" />
            <RefreshCw className="size-5 transition-transform duration-500 group-hover:rotate-180" />
            <span className="font-khmer">ទៅឥឡូវនេះ</span>
            <span className="opacity-60">·</span>
            <span>Go now</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="mt-4 text-xs text-slate-500" aria-live="polite">
            <span lang="km" className="font-khmer">
              នឹងបញ្ជូនដោយស្វ័យប្រវត្តិក្នុងរយៈពេល {khmerDigits(secondsLeft)} វិនាទី
            </span>
            <br />
            Redirecting automatically in {secondsLeft}s
          </p>
        </div>

        <p className="mt-6 text-center text-[11px] font-medium tracking-[0.25em] text-slate-600 uppercase">
          Trust · Innovation · Empowerment
        </p>
      </main>
    </div>
  );
}
