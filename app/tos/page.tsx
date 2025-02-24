// File: app/TOS/page.tsx
// Description: This component renders the Terms of Service page for the application.
// It displays the legal terms and conditions governing user access, including sections
// such as Introduction, User Responsibilities, Termination, and more. Accessible via /TOS.

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Terms of Service</h1>
      </header>
      <article className="prose dark:prose-dark">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to our application. These Terms of Service govern your use of our platform. By accessing our service,
            you agree to these terms in full. If you disagree with any part of these terms, please do not use our service.
          </p>
        </section>
        <section>
          <h2>2. Acceptance of Terms</h2>
          <p>
            Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms.
            These Terms apply to all visitors, users, and others who access or use the service.
          </p>
        </section>
        <section>
          <h2>3. Modifications to the Service</h2>
          <p>
            We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice.
            You agree that we shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.
          </p>
        </section>
        <section>
          <h2>4. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
            You agree to accept responsibility for all activities that occur under your account.
          </p>
        </section>
        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of the company and its licensors.
            Unauthorized copying, distributing, modifying, or reproducing any part of the content is strictly prohibited.
          </p>
        </section>
        <section>
          <h2>6. Termination</h2>
          <p>
            We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </p>
        </section>
        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect,
            incidental, special, consequential or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses,
            resulting from your use or inability to use the service.
          </p>
        </section>
        <section>
          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is established,
            without regard to its conflict of law provisions.
          </p>
        </section>
        <section>
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the service
            after any changes constitutes your acceptance of the new Terms.
          </p>
        </section>
        <section>
          <h2>10. Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms, please contact us at support@example.com.
          </p>
        </section>
      </article>
    </main>
  );
} 