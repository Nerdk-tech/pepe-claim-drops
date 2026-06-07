import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28" style={{ backgroundColor: '#3a7030' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-6xl sm:text-7xl text-white">ABOUT</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://static.wixstatic.com/media/1f3f2b_b3f21b7f5c154daa84e020e5e2b5dc6f~mv2.png/v1/crop/x_0,y_0,w_3600,h_3605/fill/w_563,h_564,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mmga1.png"
              alt="Make Memecoins Great Again"
              className="w-72 sm:w-96 rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-lg font-body leading-relaxed mb-6">
              Pepe is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu's have had their day. It's time for the most recognizable meme in the world to take his reign as king of the internet.
            </p>
            <p className="text-white text-lg font-body leading-relaxed">
              Pepe is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced, $PEPE is a coin for the people, forever. Fueled by pure memetic power, let $PEPE show you the way.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}