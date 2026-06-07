import React from 'react';
import { motion } from 'framer-motion';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: '#3a7030' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-6xl sm:text-7xl text-white mb-8">TOKENOMICS</h2>
            <p className="text-white font-body text-lg mb-2">Token Supply:</p>
            <p className="text-white font-display text-3xl sm:text-4xl mb-6">420,690,000,000,000</p>
            <p className="text-white font-body text-xl font-bold mb-4">No Taxes, No Bullshit. It's that simple.</p>
            <p className="text-white/80 font-body text-base">
              LP tokens are burnt, and contract ownership is renounced.
            </p>
          </motion.div>

          {/* Right - Pepe Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 items-end"
          >
            <motion.img
              src="https://static.wixstatic.com/media/1f3f2b_b1f89e2179534202bedc41f8081abad7~mv2.png/v1/fill/w_433,h_433,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pepememe%20(4).png"
              alt="Pepe Meme"
              className="w-48 sm:w-64"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
              src="https://static.wixstatic.com/media/1f3f2b_33505209bd5340c581cc5e861ff74845~mv2.png/v1/crop/x_455,y_0,w_2691,h_2700/fill/w_296,h_297,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pepepissingnobackground%20copy.png"
              alt="Pepe"
              className="w-32 sm:w-44"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}