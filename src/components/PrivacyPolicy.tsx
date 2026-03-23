import React from 'react';
import { ChevronRight, Lock, Eye, Shield, Database, Send } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  const sections = [
    {
      title: "Data Collection",
      icon: Database,
      description: "We collect information necessary to provide you with our services, including personal, billing, and vehicle information."
    },
    {
      title: "Data Protection",
      icon: Lock,
      description: "Your data is encrypted and stored securely. We use industry-standard security measures to protect your information."
    },
    {
      title: "Transparent Practices",
      icon: Eye,
      description: "We're transparent about how we use your data. You have full control over your personal information."
    },
    {
      title: "No Third-Party Sharing",
      icon: Shield,
      description: "We never sell your data to third parties. Your information is yours alone and used only as per this policy."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-orange-600 font-bold mb-6 hover:gap-3 transition-all"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">
            PRIVACY POLICY
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Key Points */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, i) => {
            const IconComponent = section.icon;
            return (
              <div key={i} className="bg-white rounded-3xl p-8 border border-zinc-200 hover:border-orange-200 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                  <IconComponent className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2 uppercase tracking-tight">{section.title}</h3>
                <p className="text-zinc-600 text-sm">{section.description}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Policy */}
        <div className="bg-white rounded-3xl p-10 border border-zinc-200">
          <h2 className="text-2xl font-black text-zinc-900 mb-8 uppercase tracking-tight">Privacy Policy Details</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">1. Information We Collect</h3>
              <div className="space-y-4 text-sm text-zinc-600">
                <p>
                  <span className="font-semibold">Personal Information:</span> Name, email address, phone number, date of birth, and profile information.
                </p>
                <p>
                  <span className="font-semibold">Billing Information:</span> Billing address, payment method, and transaction history for orders.
                </p>
                <p>
                  <span className="font-semibold">Vehicle Information:</span> Vehicle registration details, fleet size, and maintenance records to provide personalized recommendations.
                </p>
                <p>
                  <span className="font-semibold">Usage Data:</span> Log files, IP addresses, browser type, pages visited, and time spent on our platform.
                </p>
                <p>
                  <span className="font-semibold">Cookies:</span> We use cookies to enhance your browsing experience and for analytics purposes.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">2. How We Use Your Information</h3>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li>• Process orders and deliver products/services</li>
                <li>• Send order confirmations, shipping updates, and customer support communications</li>
                <li>• Personalize your experience and provide relevant product recommendations</li>
                <li>• Conduct analytics to improve our platform and services</li>
                <li>• Send promotional emails and newsletters (with your consent)</li>
                <li>• Detect and prevent fraudulent activities</li>
                <li>• Comply with legal obligations and regulatory requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">3. Data Security</h3>
              <p className="text-sm text-zinc-600 mb-4">
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li>• SSL/TLS encryption for all data transmission</li>
                <li>• Secure password hashing and storage</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Access controls and authentication protocols</li>
                <li>• Data backup and recovery systems</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">4. Information Sharing</h3>
              <p className="text-sm text-zinc-600 mb-4">
                We do not sell your personal information to third parties. However, we may share data in limited circumstances:
              </p>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li>• <span className="font-semibold">Service Providers:</span> Payment processors, shipping partners, and analytics providers (under strict data protection agreements)</li>
                <li>• <span className="font-semibold">Legal Requirements:</span> When required by law or court orders</li>
                <li>• <span className="font-semibold">Business Transfers:</span> In case of merger, acquisition, or sale of assets</li>
                <li>• <span className="font-semibold">Consent:</span> When you explicitly authorize us to share your information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">5. Your Rights</h3>
              <p className="text-sm text-zinc-600 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li>• Right to access and review your personal data</li>
                <li>• Right to correct inaccurate or incomplete information</li>
                <li>• Right to delete your account and personal data</li>
                <li>• Right to opt-out of marketing communications</li>
                <li>• Right to data portability (request data in transferable format)</li>
                <li>• Right to withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">6. Cookies & Tracking</h3>
              <p className="text-sm text-zinc-600 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li>• Remember your preferences and login information</li>
                <li>• Analyze site traffic and user behavior</li>
                <li>• Deliver personalized advertising content</li>
                <li>• Prevent fraud and improve security</li>
              </ul>
              <p className="text-sm text-zinc-600 mt-4">
                You can control cookie settings in your browser. Most browsers allow you to refuse cookies and alert you when cookies are being sent.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">7. Children's Privacy</h3>
              <p className="text-sm text-zinc-600">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information promptly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">8. Policy Updates</h3>
              <p className="text-sm text-zinc-600">
                We may update this privacy policy periodically. Changes will be notified via email or on our website. Continued use of our services constitutes acceptance of updated terms. Last updated: March 2026.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 bg-orange-50 border border-orange-200 rounded-3xl p-8">
          <div className="flex gap-4 mb-6">
            <Send className="w-6 h-6 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-orange-900 text-lg mb-2 uppercase tracking-tight">Privacy Questions?</h3>
              <p className="text-orange-800 text-sm mb-6">
                If you have any concerns about your privacy or how we handle your data, please contact our privacy team.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:privacy@shippien.com" className="bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-orange-700 transition-colors">
              Email: privacy@shippien.com
            </a>
            <a href="tel:+919755516453" className="border border-orange-600 text-orange-600 px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-orange-50 transition-colors">
              Call Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
