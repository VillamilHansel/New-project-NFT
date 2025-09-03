import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-crypto-bg/80 backdrop-blur-md border-b border-crypto-surface">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-sora font-bold text-crypto-neon">
          Crypto Rush
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-crypto-muted hover:text-crypto-neon transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-crypto-muted hover:text-crypto-neon transition-colors">
            How it Works
          </button>
          <button onClick={() => scrollToSection('nft-economy')} className="text-crypto-muted hover:text-crypto-neon transition-colors">
            NFT Economy
          </button>
          <button onClick={() => scrollToSection('roadmap')} className="text-crypto-muted hover:text-crypto-neon transition-colors">
            Roadmap
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-crypto-muted hover:text-crypto-neon transition-colors">
            FAQ
          </button>
          <button onClick={() => scrollToSection('community')} className="text-crypto-muted hover:text-crypto-neon transition-colors">
            Community
          </button>
        </nav>

        <Button className="bg-crypto-neon/10 text-crypto-neon border border-crypto-neon hover:bg-crypto-neon hover:text-crypto-bg rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,247,174,0.3)]">
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};

export default Header;