import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="py-24 px-6 min-h-[70vh]">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/20 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 space-y-8">
          <div className="border-b border-white/10 pb-8 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Privacy Policy</h1>
            <p className="text-slate-400 text-lg">Effective Date: October 2024</p>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed font-light mt-8 prose prose-invert max-w-none prose-headings:text-white prose-a:text-primary">
            <p>
              At <strong>MeetKats</strong> ("we," "our," "us"), your privacy is our priority. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use the MeetKats platform, website, and mobile application (collectively, the "Platform").
            </p>
            
            <h2 className="text-2xl font-bold text-white pt-4">1. Information We Collect</h2>
            <p>We collect information to provide, personalize, and improve our services.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Information You Provide:</strong>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><strong>Account Data:</strong> Name, email address, phone number, date of birth, gender, and password.</li>
                  <li><strong>Profile Data:</strong> Photos, bio, interests, location preferences, and other details you choose to share.</li>
                  <li><strong>Communications:</strong> Messages, voice notes, and content shared with other users or sent to our support team.</li>
                </ul>
              </li>
              <li><strong>Information Collected Automatically:</strong>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li><strong>Device & Log Data:</strong> IP address, device type, operating system, app version, and crash data.</li>
                  <li><strong>Usage Data:</strong> How you interact with the app, features used, pages visited, and time spent.</li>
                  <li><strong>Location Data:</strong> We collect precise geolocation data with your consent to connect you with nearby users. You can disable this in your device settings.</li>
                </ul>
              </li>
              <li><strong>Information from Third Parties:</strong>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>If you log in via Google, Apple, or Facebook, we receive basic profile info (e.g., name, email) according to their policies.</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Match you with other users based on preferences and location.</li>
              <li>Enable messaging and voice/video features.</li>
              <li>Ensure the safety and security of our community (e.g., detect fraud, prevent abuse, moderate content).</li>
              <li>Process payments for premium features.</li>
              <li>Send you updates, security alerts, and promotional messages (you can opt-out at any time).</li>
              <li>Analyze app performance to improve our features.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">3. How We Share Your Information</h2>
            <p>We do not sell your personal data. We only share information in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>With Other Users:</strong> Your public profile (photos, name, bio, and general location) is visible to other users.</li>
              <li><strong>With Service Providers:</strong> We share data with trusted third-party vendors who assist with hosting, analytics, customer support, and payment processing.</li>
              <li><strong>For Legal Reasons:</strong> We may disclose data if required by law, subpoena, or to protect the safety, rights, and property of MeetKats or others.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user data may be transferred.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">4. Your Choices and Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Profile Updates:</strong> You can edit or delete your profile information in the app settings at any time.</li>
              <li><strong>Location Tracking:</strong> You can revoke location access via your device settings, though this may limit app functionality.</li>
              <li><strong>Account Deletion:</strong> You can delete your account permanently from the app settings. Upon deletion, your public profile is immediately removed from the platform.</li>
              <li><strong>Push Notifications:</strong> You can manage notification preferences in your device settings.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures (including encryption) to protect your data from unauthorized access, loss, or misuse. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">6. Children's Privacy</h2>
            <p>
              MeetKats is restricted to users who are 18 years of age or older. We do not knowingly collect personal information from anyone under 18. If we become aware that a minor has created an account, we will delete the account and associated data immediately.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">7. International Data Transfers</h2>
            <p>
              Your information may be stored and processed in servers located outside your country of residence. By using MeetKats, you consent to the transfer of your data to countries that may have different data protection laws.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">8. Changes to this Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes via in-app alerts or email. Continued use of the app implies acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">9. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or your data, please contact our Data Protection Office at:<br/><br/>
              <strong>Email:</strong> <a href="mailto:official@meetkats.com" className="text-primary hover:text-accent-blue transition-colors">official@meetkats.com</a><br/>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
