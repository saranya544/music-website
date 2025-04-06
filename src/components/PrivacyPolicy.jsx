import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when registering for music classes, including:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Personal information (name, email address, phone number)</li>
            <li>Payment information (processed through secure third-party payment processors)</li>
            <li>Preferred musical instruments and skill levels</li>
            <li>Booking preferences and history</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Process and manage your class bookings</li>
            <li>Communicate with you about your bookings and provide customer support</li>
            <li>Send you important updates about our services</li>
            <li>Improve our website and services</li>
            <li>With your consent, send you marketing communications about relevant music classes</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">3. Information Sharing</h2>
          <p>We share your information with:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Music centers to facilitate your bookings</li>
            <li>Payment processors to complete transactions</li>
            <li>Service providers who help us operate our website</li>
          </ul>
          <p className="mt-2">We do not sell your personal information to third parties.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">5. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can manage your cookie preferences through your browser settings.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal information</li>
            <li>Object to or restrict certain processing of your data</li>
            <li>Request portability of your information</li>
          </ul>
          <p className="mt-2">To exercise these rights, please contact us at privacy@musiclessons.com.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">7. Children's Privacy</h2>
          <p>Our services are not intended for children under 13. We do not knowingly collect information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@musiclessons.com.</p>
        </section>
      </div>
      
      <div className="mt-8 text-sm text-gray-600">
        <p>Last updated: March 31, 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;