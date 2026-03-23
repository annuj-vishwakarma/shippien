import React from 'react';
import { ChevronRight, Truck, MapPin, Clock, Shield, IndianRupee } from 'lucide-react';

interface ShippingPolicyProps {
  onBack: () => void;
}

export const ShippingPolicy: React.FC<ShippingPolicyProps> = ({ onBack }) => {
  const sections = [
    {
      title: "Delivery Coverage",
      icon: MapPin,
      content: "We deliver across India with a special focus on transport hubs, dealerships, and fleet maintenance centers. Our Pan-India delivery network ensures your parts reach even the most remote locations."
    },
    {
      title: "Shipping Timeline",
      icon: Clock,
      content: "Standard delivery takes 3-5 business days from order confirmation. Express delivery (1-2 days) is available for orders placed before 2 PM on weekdays. During peak seasons, delivery may take an additional 1-2 days."
    },
    {
      title: "Shipping Costs",
      icon: IndianRupee,
      content: "Shipping is FREE for orders above ₹5,000 across India. For orders below ₹5,000, a flat shipping charge of ₹149 applies. Bulk orders above ₹50,000 get complimentary shipping plus priority handling."
    },
    {
      title: "Safe Packaging",
      icon: Shield,
      content: "All parts are carefully packed with protective materials to prevent damage during transit. Fragile items receive additional protection. We use eco-friendly packing materials wherever possible."
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
            SHIPPING POLICY
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Learn about our reliable delivery network and shipping guarantees for your truck parts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, i) => {
            const IconComponent = section.icon;
            return (
              <div key={i} className="bg-white rounded-3xl p-8 border border-zinc-200 hover:border-orange-200 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                    <IconComponent className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-black text-zinc-900 uppercase tracking-tight">{section.title}</h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">{section.content}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Information */}
        <div className="bg-white rounded-3xl p-10 border border-zinc-200">
          <h2 className="text-2xl font-black text-zinc-900 mb-8 uppercase tracking-tight">Detailed Shipping Terms</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">1. Order Processing</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                All orders are processed within 24 hours of confirmation. You will receive an order confirmation email with an order number and tracking link. Bulk orders may require 1-2 additional business days for processing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">2. Delivery Methods</h3>
              <div className="space-y-3 text-sm text-zinc-600">
                <p>• <span className="font-semibold">Standard Delivery:</span> 3-5 business days via our logistics partners</p>
                <p>• <span className="font-semibold">Express Delivery:</span> 1-2 business days for metro areas</p>
                <p>• <span className="font-semibold">Bulk Orders:</span> Custom logistics arrangement with priority tracking</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">3. Tracking Your Order</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                You can track your order in real-time using the tracking link provided in your confirmation email. Updates are sent via SMS and email at key milestones: order dispatched, in transit, and out for delivery.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">4. Delivery Failure & Reshipment</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                If delivery fails due to address issues or unavailability, we'll attempt redelivery. Multiple failed deliveries will incur additional shipping charges. Contact our support team for resolution.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide">5. Damaged Goods in Transit</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Report any damage within 48 hours of receipt with photos. We offer immediate replacement or refund. File a claim through your account or contact support at support@shippien.com.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h4 className="font-bold text-orange-900 mb-2">Need Help with Shipping?</h4>
              <p className="text-orange-800 text-sm mb-4">
                Our logistics team is available Monday-Saturday, 9 AM to 6 PM. Contact us for any shipping-related queries or concerns.
              </p>
              <div className="flex gap-3">
                <a href="tel:+919755516453" className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-700 transition-colors">
                  Call Support
                </a>
                <a href="mailto:support@shippien.com" className="border border-orange-600 text-orange-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-50 transition-colors">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
