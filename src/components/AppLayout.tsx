import React from 'react';
import Header from './Header';
import Hero from './Hero';
import WhyCryptoRush from './WhyCryptoRush';
import HowItWorks from './HowItWorks';
import NFTEconomy from './NFTEconomy';
import Roadmap from './Roadmap';
import Community from './Community';
import FAQ from './FAQ';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-crypto-bg">
      <Header />
      <Hero />
      <WhyCryptoRush />
      <HowItWorks />
      <NFTEconomy />
      <Roadmap />
      <Community />
      <FAQ />
      <Footer />
    </div>
  );
};

export default AppLayout;
