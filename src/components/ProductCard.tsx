import React, { useState } from 'react';
import { ShoppingCart, CheckCircle2, XCircle, Truck, Package, Star, ChevronDown, ChevronUp, MessageSquare, User, Heart, MessageCircle, BarChart2 } from 'lucide-react';
import { Product, Review } from '../data/products';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  onToggleComparison?: (product: Product) => void;
  isWishlisted?: boolean;
  isCompared?: boolean;
  onProductClick?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onToggleWishlist,
  onToggleComparison,
  isWishlisted = false,
  isCompared = false,
  onProductClick
}) => {
  const [showReviews, setShowReviews] = useState(false);
  const [localReviews, setLocalReviews] = useState<Review[]>(product.reviews);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '', userName: '' });

  const averageRating = localReviews.length > 0 
    ? (localReviews.reduce((acc, r) => acc + r.rating, 0) / localReviews.length).toFixed(1)
    : null;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.comment || !newReview.userName) return;

    const review: Review = {
      id: Math.random().toString(36).substr(2, 9),
      userName: newReview.userName,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };

    setLocalReviews([review, ...localReviews]);
    setNewReview({ rating: 5, comment: '', userName: '' });
  };

  const handleWhatsAppOrder = () => {
    const message = `*Inquiry from Shippien*\n\n` +
      `*Product:* ${product.name}\n` +
      `*Brand:* ${product.brand}\n` +
      `*Price:* ₹${product.price.toLocaleString('en-IN')}\n` +
      `*Image:* ${product.image}\n\n` +
      `Hi Shippien! I'm interested in this part. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919755516453?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
    >
      <div 
        className="cursor-pointer group/card"
        onClick={() => onProductClick?.(product)}
      >
        <div className="relative aspect-square overflow-hidden bg-zinc-100">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <span className="bg-white/90 backdrop-blur-sm text-zinc-900 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm border border-zinc-100 uppercase tracking-wider">
              {product.brand}
            </span>
          </div>
          
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist?.(product);
              }}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                isWishlisted 
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' 
                : 'bg-white/90 text-zinc-400 hover:text-rose-500 shadow-sm'
              }`}
              title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                onToggleComparison?.(product);
              }}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                isCompared 
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' 
                : 'bg-white/90 text-zinc-400 hover:text-orange-600 shadow-sm'
              }`}
              title={isCompared ? "Remove from Compare" : "Add to Compare"}
            >
              <BarChart2 className={`w-4 h-4 ${isCompared ? 'fill-current' : ''}`} />
            </button>
          </div>

          {!product.inStock && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
              <span className="bg-zinc-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="p-4 pb-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-orange-600 text-[10px] font-bold uppercase tracking-widest">
              {product.category}
            </span>
            {averageRating && (
              <div className="flex items-center gap-1 bg-orange-50 px-1.5 py-0.5 rounded text-[10px] font-bold text-orange-700">
                <Star className="w-2.5 h-2.5 fill-orange-500 text-orange-500" />
                {averageRating}
              </div>
            )}
          </div>
          <h3 className="text-zinc-900 font-bold text-base line-clamp-2 leading-tight mt-1 mb-3 group-hover/card:text-orange-600 transition-colors">
            {product.name}
          </h3>

          {/* Specifications Section */}
          <div className="space-y-2 bg-zinc-50 p-2.5 rounded-xl border border-zinc-100 mb-4">
            {product.compatibility && product.compatibility.length > 0 && (
              <div className="flex items-start gap-2">
                <Truck className="w-3.5 h-3.5 text-zinc-400 mt-0.5 flex-shrink-0" />
                <p className="text-[11px] text-zinc-600 leading-tight">
                  <span className="font-bold text-zinc-900">Fits:</span> {product.compatibility.join(', ')}
                </p>
              </div>
            )}
            {product.material && (
              <div className="flex items-start gap-2">
                <Package className="w-3.5 h-3.5 text-zinc-400 mt-0.5 flex-shrink-0" />
                <p className="text-[11px] text-zinc-600 leading-tight">
                  <span className="font-bold text-zinc-900">Material:</span> {product.material}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 pt-0 flex-1 flex flex-col">

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              {product.inStock ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <XCircle className="w-3.5 h-3.5 text-rose-500" />
              )}
              <span className={`text-[11px] font-medium ${product.inStock ? 'text-emerald-600' : 'text-rose-600'}`}>
                {product.inStock ? 'Available for Dispatch' : 'Back in 5-7 Days'}
              </span>
            </div>
            <button 
              onClick={() => setShowReviews(!showReviews)}
              className="text-[10px] font-bold text-zinc-400 hover:text-orange-600 flex items-center gap-1 transition-colors uppercase tracking-wider"
            >
              <MessageSquare className="w-3 h-3" />
              {localReviews.length} Reviews
              {showReviews ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          <AnimatePresence>
            {showReviews && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-4"
              >
                <div className="pt-2 border-t border-zinc-100 space-y-4">
                  {/* Review Form */}
                  <form onSubmit={handleReviewSubmit} className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Rate this part</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReview({ ...newReview, rating: star })}
                            className="focus:outline-none"
                          >
                            <Star className={`w-3 h-3 ${newReview.rating >= star ? 'fill-orange-500 text-orange-500' : 'text-zinc-300'}`} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <input 
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full bg-white border border-zinc-200 rounded-lg px-2 py-1.5 text-[11px] outline-none focus:ring-1 focus:ring-orange-500"
                      value={newReview.userName}
                      onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                    />
                    <textarea 
                      placeholder="Your comment..."
                      required
                      className="w-full bg-white border border-zinc-200 rounded-lg px-2 py-1.5 text-[11px] outline-none focus:ring-1 focus:ring-orange-500 resize-none h-16"
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    />
                    <button 
                      type="submit"
                      className="w-full bg-zinc-900 text-white py-1.5 rounded-lg text-[10px] font-bold hover:bg-orange-600 transition-colors uppercase tracking-widest"
                    >
                      Submit Review
                    </button>
                  </form>

                  {/* Reviews List */}
                  <div className="max-h-40 overflow-y-auto space-y-3 pr-1 custom-scrollbar">
                    {localReviews.length === 0 ? (
                      <p className="text-[10px] text-zinc-400 text-center py-4 italic">No reviews yet. Be the first to rate!</p>
                    ) : (
                      localReviews.map((review) => (
                        <div key={review.id} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center">
                                <User className="w-3 h-3 text-zinc-500" />
                              </div>
                              <span className="text-[10px] font-bold text-zinc-900">{review.userName}</span>
                            </div>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-2 h-2 ${i < review.rating ? 'fill-orange-500 text-orange-500' : 'text-zinc-200'}`} />
                              ))}
                            </div>
                          </div>
                          <p className="text-[10px] text-zinc-600 leading-relaxed pl-6">{review.comment}</p>
                          <p className="text-[8px] text-zinc-400 pl-6 uppercase tracking-widest">{review.date}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-zinc-400 text-xs font-medium line-through">₹{(product.price * 1.2).toLocaleString('en-IN')}</span>
                <div className="text-xl font-black text-zinc-900">₹{product.price.toLocaleString('en-IN')}</div>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => onAddToCart(product)}
                  disabled={!product.inStock}
                  className={`p-3 rounded-xl transition-all ${
                    product.inStock 
                    ? 'bg-zinc-900 text-white hover:bg-orange-600' 
                    : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                  }`}
                  title="Add to Cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>

            <button 
              onClick={handleWhatsAppOrder}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all uppercase tracking-widest shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
