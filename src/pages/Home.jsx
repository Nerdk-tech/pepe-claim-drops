import React, { useState, useCallback, useEffect } from 'react';
import { toast } from 'sonner';
import Navbar from '@/components/pepe/Navbar';
import HeroSection from '@/components/pepe/HeroSection';
import AboutSection from '@/components/pepe/AboutSection';
import HowToBuy from '@/components/pepe/HowToBuy';
import Tokenomics from '@/components/pepe/Tokenomics';
import Roadmap from '@/components/pepe/Roadmap';
import ClaimSection from '@/components/pepe/ClaimSection';
import Footer from '@/components/pepe/Footer';
import LiveClaimsPopup from '@/components/pepe/LiveClaimsPopup';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [chainId, setChainId] = useState(null);

  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          const chain = await window.ethereum.request({ method: 'eth_chainId' });
          setChainId(parseInt(chain, 16));
        }
      }
    };
    checkConnection();
  }, []);

  useEffect(() => {
    if (typeof window.ethereum === 'undefined') return;
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) { setWalletAddress(null); setChainId(null); toast.info('Wallet disconnected'); }
      else { setWalletAddress(accounts[0]); toast.success(`Switched to ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`); }
    };
    const handleChainChanged = (chain) => { setChainId(parseInt(chain, 16)); toast.info('Network changed'); };
    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);
    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    };
  }, []);

  const connectWallet = useCallback(async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        const chain = await window.ethereum.request({ method: 'eth_chainId' });
        setChainId(parseInt(chain, 16));
        toast.success('Wallet connected!');
        setTimeout(() => document.getElementById('claim')?.scrollIntoView({ behavior: 'smooth' }), 500);
      }
    } else {
      toast.error('No wallet detected. Please install MetaMask.');
      window.open('https://metamask.io/download/', '_blank');
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setWalletAddress(null);
    setChainId(null);
    toast.info('Wallet disconnected');
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#4a8f3f' }}>
      <LiveClaimsPopup />
      <Navbar walletAddress={walletAddress} onConnect={connectWallet} onDisconnect={disconnectWallet} />
      <HeroSection onConnect={connectWallet} walletAddress={walletAddress} />
      <AboutSection />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <ClaimSection walletAddress={walletAddress} onConnect={connectWallet} onDisconnect={disconnectWallet} chainId={chainId} />
      <Footer />
    </div>
  );
}