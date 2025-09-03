import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Minus, Plus } from 'lucide-react';

const MintWidget: React.FC = () => {
  const [isPresale, setIsPresale] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const price = isPresale ? 500 : 650;
  const total = price * quantity;

  return (
    <Card className="bg-crypto-surface/50 backdrop-blur-md border border-crypto-neon/20 p-6 rounded-2xl shadow-[0_0_30px_rgba(34,247,174,0.1)]">
      <h3 className="text-xl font-sora font-bold text-white mb-4">Access NFT Mint</h3>
      
      <div className="flex bg-crypto-bg/50 rounded-xl p-1 mb-6">
        <button
          onClick={() => setIsPresale(true)}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
            isPresale 
              ? 'bg-crypto-neon text-crypto-bg shadow-[0_0_15px_rgba(34,247,174,0.3)]' 
              : 'text-crypto-muted hover:text-white'
          }`}
        >
          Presale ${price}
        </button>
        <button
          onClick={() => setIsPresale(false)}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
            !isPresale 
              ? 'bg-crypto-neon text-crypto-bg shadow-[0_0_15px_rgba(34,247,174,0.3)]' 
              : 'text-crypto-muted hover:text-white'
          }`}
        >
          Launch ${price}
        </button>
      </div>

      <div className="flex items-center justify-between bg-crypto-bg/30 rounded-xl p-4 mb-6">
        <span className="text-crypto-muted">Quantity</span>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 rounded-lg bg-crypto-surface border border-crypto-neon/20 flex items-center justify-center text-crypto-neon hover:bg-crypto-neon/10 transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="text-white font-medium w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(Math.min(10, quantity + 1))}
            className="w-8 h-8 rounded-lg bg-crypto-surface border border-crypto-neon/20 flex items-center justify-center text-crypto-neon hover:bg-crypto-neon/10 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="text-center mb-4">
        <div className="text-2xl font-sora font-bold text-white">${total}</div>
        <p className="text-sm text-crypto-muted mt-2">
          50% of profit is distributed to holders. The other 50% fuels the project.
        </p>
      </div>

      <div className="space-y-3">
        <Button className="w-full bg-crypto-neon text-crypto-bg hover:bg-crypto-neon/90 rounded-2xl py-3 font-semibold shadow-[0_0_20px_rgba(34,247,174,0.3)] hover:shadow-[0_0_30px_rgba(34,247,174,0.5)] transition-all">
          Mint NFT
        </Button>
        <Button variant="outline" className="w-full border-crypto-cyan text-crypto-cyan hover:bg-crypto-cyan/10 rounded-2xl py-3">
          Connect Wallet
        </Button>
      </div>

      <p className="text-xs text-crypto-muted text-center mt-4">
        No performance promises. Market risk.
      </p>
    </Card>
  );
};

export default MintWidget;