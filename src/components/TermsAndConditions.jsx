import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using our music class booking services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">2. Class Bookings</h2>
          <p>All bookings are subject to availability and confirmation by the respective music centers. We reserve the right to refuse service to anyone for any reason at any time.</p>
          <p className="mt-2">Upon successful booking, you will receive a confirmation email with the details of your music class reservation.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">3. Payment and Fees</h2>
          <p>Payment must be made at the time of booking unless otherwise specified by the music center. All fees are non-refundable unless stated otherwise.</p>
          <p className="mt-2">Additional fees may apply for materials, instrument rental, or special events. These will be clearly disclosed before payment.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">4. Cancellations and Rescheduling</h2>
          <p>Cancellation policies may vary by music center. Generally:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Cancellations made 48 hours or more before the scheduled class may be eligible for a full refund or rescheduling.</li>
            <li>Cancellations made less than 48 hours before the scheduled class may not be eligible for a refund but may be rescheduled at the discretion of the center.</li>
            <li>No-shows are not eligible for refunds or rescheduling.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">5. Code of Conduct</h2>
          <p>Students are expected to behave respectfully toward instructors and other students. Any disruptive behavior may result in dismissal without refund.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">6. Liability</h2>
          <p>We are not liable for any personal injury or property damage that may occur during the music classes. Students participate at their own risk.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">8. Contact Information</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at support@musiclessons.com.</p>
        </section>
      </div>
      
      <div className="mt-8 text-sm text-gray-600">
        <p>Last updated: March 31, 2025</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;