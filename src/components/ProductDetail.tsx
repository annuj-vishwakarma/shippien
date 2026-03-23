import React from 'react';
import { ShoppingCart, CheckCircle2, XCircle, Truck, Package, Star, ArrowLeft, Heart, MessageCircle, ShieldCheck, Headphones, CreditCard, BarChart2 } from 'lucide-react';
import { Product } from '../data/products';
import { motion } from 'motion/react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onToggleComparison: (product: Product) => void;
  isWishlisted: boolean;
  isCompared: boolean;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ 
  product, 
  onBack, 
  onAddToCart, 
  onToggleWishlist,
  onToggleComparison,
  isWishlisted,
  isCompared
}) => {
  const averageRating = product.reviews.length > 0 
    ? (product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length).toFixed(1)
    : null;

  const handleWhatsAppOrder = () => {
    const message = `*Inquiry from Shippien*\n\n` +
      `*Product:* ${product.name}\n` +
      `*Brand:* ${product.brand}\n` +
      `*Price:* ₹${product.price.toLocaleString('en-IN')}\n` +
      `*Image Reference:* ${product.image}\n\n` +
      `Hi Shippien! I'm interested in this part. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919755516453?text=${encodedMessage}`, '_blank');
  };

  const handleShareImage = async () => {
    try {
      const response = await fetch(product.image);
      const blob = await response.blob();
      const file = new File([blob], `${product.name.replace(/\s+/g, '_')}.jpg`, { type: 'image/jpeg' });
      
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: product.name,
          text: `Order for ${product.name} from Shippien`,
        });
      } else {
        // Fallback: copy link or just alert
        alert('Image sharing is not supported on this browser. Please use the WhatsApp button.');
      }
    } catch (error) {
      console.error('Error sharing image:', error);
      alert('Could not share image. Please try the WhatsApp button.');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-500 hover:text-orange-600 font-bold text-sm mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        BACK TO SHOP
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden bg-white border border-zinc-200 shadow-sm">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                <img src={product.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-widest">
                {product.brand}
              </span>
              <span className="text-orange-600 text-[10px] font-bold uppercase tracking-widest">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              {averageRating && (
                <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1 rounded-full text-sm font-bold text-orange-700">
                  <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                  {averageRating}
                  <span className="text-orange-300 mx-1">|</span>
                  <span className="text-orange-600/60 font-medium">{product.reviews.length} Reviews</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                {product.inStock ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-500" />
                )}
                <span className={`text-sm font-bold ${product.inStock ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 mb-8">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-black text-zinc-900">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-zinc-400 text-lg font-medium line-through">₹{(product.price * 1.2).toLocaleString('en-IN')}</span>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase ml-2">Save 20%</span>
              </div>
              <p className="text-zinc-500 text-xs font-medium">Inclusive of all taxes + Free Shipping on bulk</p>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Description</h3>
                <p className="text-zinc-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Compatibility</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {product.compatibility.map(item => (
                      <span 
                        key={item} 
                        className="bg-zinc-100/50 border border-zinc-200 px-3 py-1.5 rounded-xl text-[11px] font-bold text-zinc-700 flex items-center gap-2 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 transition-all cursor-default group/tag"
                      >
                        <Truck className="w-3.5 h-3.5 text-zinc-400 group-hover/tag:text-orange-500 transition-colors" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {product.material && (
                  <div>
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Material</h3>
                    <span className="bg-zinc-100/50 border border-zinc-200 px-3 py-1.5 rounded-xl text-[11px] font-bold text-zinc-700 flex items-center gap-2 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 transition-all cursor-default group/tag">
                      <Package className="w-3.5 h-3.5 text-zinc-400 group-hover/tag:text-orange-500 transition-colors" />
                      {product.material}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button 
                onClick={() => onAddToCart(product)}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                  product.inStock 
                  ? 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border border-zinc-200' 
                  : 'bg-zinc-50 text-zinc-300 cursor-not-allowed border border-zinc-100'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              
              <button 
                onClick={() => onToggleWishlist(product)}
                className={`px-6 py-4 rounded-2xl border transition-all flex items-center justify-center gap-2 ${
                  isWishlisted 
                  ? 'bg-rose-50 border-rose-200 text-rose-500 shadow-lg shadow-rose-500/10' 
                  : 'bg-white border-zinc-200 text-zinc-400 hover:border-rose-200 hover:text-rose-500'
                }`}
                title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                <span className="text-xs font-bold uppercase tracking-widest">{isWishlisted ? 'Saved' : 'Wishlist'}</span>
              </button>

              <button 
                onClick={() => onToggleComparison(product)}
                className={`px-6 py-4 rounded-2xl border transition-all flex items-center justify-center gap-2 ${
                  isCompared 
                  ? 'bg-orange-50 border-orange-200 text-orange-600 shadow-lg shadow-orange-600/10' 
                  : 'bg-white border-zinc-200 text-zinc-400 hover:border-orange-200 hover:text-orange-600'
                }`}
                title={isCompared ? "Remove from Compare" : "Add to Compare"}
              >
                <BarChart2 className={`w-5 h-5 ${isCompared ? 'fill-current' : ''}`} />
                <span className="text-xs font-bold uppercase tracking-widest">{isCompared ? 'Compared' : 'Compare'}</span>
              </button>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <button 
                onClick={() => {
                  const message = `*New Purchase Request from Shippien*\n\n` +
                    `*Product:* ${product.name}\n` +
                    `*Brand:* ${product.brand}\n` +
                    `*Price:* ₹${product.price.toLocaleString('en-IN')}\n` +
                    `*Image:* ${product.image}\n\n` +
                    `I would like to purchase this item. Please confirm availability and payment details.`;
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/919755516453?text=${encodedMessage}`, '_blank');
                }}
                disabled={!product.inStock}
                className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all uppercase tracking-widest shadow-lg ${
                  product.inStock
                  ? 'bg-zinc-900 text-white hover:bg-orange-600 shadow-zinc-900/20'
                  : 'bg-zinc-200 text-zinc-400 cursor-not-allowed shadow-none'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                Buy Now
              </button>

              <button 
                onClick={handleWhatsAppOrder}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all uppercase tracking-widest shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-6 h-6" />
                Inquire on WhatsApp
              </button>

              {navigator.share && (
                <button 
                  onClick={handleShareImage}
                  className="w-full bg-white border-2 border-zinc-900 text-zinc-900 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all uppercase tracking-widest"
                >
                  <Package className="w-6 h-6" />
                  Share Image to WhatsApp
                </button>
              )}
            </div>
          </div>

          {/* Trust Badges Mini */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-100">
            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-600" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight">Genuine OEM</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Headphones className="w-5 h-5 text-orange-600" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight">Expert Support</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <CreditCard className="w-5 h-5 text-orange-600" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight">Secure Pay</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-zinc-900 tracking-tight uppercase">Customer Reviews</h2>
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Sort:</span>
            <select className="bg-transparent border-none text-sm font-bold text-zinc-900 focus:ring-0 cursor-pointer">
              <option>Newest First</option>
              <option>Highest Rating</option>
            </select>
          </div>
        </div>

        {product.reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.reviews.map(review => (
              <div key={review.id} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center">
                      <span className="text-zinc-900 font-bold text-sm">{review.userName[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 text-sm">{review.userName}</h4>
                      <p className="text-zinc-400 text-[10px] uppercase tracking-widest font-medium">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-orange-500 text-orange-500' : 'text-zinc-200'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
            <p className="text-zinc-400 font-medium italic">No reviews yet for this part. Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
