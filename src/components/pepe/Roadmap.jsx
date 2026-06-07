import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Meme',
    items: [
      'Launch $PEPE on Ethereum',
      'CoinGecko & CMC listing',
      'Trending on Twitter/X',
      '10,000 holders',
    ],
    done: true,
  },
  {
    phase: 'Phase 2',
    title: 'Vibe and HODL',
    items: [
      'CEX listings (Binance, Coinbase)',
      '100,000 holders',
      'Community DAO',
      'Top 100 crypto by market cap',
    ],
    done: true,
  },
  {
    phase: 'Phase 3',
    title: 'Meme Takeover',
    items: [
      'Season 2 Airdrop Portal ✅',
      '1,000,000 holders',
      'Cross-chain expansion',
      'World domination',
    ],
    done: false,
    active: true,
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 sm:py-28" style={{ backgroundColor: '#4a8f3f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phases */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-6xl sm:text-7xl text-white mb-10"
            >
              ROADMAP
            </motion.h2>
            <div className="space-y-6">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`border-2 rounded-2xl p-6 ${phase.active ? 'border-white bg-white/10' : 'border-white/40 bg-white/5'}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-white/60 font-body text-sm">{phase.phase}</span>
                    {phase.active && <span className="text-xs bg-white text-green-700 font-bold px-2 py-0.5 rounded-full">Current</span>}
                  </div>
                  <h3 className="font-display text-3xl text-white mb-3">{phase.title}</h3>
                  <ul className="space-y-1">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/80 font-body">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${phase.done ? 'bg-white' : 'bg-white/40'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Pepe Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.img
              src="https://static.wixstatic.com/media/1f3f2b_21fe381c89284e328827e6c35f4b5513~mv2.png/v1/fill/w_293,h_297,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T220301_142.png"
              alt="Pepe"
              className="w-64 sm:w-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}