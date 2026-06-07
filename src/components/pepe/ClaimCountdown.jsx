import React, { useState, useEffect } from 'react';

const TARGET = new Date(Date.now() + 23 * 24 * 60 * 60 * 1000);
const TOTAL_POOL = 50_000_000;
const CLAIMED = 31_857_358;

export default function ClaimCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [claimed, setClaimed] = useState(CLAIMED);

  useEffect(() => {
    const tick = () => {
      const diff = TARGET - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setClaimed((c) => c + Math.floor(Math.random() * 5000 + 1000));
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const pct = Math.min((claimed / TOTAL_POOL) * 100, 100);
  const remaining = TOTAL_POOL - claimed;
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="space-y-4 mb-6">
      {/* Header pill */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 border-2 border-white/60 rounded-full px-5 py-2 bg-white/10">
          <span className="text-white font-body font-bold text-xs tracking-widest uppercase">🔥 Claim Window Closes In 🔥</span>
        </div>
      </div>

      {/* Countdown boxes */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {[
          { label: 'DAYS', value: timeLeft.days },
          { label: 'HOURS', value: timeLeft.hours },
          { label: 'MIN', value: timeLeft.minutes },
          { label: 'SEC', value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center rounded-2xl p-3 sm:p-4 border-2 border-white/30 bg-white/10">
            <span className="font-display text-3xl sm:text-4xl font-bold text-white">
              {pad(value)}
            </span>
            <span className="text-white/60 font-mono text-[10px] tracking-widest mt-1">{label}</span>
          </div>
        ))}
      </div>

      {/* Pool remaining */}
      <div className="border-2 border-white/30 rounded-2xl p-4 bg-white/10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white font-body font-bold text-sm">POOL REMAINING</span>
          <span className="text-white font-mono text-sm">{pct.toFixed(1)}% claimed</span>
        </div>
        <div className="h-2.5 rounded-full bg-white/20 overflow-hidden mb-2">
          <div
            className="h-full rounded-full bg-white transition-all duration-1000"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex justify-between">
          <span className="text-white/60 font-mono text-xs">{claimed.toLocaleString()} claimed</span>
          <span className="text-white font-mono text-xs font-bold">{remaining.toLocaleString()} left</span>
        </div>
      </div>
    </div>
  );
}