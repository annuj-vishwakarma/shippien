import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 500;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    const itemsList = items.map(item => 
      `• ${item.name} (${item.brand}) x ${item.quantity} - ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n  Image: ${item.image}`
    ).join('\n\n');

    const message = `*New Order from Shippien*\n\n` +
      `*Order Details:*\n${itemsList}\n\n` +
      `*Summary:*\n` +
      `Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n` +
      `Shipping: ${shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`}\n` +
      `*Total Amount: ₹${total.toLocaleString('en-IN')}*\n\n` +
      `Please confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919755516453?text=${encodedMessage}`, '_blank');
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-black text-zinc-900">YOUR CART</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-zinc-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-zinc-300" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">Your cart is empty</h3>
                  <p className="text-zinc-500 mb-8">Looks like you haven't added any truck parts yet.</p>
                  <button 
                    onClick={onClose}
                    className="bg-zinc-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-bold text-zinc-900 text-sm line-clamp-1">{item.name}</h4>
                          <button onClick={() => onRemove(item.id)} className="text-zinc-400 hover:text-rose-500">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-zinc-500 text-xs mb-3">{item.brand} • {item.category}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-zinc-200 rounded-lg overflow-hidden">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1.5 hover:bg-zinc-50 text-zinc-600"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-sm font-bold text-zinc-900">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1.5 hover:bg-zinc-50 text-zinc-600"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-black text-zinc-900">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-zinc-100 bg-zinc-50/50">
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-zinc-500 text-sm">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-zinc-500 text-sm">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`}</span>
                  </div>
                  <div className="flex justify-between text-zinc-900 font-black text-lg pt-2 border-t border-zinc-200">
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                >
                  Checkout on WhatsApp <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-[10px] text-zinc-400 mt-4 uppercase tracking-widest font-bold">
                  Fast & Secure Ordering
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
