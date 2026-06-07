import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: 'Who is eligible for the $PEPE airdrop?',
    a: 'Any wallet that has interacted with the Ethereum ecosystem, held memecoins, or participated in DeFi protocols may be eligible. Connect your wallet to check your allocation instantly.',
  },
  {
    q: 'How much $PEPE can I claim?',
    a: 'Allocations vary based on your on-chain activity, token holdings, and historical engagement. The average claim is between 100M - 1B $PEPE tokens.',
  },
  {
    q: 'Are there any gas fees?',
    a: 'We cover the gas fees for you! Claiming is completely free. You only need a connected EVM wallet to verify your identity.',
  },
  {
    q: 'Which wallets are supported?',
    a: 'We support MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, and any EVM-compatible wallet with browser extension or mobile support.',
  },
  {
    q: 'When does the airdrop end?',
    a: 'The Season 2 airdrop has a limited claim window. Check the countdown timer on this page for the exact deadline. Unclaimed tokens will be burned.',
  },
  {
    q: 'Is this a scam?',
    a: '$PEPE is a meme coin with no intrinsic value or expectation of financial return. This page is for entertainment and community engagement purposes. Always DYOR and never invest more than you can afford to lose.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-32 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-4">
            F<span className="text-primary">A</span>Q
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Got questions? We've got answers. But probably not good ones.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card/60 backdrop-blur-sm border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-sm sm:text-base font-body font-semibold text-foreground hover:text-primary transition-colors py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}