/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import logo from "../assets/full_logo.png";
import {
  Send,
  Mail,
  Facebook,
  Share2,
  Check,
  ExternalLink,
  Moon,
  Sun,
} from "lucide-react";

interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  brandColor: string;
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showShareToast, setShowShareToast] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleLinkClick = (id: string, url: string, isEmail = false) => {
    if (isEmail) {
      navigator.clipboard.writeText(url);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      window.location.href = `mailto:${url}`;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const copyPortalLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2500);
  };

  const links: LinkItem[] = [
    {
      id: "telegram",
      title: "Join Our Telegram Channel",
      description: "@komnot_official • Daily Updates & Cybersecurity Insights",
      url: "https://t.me/komnot_official",
      icon: <Send className="w-5 h-5 text-white" />,
      brandColor:
        "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700",
    },
    {
      id: "facebook",
      title: "Follow Komnot Cambodia",
      description: "Latest news, fraud alerts & interactive media",
      url: "https://www.facebook.com/komnotcambodia",
      icon: <Facebook className="w-5 h-5 text-white" />,
      brandColor:
        "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800",
    },
    {
      id: "tiktok",
      title: "Komnot TikTok",
      description: "@komnotcambodia • Educational Short Videos & Security Tips",
      url: "https://www.tiktok.com/@komnotcambodia",
      icon: <TikTokIcon className="w-5 h-5 text-white" />,
      brandColor:
        "bg-gradient-to-r from-pink-500 via-rose-500 to-slate-900 hover:from-pink-600 hover:via-rose-600 hover:to-slate-950",
    },
    {
      id: "email",
      title: "Direct Email Inquiry",
      description: "komnotcambodia@gmail.com • Business & Partnerships",
      url: "komnotcambodia@gmail.com",
      icon: <Mail className="w-5 h-5 text-white" />,
      brandColor:
        "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
    },
  ];

  return (
    <div
      className={`relative min-h-screen w-full flex flex-col justify-between items-center transition-colors duration-300 overflow-x-hidden ${
        theme === "dark"
          ? "bg-slate-950 text-slate-100"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Dynamic abstract decorative background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none z-0" />
      </div>

      {/* Header bar */}
      <header className="relative z-10 w-full max-w-xl mx-auto px-6 pt-6 flex justify-between items-center">
        <button
          id="theme-toggle-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`p-2.5 rounded-full transition-all duration-200 border cursor-pointer hover:scale-105 active:scale-95 ${
            theme === "dark"
              ? "bg-slate-900/80 border-slate-800 text-yellow-400 hover:bg-slate-800"
              : "bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm"
          }`}
          aria-label="Toggle Theme"
          title="Toggle UI Theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        <button
          id="share-link-btn"
          onClick={copyPortalLink}
          className={`p-2.5 rounded-full transition-all duration-200 border cursor-pointer hover:scale-105 active:scale-95 ${
            theme === "dark"
              ? "bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800"
              : "bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm"
          }`}
          title="Share Directory Link"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </header>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-xl mx-auto px-6 py-12 flex-grow flex flex-col justify-center items-center">
        {/* Logo & Brand Presentation */}
        <div className="flex flex-col items-center text-center mb-10 w-full">
          <div className="mb-6 transform hover:scale-102 transition-transform duration-300">
            <img
              src={logo}
              alt="Komnot Logo"
              className="max-h-24 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(16,185,129,0.15)]"
              referrerPolicy="no-referrer"
            />
          </div>

          <h1 className="text-2xl font-black tracking-tight mb-3 font-display">
            Komnot Cambodia
          </h1>

          <p
            className={`text-sm max-w-md px-4 leading-relaxed font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
          >
            "A Scam & Fraud Detection App to Strengthen Southeast Asia’s
            Cybersecurity and Financial Trust."
          </p>
        </div>

        {/* Official Links Stack */}
        <div className="w-full space-y-4 mb-6">
          <div className="flex justify-between items-center px-1 mb-2">
            <span
              className={`text-xs uppercase font-bold tracking-wider font-mono ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}
            >
              Official Links
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Verified Connection</span>
            </span>
          </div>

          {links.map((link) => (
            <button
              key={link.id}
              id={`link-card-${link.id}`}
              onClick={() =>
                handleLinkClick(link.id, link.url, link.id === "email")
              }
              className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer flex justify-between items-center shadow-sm hover:shadow-md ${
                theme === "dark"
                  ? "bg-slate-900/90 hover:bg-slate-900 border-slate-800/80 hover:border-emerald-500/50"
                  : "bg-white hover:bg-slate-50/50 border-slate-200/80 hover:border-emerald-500/50"
              }`}
            >
              {/* Left visual accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-teal-600 opacity-80 group-hover:w-2 transition-all duration-300" />

              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={`p-3 rounded-xl transition-all duration-300 ${link.brandColor} group-hover:scale-105 shadow-sm`}
                >
                  {link.icon}
                </div>
                <div>
                  <h2 className="font-bold text-sm sm:text-base group-hover:text-emerald-500 transition-colors duration-200">
                    {link.title}
                  </h2>
                  <p
                    className={`text-xs mt-0.5 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {link.description}
                  </p>
                </div>
              </div>

              {/* Right Side Action Arrow */}
              <div className="flex items-center gap-1 relative z-10 text-right min-w-[70px] justify-end">
                <span className="text-xs font-bold text-emerald-500 flex items-center gap-1 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">
                  {link.id === "email" && copiedEmail ? "Copied!" : "Connect"}
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer
        className={`relative z-10 w-full max-w-xl mx-auto text-center px-6 py-8 border-t transition-colors duration-300 ${
          theme === "dark" ? "border-slate-900" : "border-slate-200"
        }`}
      >
        <p className="text-xs font-bold tracking-wider font-mono opacity-55">
          KOMNOT CAMBODIA • កំណត់
        </p>
      </footer>

      {/* Clipboard / Share Success Notifications */}
      {showShareToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900 border border-emerald-500/30 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold font-sans animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Portal Link copied to clipboard!</span>
        </div>
      )}

      {copiedEmail && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900 border border-emerald-500/30 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold font-sans animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Email copied & opening mail client!</span>
        </div>
      )}
    </div>
  );
}
