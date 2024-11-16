import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-muted-foreground mb-6">Last updated: 11/15/2024</p>

          <p>
            At <strong>OptMeOut</strong>, we are committed to{' '}
            <strong>keeping your privacy simple and clear</strong>. We collect the{' '}
            <strong>bare minimum</strong> of personal information necessary to provide our
            service—just enough to create your account, process payments, and deliver our services.
            We don’t sell your data, and we only share it with trusted partners who help us run the
            site.
            <br /><br />
            Here’s what we do:
            
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Data Collection</strong>: We collect your email and payment information when
              you sign up. We use cookies for basic functionality and to improve the site’s
              performance.
            </li>
            <li>
              <strong>Data Use</strong>: Your data is used only to provide our service, improve your
              experience, and communicate with you about your account.
            </li>
            <li>
              <strong>Your Rights</strong>: You can access, update, and delete your data anytime.
            </li>
            <li>
              <strong>No Surprises</strong>: We’ll never sell or share your information without your
              consent—ever.
            </li>
          </ul>
          <br />
          <p>For more details, read the full policy below.</p>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. What Information We Collect</h2>
            <p>
              We collect only the information necessary to provide you with our service and improve
              your experience. This includes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Account Information</strong>: When you create an account, we collect your
                email address and a password.
              </li>
              <li>
                <strong>Usage Data</strong>: We collect non-personal data such as browsing activity
                and interactions on our site (e.g., pages visited, referral sources).
              </li>
              <li>
                <strong>Payment Information</strong>: If you make a payment, we collect payment
                details, such as subscription ID and billing information, through our third-party
                payment processor. We do not store sensitive payment data directly.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Account Creation &amp; Service Delivery</strong>: To provide our service and
                manage your account.
              </li>
              <li>
                <strong>Improvement &amp; Optimization</strong>: To improve our website and services
                by understanding how users interact with our platform.
              </li>
              <li>
                <strong>Communications</strong>: To send you necessary updates about your account
                and our service, including billing or service-related notifications.
              </li>
              <li>
                <strong>Legal &amp; Compliance</strong>: To comply with legal obligations and resolve
                any disputes if they arise.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies to enhance your experience on our website, including for the following
              purposes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Essential Cookies</strong>: Required for the basic functionality of our
                website (e.g., for logging in).
              </li>
              <li>
                <strong>Analytics Cookies</strong>: To help us understand how visitors use our site
                and improve its performance.
              </li>
            </ul>
            <p>
              You can manage or disable cookies through your browser settings. For more details,
              visit{' '}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
                All About Cookies
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
            <p>We do not sell your personal information. We only share your data in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Service Providers</strong>: We work with trusted third-party providers who help us deliver our services, such as payment processors and email service providers (e.g., Stripe, Mailchimp).
              </li>
              <li>
                <strong>Legal Obligations</strong>: If required by law, we may share your information to comply with legal processes, such as responding to subpoenas or legal claims.
              </li>
            </ul>
            <p>
              All third-party providers are bound by confidentiality agreements and are prohibited from using your data for purposes other than those required to perform their services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Privacy Rights</h2>
            <p>You have certain rights regarding your personal data:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Access &amp; Update</strong>: You can access, update, or correct your personal information by logging into your account.
              </li>
              <li>
                <strong>Deletion</strong>: You can request that we delete your personal data at any time by contacting us.
              </li>
              <li>
                <strong>Opt-Out</strong>: You can opt out of communications from us by unsubscribing from our emails or adjusting your notification preferences.
              </li>
              <li>
                <strong>Withdraw Consent</strong>: If we process your data based on your consent, you may withdraw that consent at any time. This will not affect the legality of any processing we conducted before you withdrew consent.
              </li>
            </ul>
            <p>
              If you would like to exercise any of your rights, please contact us at{' '}
              <a href="mailto:support@optmeout.com" className="text-blue-500 underline">support@optmeout.com</a>
              </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p>
              We keep your personal data only for as long as necessary to provide our service or to comply with legal obligations. If you no longer need our service, you can request that we delete your data, and we will do so unless there is a legal reason to retain it.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Account Information</strong>: Retained for up to 12 months after account deletion.
              </li>
              <li>
                <strong>Cookies</strong>: Retained based on cookie type and your browser settings.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
            <p>
              We take reasonable precautions to protect your personal data from unauthorized access, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. International Transfers</h2>
            <p>
              Your data may be transferred to, stored, and processed in countries outside your own, including the United States. We ensure that appropriate safeguards are in place to protect your data, including compliance with relevant data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we do, we will post the updated policy on our website and update the "Last Updated" date at the top.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">Email: <a href="mailto:support@optmeout.com" className="text-blue-500 underline">support@optmeout.com</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
