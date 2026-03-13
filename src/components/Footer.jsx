import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-background-dark">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="MeetKats Logo" className="h-6 w-auto object-contain" />
          <span className="text-lg font-bold text-white">MeetKats</span>
        </Link>
        <div className="flex gap-8 text-sm text-slate-500">
          <Link className="hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
          <Link className="hover:text-primary transition-colors" to="/terms">Terms of Service</Link>
          <Link className="hover:text-primary transition-colors" to="/child-safety">Safety Guide</Link>
        </div>
        <div className="text-sm text-slate-600">
          © 2026 MeetKats Creations Private Limited
        </div>
      </div>
    </footer>
  );
}
