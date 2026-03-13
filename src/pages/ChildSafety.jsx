import React from 'react';

export default function ChildSafety() {
  return (
    <section className="py-24 px-6 min-h-[70vh]">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 space-y-8">
          <div className="border-b border-white/10 pb-8 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Child Safety and Abuse Prevention Policy</h1>
            <p className="text-slate-400 text-lg">At MEETKATS, we are deeply committed to the safety and well-being of all users, especially children and minors. We have zero tolerance for child abuse, exploitation, or any harmful behavior toward minors.</p>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed font-light mt-8 prose prose-invert max-w-none prose-headings:text-white prose-a:text-primary">
            
            <h2 className="text-2xl font-bold text-white pt-4 flex items-center gap-2">
              <span>🔒</span> Our Commitment
            </h2>
            <p>
              We comply with all applicable laws, including the Children's Online Privacy Protection Act (COPPA) and Google Play Developer Policies. We do not allow content that exploits or endangers children in any way. Any user-generated content that depicts, encourages, or glorifies child abuse is strictly prohibited and will be immediately removed and reported to the appropriate authorities.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4 flex items-center gap-2">
              <span>👶</span> Child Protection Measures
            </h2>
            <p>To protect minors, we:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Do not allow users under the age of 13 to create accounts without verified parental consent (if applicable).</li>
              <li>Provide tools to report abusive content or users.</li>
              <li>Employ both automated filters and human moderation to review content.</li>
              <li>Cooperate with law enforcement agencies and child protection organizations when required.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4 flex items-center gap-2">
              <span>🚫</span> Prohibited Content
            </h2>
            <p>We strictly prohibit:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any sexualization or abuse of minors.</li>
              <li>Grooming behavior or inappropriate adult-minor interactions.</li>
              <li>Sharing of inappropriate media or messages involving minors.</li>
              <li>Impersonation of minors or creating deceptive accounts.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4 flex items-center gap-2">
              <span>📣</span> Reporting Abuse
            </h2>
            <p>If you suspect any form of child abuse or suspicious behavior on our platform, please:</p>
            <ul className="list-none space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <strong>Email us at:</strong>
                  <a href="mailto:official@meetkats.com" className="block text-primary hover:text-accent-blue transition-colors">official@meetkats.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📩</span>
                <div>
                  <strong>Use the Report button:</strong>
                  <span className="block">Available directly in the app or website on user profiles and content.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <strong>Contact authorities:</strong>
                  <span className="block">Reach out to your local child protection or law enforcement authorities immediately.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4 flex items-center gap-2">
              <span>⚖️</span> Legal Compliance
            </h2>
            <p>
              We report all known violations related to child exploitation to the National Center for Missing & Exploited Children (NCMEC) or the appropriate legal authority in accordance with the law.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4 flex items-center gap-2">
              <span>🧠</span> Resources for Parents and Guardians
            </h2>
            <p>
              We encourage parents to actively monitor their children's online activity. Helpful resources include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://www.missingkids.org" target="_blank" rel="noopener noreferrer">https://www.missingkids.org</a> (NCMEC)</li>
              <li><a href="https://www.childhelphotline.org" target="_blank" rel="noopener noreferrer">https://www.childhelphotline.org</a> (Childhelp)</li>
              <li><a href="https://www.nspcc.org.uk" target="_blank" rel="noopener noreferrer">https://www.nspcc.org.uk</a> (UK)</li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
