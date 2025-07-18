import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-red-50 mt-28 text-gray-800 p-8 rounded-2xl shadow-md max-w-4xl mx-auto my-10 space-y-6 border border-red-200">
      <h1 className="text-3xl font-bold text-red-700 border-b border-red-300 pb-2">Privacy Policy</h1>

      <section>
        <h2 className="text-xl font-semibold text-red-600 mb-1">1. Introduction</h2>
        <p>
          The <strong>UDDESHHYA App</strong> ("we," "our," or "us") is committed to protecting your privacy and ensuring that your
          personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use,
          disclose, and protect your information when you use our app.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-red-600 mb-1">2. Information We Collect</h2>
        <p>
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            <strong>Personal Information:</strong> We collect personal information such as your name, email address, phone number,
            and other pertinent details during account registration and profile updates. This information is essential for delivering
            a seamless and personalized user experience.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-red-600 mb-1">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Provide, operate, and improve the UDDESHHYA App and its features.</li>
          <li>Personalize user experience and optimize app functionality.</li>
          <li>Communicate with you, including responding to inquiries or providing updates about events, services, and notifications.</li>
          <li>Maintain security and prevent fraudulent activities.</li>
          <li>Comply with legal obligations and enforce our terms and conditions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-red-600 mb-1">4. Information Sharing and Disclosure</h2>
        <p>We do not sell or rent your personal data to third parties. We may share your information in the following scenarios:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist in app operations, analytics, or event management.</li>
          <li><strong>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities.</li>
          <li><strong>With Your Consent:</strong> When you provide explicit consent for sharing information with third parties.</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
