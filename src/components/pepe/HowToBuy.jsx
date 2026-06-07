import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    img: 'https://static.wixstatic.com/media/1f3f2b_af81019501c549d5b192536bb8680fc5~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T212906_738.png',
    title: 'Create a Wallet',
    desc: 'download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.',
  },
  {
    img: 'https://static.wixstatic.com/media/1f3f2b_48f30828b7d740d98efb1a2f8febc010~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T213620_680.png',
    title: 'Get Some ETH',
    desc: 'have ETH in your wallet to switch to $PEPE. If you don\'t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.',
  },
  {
    img: 'https://static.wixstatic.com/media/1f3f2b_9d0d4341170c4640b3663065417b3700~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniswap%20(2).png',
    title: 'Go to Uniswap',
    desc: 'connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm.',
  },
  {
    img: 'https://static.wixstatic.com/media/1f3f2b_04aca37507ff420d94bd45bde7547fcc~mv2.png/v1/fill/w_241,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T215146_874.png',
    title: 'Switch ETH for $PEPE',
    desc: 'switch ETH for $PEPE. We have ZERO taxes so you don\'t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.',
  },
];

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-20 sm:py-28" style={{ backgroundColor: '#4a8f3f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-6xl sm:text-7xl text-white">HOW TO BUY</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <img src={step.img} alt={step.title} className="w-28 h-28 object-contain" />
              </div>
              <h3 className="font-body font-bold text-white text-lg mb-3">{step.title}</h3>
              <p className="text-white/80 font-body text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}