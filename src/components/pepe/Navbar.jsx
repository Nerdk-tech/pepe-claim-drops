import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'how to buy', href: '#how-to-buy' },
  { label: 'tokenomics', href: '#tokenomics' },
  { label: 'roadmap', href: '#roadmap' },
  { label: 'claim', href: '#claim' },
];

export default function Navbar({ walletAddress: propWalletAddress, onDisconnect }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [wallet, setWallet] = useState(propWalletAddress || null);

  // Sync prop changes cleanly
  useEffect(() => {
    if (propWalletAddress) {
      setWallet(propWalletAddress);
    }
  }, [propWalletAddress]);

  // Forceful absolute routing to bypass wallet app interception/deep links
  const handleConnectRedirect = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setMobileOpen(false);
    
    // Using window.location.replace forces the window context to discard current injection state
    window.location.replace('/pepe-connect.html');
  };

  const handleDisconnectAction = () => {
    setWallet(null);
    if (onDisconnect) onDisconnect();
    setMobileOpen(false);
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const cleanId = href.replace('#', '');
      document.getElementById(cleanId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const short = (addr) => addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : '';

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
                className="text-white/90 hover:text-white font-body text-sm font-semibold capitalize transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Top Right Corner Button */}
          <div className="hidden md:flex items-center">
            {wallet ? (
              <button
                onClick={handleDisconnectAction}
                className="border-2 border-white text-white font-body font-bold text-sm px-5 py-2 rounded-full hover:bg-red-600 hover:border-red-600 transition-all"
              >
                {short(wallet)}
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

          {/* Mobile Menu Toggle button */}
          <button
            type="button"
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/20 overflow-hidden"
            style={{ backgroundColor: '#3a7030' }}
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left text-white font-body py-2 text-sm font-medium capitalize border-b border-white/5"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4">
                {wallet ? (
                  <button
                    onClick={handleDisconnectAction}
                    className="border-2 border-white text-white font-body font-bold text-sm px-5 py-3 rounded-full w-full hover:bg-red-600 hover:border-red-600 transition-all"
                  >
                    Disconnect ({short(wallet)})
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleConnectRedirect(e)}
                    className="border-2 border-white text-white font-body font-bold text-sm px-5 py-3 rounded-full w-full hover:bg-white hover:text-green-700 transition-all"
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
    
