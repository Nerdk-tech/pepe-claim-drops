import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Search, Gift, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: 'Connect Wallet',
    description: 'Connect your MetaMask or any EVM-compatible wallet. We support Ethereum, Base, Arbitrum, and more.',
    step: '01',
  },
  {
    icon: Search,
    title: 'Check Eligibility',
    description: 'Our smart contract scans your wallet history, on-chain activity, and token holdings to determine your allocation.',
    step: '02',
  },
  {
    icon: Gift,
    title: 'Claim Tokens',
    description: 'If eligible, claim your $PEPE tokens instantly with zero gas fees. Tokens are sent directly to your connected wallet.',
    step: '03',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-4">
            HOW IT <span className="text-primary">WORKS</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Three simple steps to claim your $PEPE airdrop. No complicated processes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector Arrow (desktop) */}
              {i < 2 && (
                <div className="hidden md:flex absolute top-16 -right-4 z-10 text-border">
                  <ArrowRight className="w-8 h-8 text-primary/20" />
                </div>
              )}

              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 h-full hover:border-primary/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/5">
                {/* Step Number */}
                <span className="font-display text-6xl text-primary/10 absolute top-4 right-6 select-none">
                  {step.step}
                </span>

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}