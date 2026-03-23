import React from 'react';
import { ChevronRight, RotateCcw, DollarSign, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface ReturnRefundProps {
  onBack: () => void;
}

export const ReturnRefund: React.FC<ReturnRefundProps> = ({ onBack }) => {
  const benefits = [
    {
      title: "Easy Returns",
      icon: RotateCcw,
      description: "5-day return window for unused items. Simply initiate the return from your account."
    },
    {
      title: "Full Refunds",
      icon: DollarSign,
      description: "Get 100% refund for eligible returns. Refunds processed within 7 business days."
    },
    {
      title: "No Questions Asked",
      icon: CheckCircle,
      description: "Return items in original condition with original packaging. We handle the rest."
    },
    {
      title: "Fast Processing",
      icon: Clock,
      description: "Quick pickup from your location. We collect and process returns without delays."
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
            RETURN & REFUND POLICY
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl">
            We stand behind our products. If you're not satisfied, we make returns hassle-free.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, i) => {
            const IconComponent = benefit.icon;
            return (
              <div key={i} className="bg-white rounded-3xl p-8 border border-zinc-200 hover:border-orange-200 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                  <IconComponent className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2 uppercase tracking-tight">{benefit.title}</h3>
                <p className="text-zinc-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Return Process */}
        <div className="bg-white rounded-3xl p-10 border border-zinc-200 mb-10">
          <h2 className="text-2xl font-black text-zinc-900 mb-8 uppercase tracking-tight">How Returns Work</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-600 text-white font-bold">1</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Initiate Return</h3>
                <p className="text-zinc-600 text-sm">Go to your account → Order History → Select the item → Click "Return Item". Fill in the reason for return.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-600 text-white font-bold">2</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Pack the Item</h3>
                <p className="text-zinc-600 text-sm">Securely pack the item in its original condition with original packaging. Include the return label provided in the confirmation email.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-600 text-white font-bold">3</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Schedule Pickup</h3>
                <p className="text-zinc-600 text-sm">Use the return label to schedule a free pickup from your location. We'll collect within 2-3 business days.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-600 text-white font-bold">4</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Receive Refund</h3>
                <p className="text-zinc-600 text-sm">Once we receive and inspect the item, the refund is processed to your original payment method within 7 business days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Return Eligibility */}
        <div className="bg-white rounded-3xl p-10 border border-zinc-200 mb-10">
          <h2 className="text-2xl font-black text-zinc-900 mb-8 uppercase tracking-tight">Return Eligibility</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                We Accept Returns:
              </h3>
              <ul className="space-y-3 text-zinc-600 text-sm">
                <li>• Items returned within 5 days of delivery</li>
                <li>• Items in original, unused condition</li>
                <li>• Items with original packaging and labels intact</li>
                <li>• Defective or damaged items (within 30 days)</li>
                <li>• Wrong items shipped (full refund + reversal shipping)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                We Don't Accept:
              </h3>
              <ul className="space-y-3 text-zinc-600 text-sm">
                <li>• Items returned after 5 days</li>
                <li>• Used or installed parts</li>
                <li>• Items without original packaging</li>
                <li>• Items damaged due to misuse</li>
                <li>• Items without proof of purchase</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Refund Policy */}
        <div className="bg-white rounded-3xl p-10 border border-zinc-200 mb-10">
          <h2 className="text-2xl font-black text-zinc-900 mb-8 uppercase tracking-tight">Refund Details</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-wide">Refund Amount</h3>
              <p className="text-zinc-600 text-sm">
                Full refund of the product price is provided for eligible returns. Original shipping charges are non-refundable unless the return is due to our error (wrong item, damage).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-wide">Refund Timeline</h3>
              <ul className="space-y-3 text-zinc-600 text-sm">
                <li>• <span className="font-semibold">Return Received:</span> 1-2 business days</li>
                <li>• <span className="font-semibold">Quality Check:</span> 2-3 business days</li>
                <li>• <span className="font-semibold">Refund Processing:</span> 2-3 business days</li>
                <li>• <span className="font-semibold">Total:</span> 5-7 business days from receipt</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-wide">Payment Method</h3>
              <p className="text-zinc-600 text-sm">
                Refunds are credited to your original payment method. If you paid via credit/debit card, the refund appears in 3-5 business days. UPI and net banking transfers appear within 2-3 days.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-8">
          <h3 className="font-bold text-orange-900 text-lg mb-2 uppercase tracking-tight">Questions About Returns?</h3>
          <p className="text-orange-800 text-sm mb-6">
            Our customer service team is happy to help. Contact us anytime for return-related queries.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+919755516453" className="bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-orange-700 transition-colors">
              Call: +91 97555 16453
            </a>
            <a href="mailto:returns@shippien.com" className="border border-orange-600 text-orange-600 px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-orange-50 transition-colors">
              Email: returns@shippien.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
