import React from 'react';
import { motion } from 'framer-motion';
import { Users, Coins, Flame, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Wallets Connected', value: '142,847', color: 'text-primary' },
  { icon: Coins, label: 'Tokens Claimed', value: '9.87T', color: 'text-accent' },
  { icon: Flame, label: 'Tokens Burned', value: '6.9T', color: 'text-destructive' },
  { icon: TrendingUp, label: 'Unique Holders', value: '287K+', color: 'text-primary' },
];

export default function StatsBar() {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className={`w-6 h-6 mx-auto mb-3 ${stat.color}`} />
                <p className="font-display text-2xl sm:text-3xl text-foreground">{stat.value}</p>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}