import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const handleDownload = () => {
    window.open('https://play.google.com/store/apps', '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-6">
      <nav className="glass-panel flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full border border-white/10">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <img src="/logo.svg" alt="MeetKats Logo" className="h-8 w-auto object-contain" />
          <span className="text-xl font-bold tracking-tight text-white">MeetKats</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium text-slate-400 hover:text-white transition-colors" to="/#features">Features</Link>
          <Link className="text-sm font-medium text-slate-400 hover:text-white transition-colors" to="/#how-it-works">How it Works</Link>
          <Link className="text-sm font-medium text-slate-400 hover:text-white transition-colors" to="/#community">Community</Link>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={handleDownload} className="flex items-center gap-2 bg-[#0d0d12] hover:bg-white/10 text-white py-1.5 px-3 rounded-xl border border-white/10 transition-all group">
            <span className="material-symbols-outlined text-xl group-hover:text-primary transition-colors">shop</span>
            <div className="flex flex-col items-start">
              <span className="text-[8px] font-medium leading-none text-slate-400 uppercase tracking-wide group-hover:text-slate-300 transition-colors">Get it on</span>
              <span className="text-[13px] font-bold leading-none mt-0.5">Google Play</span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
