import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wallet } from 'lucide-react';

const navLinks = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'how to buy', href: '#how-to-buy' },
  { label: 'tokenomics', href: '#tokenomics' },
  { label: 'roadmap', href: '#roadmap' },
  { label: 'claim', href: '#claim' },
];

export default function Navbar({ walletAddress, onDisconnect }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Direct route to static wallet connector file in the public directory
  const handleConnectRedirect = () => {
    window.location.href = '/pepe-connect.html';
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const short = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#4a8f3f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://static.wixstatic.com/media/1f3f2b_21fe381c89284e328827e6c35f4b5513~mv2.png/v1/fill/w_476,h_483,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T220301_142.png"
              alt="Pepe"
              className="w-10 h-10 object-contain"
            />
            <span className="font-display text-3xl text-white font-bold">pepe</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-white/90 hover:text-white font-body text-sm font-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Top Right Corner Button (Screenshot 1000666607.jpg) */}
          <div className="hidden md:flex items-center">
            {walletAddress ? (
              <button
                onClick={onDisconnect}
                className="border-2 border-white text-white font-body font-bold text-sm px-5 py-2 rounded-full hover:bg-white hover:text-green-700 transition-all"
              >
                {short(walletAddress)}
              </button>
            ) : (
              <button
                onClick={handleConnectRedirect}
                className="border-2 border-white text-white font-body font-bold text-sm px-5 py-2 rounded-full hover:bg-white hover:text-green-700 transition-all"
              >
                connect wallet
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Menu (Screenshot 1000666608.jpg) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/20"
            style={{ backgroundColor: '#3a7030' }}
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left text-white font-body py-2 text-sm"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                {walletAddress ? (
                  <button
                    onClick={() => { onDisconnect(); setMobileOpen(false); }}
                    className="border-2 border-white text-white font-body font-bold text-sm px-5 py-2 rounded-full w-full"
                  >
                    {short(walletAddress)}
                  </button>
                ) : (
                  <button
                    onClick={() => { handleConnectRedirect(); setMobileOpen(false); }}
                    className="border-2 border-white text-white font-body font-bold text-sm px-5 py-2 rounded-full w-full"
                  >
                    connect wallet
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}