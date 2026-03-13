import React from 'react';

export default function Home() {
  const handleDownload = () => {
    window.open('https://play.google.com/store/apps', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 network-gradient -z-10"></div>
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Active in growing tech ecosystems
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1]">
            Discover the right people <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">around you.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Hyperlocal networking designed for meaningful proximity-based connections. Connect with talent and opportunities exactly where you are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button onClick={handleDownload} className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 bg-[#0d0d12] text-white rounded-xl border border-white/10 hover:bg-white/5 transition-all hover:-translate-y-1 shadow-xl group">
              <span className="material-symbols-outlined text-[32px] group-hover:text-primary transition-colors">shop</span>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-semibold leading-none text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-slate-300 transition-colors">Get it on</span>
                <span className="text-xl font-bold leading-none">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        {/* Dynamic Network Visual */}
        <div className="mt-20 relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d12]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          
          <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <path className="node-line" d="M 200 150 Q 400 50 600 200" fill="none"></path>
            <path className="node-line" d="M 150 350 Q 450 450 750 300" fill="none"></path>
            <path className="node-line" d="M 800 100 Q 600 300 400 500" fill="none"></path>
            <path className="node-line" d="M 100 200 L 900 400" fill="none"></path>
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            {/* Center Node */}
            <div className="relative z-20">
              <div className="absolute -inset-8 bg-primary/20 blur-2xl rounded-full animate-pulse-slow"></div>
              <div className="size-20 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(33,98,237,0.4)]">
                <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
              </div>
            </div>

            {/* Floating Network Nodes */}
            <div className="absolute top-[20%] left-[25%] animate-float" style={{ animationDelay: '0s' }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent-blue/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="size-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-md">
                  <img alt="Node" className="size-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAFesUUuelWPMU_2mhvbiD6tipRD5fKPnpA73XGqMz7y2KybOJDT8BPSxF14BQjlc2m8kCe8o40Gyur5BPgmDEHNqbqiiK8CN2FplM0MWH7KOU4szmkQfbtrCa6KHMmFCPHeC8U97jVPXqT6YJEpXjx4Z7e6xBB9AQt660YzGnwYnp4ue_PEilSM6RO2WizjTIL-s07w4iAFqKYg-zZT_3kyd_fY04Hy1Mny3yANtKkTuOPglaRzbKqL0XcCJX_h0XA7GvGS3aIUA" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-[25%] right-[20%] animate-float" style={{ animationDelay: '-2s' }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="size-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-md">
                  <img alt="Node" className="size-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHb8LSwHCxARR7p2jf6suPCxsZbAPN9FpQZaIe4hkWJliCJjbiYLkmnlUshA-BWKJkK_QqNUgbavPyoh44RG72ihphprvrz0m_Lkd1AmFn0jGGcH97SRqFk7FBuFmNKXfpbP2kWjE5lXI8ieUCm7CAfqsF9aK7RyNd45-lTmNfD6u5Dzj84e7g4Ain96QkrZHZyHLPaiEjr4weJb8j0wVfcWeTH8FXEAi4dL0FwJWOyvmqc8GQDj7m-85vfVJmhcxfuKFUiBHAbbU" />
                </div>
              </div>
            </div>

            <div className="absolute top-[30%] right-[30%] animate-float" style={{ animationDelay: '-4s' }}>
              <div className="size-10 rounded-full border border-white/10 bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm">bolt</span>
              </div>
            </div>

            <div className="absolute bottom-[40%] left-[35%] animate-float" style={{ animationDelay: '-1s' }}>
              <div className="size-8 rounded-full border border-white/10 bg-accent-blue/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent-blue text-xs">code</span>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-background-dark" id="how-it-works">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">How it works</h2>
            <p className="text-slate-400">Three simple steps to expand your professional circle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="linear-border p-8 rounded-2xl space-y-6 group">
              <div className="size-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:shadow-[0_0_20px_rgba(33,98,237,0.4)] transition-all">
                <span className="material-symbols-outlined text-3xl">radar</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Discover</h3>
              <p className="text-slate-400 leading-relaxed">Find relevant profiles within your immediate vicinity using high-precision proximity signals.</p>
            </div>
            
            <div className="linear-border p-8 rounded-2xl space-y-6 group">
              <div className="size-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:shadow-[0_0_20px_rgba(33,98,237,0.4)] transition-all">
                <span className="material-symbols-outlined text-3xl">chat_bubble</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Connect</h3>
              <p className="text-slate-400 leading-relaxed">Initiate meaningful conversations with individuals who share your specific professional interests.</p>
            </div>
            
            <div className="linear-border p-8 rounded-2xl space-y-6 group">
              <div className="size-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:shadow-[0_0_20px_rgba(33,98,237,0.4)] transition-all">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Collaborate</h3>
              <p className="text-slate-400 leading-relaxed">Turn digital handshakes into real-world projects, joint ventures, and high-impact partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Proximity-based networking <br /><span className="text-primary">reimagined.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">Our interface gives you a birds-eye view of your professional surroundings. No more missed opportunities in the same building or workspace.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-200">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Real-time node detection
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Privacy-first proximity masking
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Intent-based filtering
              </li>
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-blue rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="h-80 w-full bg-[#0d0d12] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="absolute w-full h-full border-[0.5px] border-white/5 grid grid-cols-12 grid-rows-6">
                  <div className="col-span-full row-span-full border border-white/10 m-4 rounded-xl opacity-20"></div>
                </div>
                <div className="absolute top-10 left-10 p-4 glass-panel rounded-xl border border-white/10 flex items-center gap-4 shadow-2xl z-10">
                  <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Rohit Singh</p>
                    <p className="text-xs text-slate-400">Senior Product Designer · 50m away</p>
                  </div>
                </div>
                <div className="size-40 rounded-full border border-primary/30 flex items-center justify-center animate-pulse">
                  <div className="size-20 rounded-full bg-primary/10 border border-primary/50"></div>
                </div>
              </div>
              <div className="p-6 border-t border-white/10 flex justify-between items-center bg-card-dark/80">
                <div className="flex -space-x-3">
                  <img className="size-8 rounded-full ring-2 ring-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf3pmzAAdoHpkQE3PDWV0iCLmLOUaN80uhZiC3PeUcu9U-L6o_zDoqzHgkQGlel7t2mLEcps2DFwZ43w2hsFhMLP4PjCvsGCJ-GIkggpnOESNcUlIlDTu7X7F8J5-L3jV5beeUkk0gXd6alJD3d-KDSe-atvRhGlXzjS58wzS7SOoroTRzvCNbbgvTe4WSvqzbmsxEMU8kDu2GAUjpP8wwjsuyqVUbpIrjq_KxdY9pJKV5Gk1HD4yf0NJPEuF_lRMv11gx3zr-NOI" />
                  <img className="size-8 rounded-full ring-2 ring-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUyKLFCD2xB3o8QsIctcfDZ5f3FQ3OkRcee9HVJK9JQUWmrecaf_EtL0Ll-uegXx_amzQ2h6of5EGYanUTD89zbODa_IjkJYsxVVVpFkMNANrunEKt7H31ZrLqIueto_pkNgjZ5guD94TQ3A6Nh5sbVPHjmkwY_9fMwM4gCATXMB3fiM5NfmTuFT5JR7bS43mGyS2JlVb-MNLmPVm2gKJcnmL_DnXsD71JUP4z9PqWVMqMnx7eoAWqUYfwGJtC2JsDib2wVOVMipE" />
                  <img className="size-8 rounded-full ring-2 ring-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL0ywF23_NVp8D4JxfXq6b1qLN8omyg99j8StBPBNntStJNTQwubPJrKhO_VIBu0m_hVwkJz7ZteTLveIrB4TdJLhnNFsNnNSXu4exNJsZ_0veIWzwXxVjZbf1K8MHlQqKBZwP9BD-y4aaXlZoGtFpId36zMosHsasEMv3Z6ojH1psRJ-36wJZux1yCN1cB1ufLMaC3BNA7hbYL62PwnAY9FlhMsElZOCUnS71bnwYR-cOZ7O_BOskeaWW9xLOnu718uPwG4u1EvM" />
                  <div className="size-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-background-dark">+12</div>
                </div>
                <span className="text-xs text-slate-500 font-medium">Nodes active in your area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-background-dark" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Premium Features</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all cursor-default">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Smart Matching</h4>
              <p className="text-sm text-slate-400 leading-relaxed">AI-driven matching based on your unique career goals and current stack.</p>
            </div>
            <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all cursor-default">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">event_available</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Event Sync</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Automatically sync with industry meetups and conferences nearby.</p>
            </div>
            <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all cursor-default">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">encrypted</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Private Comms</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Fully encrypted, high-signal messaging interface for secure introductions.</p>
            </div>
            <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all cursor-default">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">explore</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Proximity Discovery</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Hyper-fast real-time node detection for instant networking in transit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof/Community */}
      <section className="py-24 px-6" id="community">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white">Join your tribe</h2>
            <p className="text-slate-400">Communities thriving on MeetKats right now.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
              <div className="size-10 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h5 className="text-white font-bold mb-2">Students</h5>
              <p className="text-xs text-slate-400">Connect with peers on campus for study groups and startups.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
              <div className="size-10 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">code</span>
              </div>
              <h5 className="text-white font-bold mb-2">Developers</h5>
              <p className="text-xs text-slate-400">Find local pair-programming partners and hackathon teams.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
              <div className="size-10 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <h5 className="text-white font-bold mb-2">Creators</h5>
              <p className="text-xs text-slate-400">Meet videographers, editors, and fellow creative minds in your area.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:translate-y-[-4px] transition-transform">
              <div className="size-10 bg-rose-500/20 text-rose-400 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <h5 className="text-white font-bold mb-2">Founders</h5>
              <p className="text-xs text-slate-400">Network with investors and co-founders in your startup ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            The people you should meet <br />are closer than you think.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button onClick={handleDownload} className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 glass-panel text-white rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105 group">
              <span className="material-symbols-outlined text-[36px] group-hover:text-primary transition-colors">shop</span>
              <div className="flex flex-col items-start">
                <span className="text-[11px] font-semibold leading-none text-slate-300 uppercase tracking-widest mb-1.5 group-hover:text-white transition-colors">Get it on</span>
                <span className="text-2xl font-bold leading-none">Google Play</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
