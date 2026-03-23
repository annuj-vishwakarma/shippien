import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  action: 'track-order' | 'bulk-inquiries' | 'partner' | null;
}

const whatsappMessages = {
  'track-order': "Hi Shippien! I'd like to track my order. Can you help me with that?",
  'bulk-inquiries': "Hello! I'm interested in placing a bulk order. Can we discuss the details, pricing, and delivery timeline?",
  'partner': "Hi Shippien! I'm interested in partnering with you. Can we discuss partnership opportunities and terms?"
};

const actionTitles = {
  'track-order': 'Track Your Order',
  'bulk-inquiries': 'Bulk Inquiries',
  'partner': 'Partner with Us'
};

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, action }) => {
  if (!action || !whatsappMessages[action]) return null;

  const handleConnect = () => {
    const phoneNumber = '919755516453'; // WhatsApp number without +
    const message = encodeURIComponent(whatsappMessages[action]);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-orange-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <h2 className="text-2xl font-black text-white tracking-tight">
                {actionTitles[action]}
              </h2>
              <p className="text-orange-100 text-sm mt-2">Connect with our team instantly</p>
            </div>

            {/* Content */}
            <div className="px-8 py-8">
              <div className="mb-8">
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  We'd love to help! Click the button below to connect with our team over WhatsApp. 
                  We typically respond within minutes during business hours.
                </p>
                
                <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Your Message:</p>
                  <p className="text-sm text-zinc-700 italic">
                    "{whatsappMessages[action]}"
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-3 rounded-lg border border-zinc-300 text-zinc-700 font-bold text-sm hover:bg-zinc-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConnect}
                  className="flex-1 px-4 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Connect on WhatsApp
                </button>
              </div>

              {/* Support Info */}
              <div className="mt-6 pt-6 border-t border-zinc-200">
                <p className="text-zinc-500 text-xs text-center">
                  <span className="font-bold text-zinc-700">Business Hours:</span> Mon-Sat, 9 AM - 6 PM IST
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
