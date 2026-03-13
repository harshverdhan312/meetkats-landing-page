import React from 'react';

export default function TermsOfService() {
  return (
    <section className="py-24 px-6 min-h-[70vh]">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 space-y-8">
          <div className="border-b border-white/10 pb-8 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Terms and Conditions</h1>
            <p className="text-slate-400 text-lg">Effective Date: March 2026</p>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed font-light mt-8 prose prose-invert max-w-none prose-headings:text-white prose-a:text-primary">
            <p>
              Welcome to <strong>MeetKats</strong> ("we," "our," "us"). By accessing or using the MeetKats platform, website, and mobile application (collectively, the "Platform"), you agree to comply with and be bound by these <br />Terms and Conditions ("Terms"). Please read these Terms carefully before using our services.
            </p>
            
            <h2 className="text-2xl font-bold text-white pt-4">1. Acceptance of Terms</h2>
            <p>
              By creating an account, accessing, or using MeetKats, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and any other guidelines we provide. If you do not agree, you may not use the Platform.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">2. Eligibility</h2>
            <p>
              You must be at least <strong>18 years old</strong> (or the legal age of majority in your jurisdiction) to use MeetKats. By using the Platform, you represent and warrant that you meet this requirement. If you are under the legal age, you may not use our services.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Accuracy:</strong> You agree to provide accurate, current, and complete information during registration and keep your account details updated.</li>
              <li><strong>Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.</li>
              <li><strong>One Account:</strong> You may only create one account for personal use unless otherwise authorized by us.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">4. Acceptable Use and Community Standards</h2>
            <p>You agree to use MeetKats respectfully and comply with our Community Guidelines. You agree <strong>not</strong> to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Post content that is illegal, abusive, harassing, defamatory, hateful, or discriminatory.</li>
              <li>Upload sexually explicit material, non-consensual content, or nudity.</li>
              <li>Engage in bullying, spamming, phishing, or scamming other users.</li>
              <li>Impersonate any person or entity or misrepresent your affiliation.</li>
              <li>Use automated scripts, bots, or scrapers to access or interact with the Platform.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">5. User-Generated Content</h2>
            <p>
              <strong>Your Content:</strong> You retain ownership of the content you post (e.g., photos, text, voice notes). However, by posting content, you grant MeetKats a worldwide, non-exclusive, royalty-free license to use, copy, display, and distribute your content in connection with operating and promoting the Platform.<br /><br />
              <strong>Responsibility:</strong> You are solely responsible for your content and assume all risks associated with it, including reliance on its accuracy by others. We reserve the right to remove any content that violates these Terms without notice.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">6. Safety and Interactions</h2>
            <p>
              MeetKats is a platform to facilitate connections, but we do not conduct criminal background checks on every user. <strong>You are solely responsible for your interactions with other users.</strong> Exercise caution and use your best judgment when communicating or meeting in person. We are not liable for the conduct of any user on or off the Platform.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">7. Premium Features and Subscriptions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Purchases:</strong> MeetKats may offer premium features, virtual items, or subscriptions ("In-App Purchases"). All purchases are final and non-refundable, except as required by law.</li>
              <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period. You can manage subscriptions through your Apple App Store or Google Play Store account.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">8. Termination and Account Suspension</h2>
            <p>
              We reserve the right to suspend, disable, or terminate your account at any time, with or without notice, if we believe you have violated these Terms or pose a risk to the community. You may delete your account at any time via the app settings.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">9. Disclaimers and Limitations of Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>"As Is" Basis:</strong> The Platform is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties, express or implied, including fitness for a particular purpose or non-infringement.</li>
              <li><strong>Limitation of Liability:</strong> To the maximum extent permitted by law, MeetKats shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Platform or interactions with other users.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">10. Modifications to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms in the app or via email. Given the fast-evolving nature of social platforms, your continued use of MeetKats after changes take effect constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">11. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding these Terms, please contact us at:<br/><br/>
              <strong>Email:</strong> <a href="mailto:official@meetkats.com" className="text-primary hover:text-accent-blue transition-colors">official@meetkats.com</a><br/>
              <strong>Address:</strong> 237/3C ROOMA KANPUR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
