import React from 'react';
import { X, Truck, Package, ShieldCheck, Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Product } from '../data/products';
import { motion } from 'motion/react';

interface ProductComparisonProps {
  products: Product[];
  onRemove: (id: string) => void;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

export const ProductComparison: React.FC<ProductComparisonProps> = ({
  products,
  onRemove,
  onAddToCart,
  onBack
}) => {
  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Truck className="w-10 h-10 text-zinc-300" />
        </div>
        <h2 className="text-2xl font-black text-zinc-900 mb-2 uppercase">No products to compare</h2>
        <p className="text-zinc-500 mb-8">Select at least two products to see them side-by-side.</p>
        <button
          onClick={onBack}
          className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors"
        >
          Back to Shopping
        </button>
      </div>
    );
  }

  interface Spec {
    label: string;
    key: keyof Product;
    format?: (val: any) => string;
  }

  const specs: Spec[] = [
    { label: 'Brand', key: 'brand' },
    { label: 'Category', key: 'category' },
    { label: 'Price', key: 'price', format: (val: number) => `₹${val.toLocaleString('en-IN')}` },
    { label: 'Material', key: 'material' },
    { label: 'Compatibility', key: 'compatibility', format: (val: string[]) => val.join(', ') },
    { label: 'Availability', key: 'inStock', format: (val: boolean) => val ? 'In Stock' : 'Out of Stock' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-zinc-900" />
          </button>
          <h2 className="text-3xl font-black text-zinc-900 tracking-tight uppercase">Product Comparison</h2>
        </div>
        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
          {products.length} Products Selected
        </span>
      </div>

      <div className="overflow-x-auto pb-8">
        <div className="min-w-[800px]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-1/4 p-6 text-left bg-zinc-50 border-b border-zinc-200 rounded-tl-3xl">
                  <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">Specifications</span>
                </th>
                {products.map((product, idx) => (
                  <th 
                    key={product.id} 
                    className={`w-1/4 p-6 bg-white border-b border-zinc-200 relative group ${
                      idx === products.length - 1 ? 'rounded-tr-3xl' : ''
                    }`}
                  >
                    <button
                      onClick={() => onRemove(product.id)}
                      className="absolute top-4 right-4 p-1.5 bg-zinc-100 text-zinc-400 hover:bg-rose-500 hover:text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{product.brand}</span>
                        <h3 className="text-sm font-bold text-zinc-900 line-clamp-2 leading-tight h-10">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, specIdx) => (
                <tr key={spec.label} className={specIdx % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50'}>
                  <td className="p-6 border-b border-zinc-100">
                    <span className="text-sm font-bold text-zinc-900">{spec.label}</span>
                  </td>
                  {products.map((product) => (
                    <td key={product.id} className="p-6 border-b border-zinc-100 text-center">
                      <span className={`text-sm ${spec.key === 'price' ? 'font-black text-zinc-900' : 'text-zinc-600'}`}>
                        {spec.format 
                          ? spec.format(product[spec.key] as any) 
                          : (product[spec.key] as string || 'N/A')}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-6 bg-zinc-50 rounded-bl-3xl"></td>
                {products.map((product, idx) => (
                  <td 
                    key={product.id} 
                    className={`p-6 bg-white text-center ${
                      idx === products.length - 1 ? 'rounded-br-3xl' : ''
                    }`}
                  >
                    <button
                      onClick={() => onAddToCart(product)}
                      disabled={!product.inStock}
                      className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all uppercase tracking-widest ${
                        product.inStock 
                        ? 'bg-zinc-900 text-white hover:bg-orange-600 shadow-lg shadow-zinc-900/10' 
                        : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust Badges for Comparison */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-zinc-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-tight">Genuine Parts</h4>
            <p className="text-zinc-500 text-xs">All compared items are OEM certified.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-zinc-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-tight">Fast Shipping</h4>
            <p className="text-zinc-500 text-xs">Available for immediate dispatch.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-zinc-200 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-tight">Best Value</h4>
            <p className="text-zinc-500 text-xs">Competitive pricing across all brands.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
