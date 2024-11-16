import React from 'react';

export default function TermsOfService() {
  return (
    <main className="min-h-screen py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-muted-foreground mb-6">Effective Date: 11/15/2024</p>

          <section className="mb-8">
            <h2 className="sr-only">Welcome</h2>
            <p>
              Welcome to OptMeOut! These Terms of Service (“Terms”) govern your use of our website 
              (<a href="https://optmeout.com" className="text-blue-500 underline">optmeout.com</a>)
              and services (“Services”). By accessing or using our Services, you agree to these 
              Terms. If you do not agree, please do not use our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. About OptMeOut.com</h2>
            <p>
              OptMeOut.com helps you manage your digital footprint by identifying personal information held by
              data brokers and submitting requests for its removal on your behalf. While we work hard to ensure
              your data is removed, we cannot guarantee that all requests will be honored by third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>You must be at least 18 years old to use our Services.</li>
              <li>You may only use our Services for yourself or on behalf of a minor for whom you are the parent or legal guardian.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Account Creation & Management</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>You are responsible for creating and maintaining a secure account with accurate information.</li>
              <li>Updates to personal data may take time to process depending on third-party policies.</li>
              <li>Each user may create one account. Using multiple accounts is prohibited.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Prohibited Activities</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Impersonate others or submit unauthorized data.</li>
              <li>Create multiple accounts or use automated tools.</li>
              <li>Violate applicable laws or misuse the Services in any way.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payments & Refunds</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>By subscribing, you authorize recurring payments until canceled.</li>
              <li>Refunds may be issued within 30 days of purchase if the service has not been utilized.</li>
              <li>Prorated refunds may be provided at our sole discretion.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Service Limitations</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>We make reasonable efforts to remove your data from data brokers but cannot guarantee full compliance.</li>
              <li>OptMeOut.com does not provide legal advice or representation.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Ownership & Privacy</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>You retain ownership of all data provided to us.</li>
              <li>Your data is only shared with third parties as necessary to perform our Services. Please see our <a href="/privacy" className="text-blue-500 underline">Privacy Policy</a> for more details.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Dispute Resolution</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>These Terms are governed by the laws of California.</li>
              <li>Disputes will be resolved exclusively in the courts of California.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to These Terms</h2>
            <p>
              We may update these Terms periodically. Changes will be effective upon posting. Your continued use
              of the Services signifies acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <p className="mt-2">Email: <a href="mailto:support@optmeout.com" className="text-blue-500 underline">support@optmeout.com</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
