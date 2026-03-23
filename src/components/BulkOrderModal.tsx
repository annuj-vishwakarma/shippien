import React, { useState } from 'react';
import { X, Send, Package, User, Phone, Mail, MessageSquare, Hash, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BulkOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BulkOrderModal: React.FC<BulkOrderModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    partName: '',
    quantity: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Bulk Order Inquiry:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: '', phone: '', email: '', partName: '', quantity: '', message: '' });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[80]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-2xl h-fit max-h-[90vh] bg-white z-[90] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="relative p-8 border-b border-zinc-100 bg-zinc-900 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-orange-600 p-2 rounded-xl">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-black tracking-tight">BULK ORDER INQUIRY</h2>
              </div>
              <p className="text-zinc-400 text-sm">Get special fleet pricing for large quantity orders.</p>
              <button 
                onClick={onClose} 
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-zinc-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900 mb-2">INQUIRY SENT!</h3>
                  <p className="text-zinc-500">Our fleet specialist will contact you within 2-4 business hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                        <User className="w-3 h-3" /> Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                        <Phone className="w-3 h-3" /> Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <Mail className="w-3 h-3" /> Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. rajesh@transport.com"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                        <Package className="w-3 h-3" /> Part Name / Model
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Tata Prima Turbocharger"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                        value={formData.partName}
                        onChange={e => setFormData({ ...formData, partName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                        <Hash className="w-3 h-3" /> Quantity
                      </label>
                      <input
                        required
                        type="number"
                        min="5"
                        placeholder="Min. 5 units"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                        value={formData.quantity}
                        onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      <MessageSquare className="w-3 h-3" /> Additional Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us more about your fleet or specific requirements..."
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-600/20"
                  >
                    Submit Inquiry <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
            
            <div className="p-6 bg-zinc-50 border-t border-zinc-100 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                <Package className="w-4 h-4" /> Bulk Discounts
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                <Truck className="w-4 h-4" /> Priority Shipping
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                <User className="w-4 h-4" /> Dedicated Manager
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
