import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  'ROBINHOOD', 'COINBASE', 'BINANCE', 'CRYPTO.COM', 'KRAKEN',
  'REVOLUT', 'BYBIT', 'UPBIT', 'UNISWAP', 'OKX',
];

export default function PartnersMarquee() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-8 border-y border-border/50 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-lg sm:text-xl text-muted-foreground/30 tracking-widest select-none"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}