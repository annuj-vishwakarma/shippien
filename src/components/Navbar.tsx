import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, Truck, Phone, User, Heart, BarChart2, X, ChevronRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onWishlistClick: () => void;
  onCompareClick: () => void;
  onHomeClick: () => void;
  onAboutClick: () => void;
  currentView: 'home' | 'wishlist' | 'product' | 'compare' | 'about';
  wishlistCount: number;
  compareCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  cartCount, 
  onCartClick, 
  onWishlistClick, 
  onCompareClick,
  onHomeClick,
  onAboutClick,
  currentView,
  wishlistCount,
  compareCount
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navLinks = [
    { name: 'Products', view: 'home', onClick: onHomeClick },
    { name: 'About Shippien', view: 'about', onClick: onAboutClick },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="hidden sm:block bg-zinc-900 text-zinc-400 py-2 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase">
              <Phone className="w-3 h-3 text-orange-500" />
              <span>Support: +91 97555 16453</span>
            </div>
            <div className="h-3 w-px bg-zinc-800"></div>
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase">
              <Truck className="w-3 h-3 text-orange-500" />
              <span>Global Mining Logistics</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://shippien.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-300 hover:text-orange-500 transition-colors uppercase tracking-widest"
            >
              <Globe className="w-3 h-3" />
              Main Platform
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-zinc-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center gap-4">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer shrink-0"
              onClick={onHomeClick}
            >
              <div className="bg-orange-600 p-2 rounded-xl shadow-lg shadow-orange-600/20">
                <Truck className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter text-zinc-900">SHIPPIEN</span>
                <span className="text-[10px] font-bold text-orange-600 tracking-[0.2em] uppercase">Parts Marketplace</span>
              </div>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-1 ml-4">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => {
                    link.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-[13px] font-bold uppercase tracking-wider transition-all relative group ${
                    currentView === link.view 
                      ? 'text-orange-600' 
                      : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {link.name}
                  {currentView === link.view && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-600 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <div className={`hidden lg:flex flex-1 max-w-md transition-all duration-300 ${isSearchFocused ? 'max-w-lg' : ''}`}>
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search heavy machinery parts..."
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full bg-zinc-100 border-2 border-transparent rounded-2xl py-2.5 pl-11 pr-4 text-sm focus:bg-white focus:border-orange-500/30 focus:ring-4 focus:ring-orange-500/5 transition-all outline-none"
                />
                <Search className={`absolute left-4 top-3 w-5 h-5 transition-colors ${isSearchFocused ? 'text-orange-600' : 'text-zinc-400'}`} />
                <div className="absolute right-3 top-2.5 hidden group-focus-within:flex items-center gap-1">
                  <span className="text-[10px] font-bold text-zinc-400 bg-zinc-200 px-1.5 py-0.5 rounded">ESC</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center bg-zinc-100 p-1 rounded-2xl">
                <NavIconButton 
                  icon={BarChart2} 
                  count={compareCount} 
                  isActive={currentView === 'compare'} 
                  onClick={onCompareClick}
                  label="Compare"
                />
                <NavIconButton 
                  icon={Heart} 
                  count={wishlistCount} 
                  isActive={currentView === 'wishlist'} 
                  onClick={onWishlistClick}
                  label="Wishlist"
                />
                <div className="w-px h-6 bg-zinc-200 mx-1"></div>
                <NavIconButton 
                  icon={ShoppingCart} 
                  count={cartCount} 
                  onClick={onCartClick}
                  label="Cart"
                  activeColor="orange"
                />
              </div>

              <button className="hidden sm:flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-2xl font-bold text-sm hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 active:scale-95">
                <User className="w-4 h-4" />
                <span>Account</span>
              </button>

              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 text-zinc-600 hover:bg-zinc-100 rounded-xl transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search parts..."
                    className="w-full bg-zinc-100 border-none rounded-xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <Search className="absolute left-4 top-3.5 text-zinc-400 w-5 h-5" />
                </div>
                
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => {
                        link.onClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                        currentView === link.view 
                          ? 'bg-orange-50 text-orange-600' 
                          : 'text-zinc-600 hover:bg-zinc-50'
                      }`}
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-zinc-600 hover:bg-zinc-50 transition-colors">
                    <User className="w-5 h-5" />
                    My Account
                  </button>
                  <a 
                    href="https://shippien.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-zinc-600 hover:bg-zinc-50 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    Main Platform
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

interface NavIconButtonProps {
  icon: React.ElementType;
  count?: number;
  isActive?: boolean;
  onClick: () => void;
  label: string;
  activeColor?: 'orange' | 'zinc';
}

const NavIconButton: React.FC<NavIconButtonProps> = ({ 
  icon: Icon, 
  count = 0, 
  isActive = false, 
  onClick, 
  label,
  activeColor = 'orange'
}) => {
  return (
    <button 
      onClick={onClick}
      className={`p-2.5 rounded-xl transition-all relative group ${
        isActive 
          ? activeColor === 'orange' ? 'text-orange-600' : 'text-zinc-900'
          : 'text-zinc-500 hover:text-zinc-900 hover:bg-white shadow-sm hover:shadow-zinc-200/50'
      }`}
      title={label}
    >
      <Icon className={`w-5 h-5 ${isActive ? 'fill-current' : ''}`} />
      {count > 0 && (
        <motion.span 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`absolute -top-1 -right-1 text-[9px] font-black w-4.5 h-4.5 flex items-center justify-center rounded-full border-2 border-white shadow-sm ${
            activeColor === 'orange' ? 'bg-orange-600 text-white' : 'bg-zinc-900 text-white'
          }`}
        >
          {count}
        </motion.span>
      )}
    </button>
  );
};
