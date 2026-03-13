import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ChildSafety from './pages/ChildSafety';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30 selection:text-primary relative min-h-screen overflow-x-hidden pt-28 flex flex-col">
        <Navbar />
        <main className="flex-1 shrink-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/child-safety" element={<ChildSafety />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
