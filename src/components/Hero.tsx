import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { motion } from 'motion/react';
import truckImage from '../images/Truck image.jpg';

interface HeroProps {
  onBulkOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBulkOrderClick }) => {
  return (
    <div className="relative min-h-[85vh] flex items-center bg-zinc-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&q=80&w=2000" 
          alt="Truck Workshop" 
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-orange-900/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-orange-500 text-[10px] font-black tracking-[0.2em] uppercase mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              India's First All-in-One Trucking App
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              THE ULTIMATE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">FLEET SOLUTION</span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Handle fleet maintenance, explore job openings, and build valuable industry connections—bringing every essential tool for truckers together.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button className="group bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl shadow-orange-600/20 hover:-translate-y-1">
                Explore Catalog 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onBulkOrderClick}
                className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border border-white/10 backdrop-blur-md transition-all hover:border-white/20"
              >
                Bulk Inquiry
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, label: "OEM Quality", sub: "100% Genuine" },
                { icon: Clock, label: "Express Shipping", sub: "Pan-India" },
                { icon: Award, label: "Expert Support", sub: "24/7 Tech Help" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex flex-col gap-2"
                >
                  <item.icon className="text-orange-500 w-5 h-5" />
                  <div>
                    <div className="text-white font-black text-xs uppercase tracking-wider">{item.label}</div>
                    <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:block perspective-1000"
          >
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-600/20 to-transparent rounded-[40px] blur-2xl group-hover:opacity-75 transition-opacity"></div>
              
              <div className="relative bg-zinc-900/50 backdrop-blur-2xl border border-white/10 p-4 rounded-[32px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={truckImage}
                  alt="Truck Engine" 
                  className="w-full h-[500px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Info Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-black text-xs uppercase tracking-widest">Live Inventory</span>
                    <span className="text-orange-500 font-black text-xs">98% In Stock</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-orange-500"
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-orange-600 text-white p-6 rounded-3xl shadow-2xl z-20"
              >
                <div className="text-3xl font-black leading-none">25K+</div>
                <div className="text-[10px] font-bold uppercase tracking-tighter opacity-80">Pin Codes Served</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
