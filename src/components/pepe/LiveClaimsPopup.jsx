import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

// More realistic-looking hex addresses
const PREFIXES = ['0x3f','0xa1','0x7c','0x2e','0xb4','0x91','0xd5','0x4a','0x8f','0x6d','0xc3','0x1b','0xe7','0x5c','0x0f'];
const SUFFIXES = ['c721','f3c9','b93c','ff6e','2d58','a4b1','3e9f','7712','cc04','8801','d3fa','0019','5b2c','e441','90ab'];

const randomAddress = () => {
  const pre = PREFIXES[Math.floor(Math.random() * PREFIXES.length)];
  const mid = Math.floor(Math.random() * 0xffff).toString(16).padStart(4, '0');
  const suf = SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];
  return `${pre}${mid}...${suf}`;
};

// Varied, believable amounts (not always round multiples of 1000)
const randomAmount = () => {
  const base = Math.floor(Math.random() * 850 + 50) * 1000;
  const jitter = Math.floor(Math.random() * 999);
  return base + jitter;
};

// Vary the "ago" text slightly
const randomTime = () => {
  const opts = ['just now', 'just now', 'just now', '1s ago', '2s ago'];
  return opts[Math.floor(Math.random() * opts.length)];
};

export default function LiveClaimsPopup() {
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    let timeout;

    const show = () => {
      const claim = {
        id: Date.now(),
        address: randomAddress(),
        amount: randomAmount(),
        time: randomTime(),
      };
      setVisible(claim);

      // Hide after 4s, then schedule next
      timeout = setTimeout(() => {
        setVisible(null);
        timeout = setTimeout(() => schedule(), 800); // brief gap before next
      }, 4000);
    };

    const schedule = () => {
      // Appear every 4–8s
      const delay = Math.random() * 4000 + 4000;
      timeout = setTimeout(show, delay);
    };

    // First one quickly
    timeout = setTimeout(show, 1800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed top-20 right-4 z-50 pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            key={visible.id}
            initial={{ opacity: 0, y: -16, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl min-w-[260px] max-w-[300px]"
            style={{ backgroundColor: '#2e6128', border: '1.5px solid rgba(255,255,255,0.25)' }}
          >
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg select-none">
                🐸
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-green-700" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white/60 font-mono text-[11px] truncate">{visible.address}</p>
                <span className="text-white/40 font-mono text-[10px] shrink-0">{visible.time}</span>
              </div>
              <p className="font-body text-sm text-white font-semibold mt-0.5">
                claimed{' '}
                <span className="text-white font-bold">
                  +{visible.amount.toLocaleString()} $PEPE
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}