import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/pepecoineth',
    img: 'https://static.wixstatic.com/media/1f3f2b_8eaff3e5f42b45f88cf11d418e25d5e6~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/twitter%20(2).png',
  },
  {
    name: 'Etherscan',
    url: 'https://etherscan.io/address/0x6982508145454Ce325dDbE47a25d4ec3d2311933',
    img: 'https://static.wixstatic.com/media/1f3f2b_95d714edb8484668b50ec07fb8b4f394~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/etherscan.png',
  },
  {
    name: 'Uniswap',
    url: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933',
    img: 'https://static.wixstatic.com/media/1f3f2b_9d0d4341170c4640b3663065417b3700~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniswap%20(2).png',
  },
  {
    name: 'CoinMarketCap',
    url: 'https://coinmarketcap.com/currencies/pepe/',
    img: 'https://static.wixstatic.com/media/1f3f2b_614e05b6d3e84630b377c85d7ed33137~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cm%20c.png',
  },
];

const exchanges = [
  { name: 'robinhood', url: 'https://robinhood.com/us/en/crypto/PEPE/', logo: 'https://static.wixstatic.com/media/c267fc_83cd83ac1b354055b51fa77dfba11a81~mv2.png/v1/fill/w_43,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/unnamed.png' },
  { name: 'coinbase', url: 'https://www.coinbase.com/price/pepe', logo: 'https://static.wixstatic.com/media/c267fc_e66f9e3851df4765a0f16b7380420265~mv2.png/v1/fill/w_43,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/coinbase-coin-logo-C86F46D7B8-seeklogo_com.png' },
  { name: 'binance', url: 'https://www.binance.com/en/how-to-buy/pepe', logo: 'https://static.wixstatic.com/media/1f3f2b_58bf93c97a11404db3720ec6be4111ed~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Binance_Logo_svg.png' },
  { name: 'crypto.com', url: 'https://crypto.com/price/pepe', logo: 'https://static.wixstatic.com/media/1f3f2b_9261976ddb4949d9b5c970c1a39d95c7~mv2.png/v1/fill/w_43,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/crypto_com-logo.png' },
  { name: 'kraken', url: 'https://www.kraken.com/prices/pepe', logo: 'https://static.wixstatic.com/media/c267fc_15d836477efc4c10958505113b73f645~mv2.png/v1/fill/w_43,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/kraken_300x300_x2.png' },
  { name: 'revolut', url: 'https://www.revolut.com/crypto/price/pepe/', logo: 'https://static.wixstatic.com/media/c267fc_3b6041a8f2c94731b04747a4d297bf4f~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/images.png' },
  { name: 'bybit', url: 'https://www.bybit.com/en/trade/spot/PEPE/USDT', logo: 'https://static.wixstatic.com/media/c267fc_34c34cdbe3594d86b3c2bd1b426b7144~mv2.webp/v1/fill/w_43,h_42,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bybit_logo-min.webp' },
  { name: 'upbit', url: 'https://upbit.com/exchange?code=CRIX.UPBIT.USDT-PEPE', logo: 'https://static.wixstatic.com/media/c267fc_02419fca49cd4de4af5364a4f4dfe9d1~mv2.png/v1/fill/w_43,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/zFiXWHyH_400x400.png' },
  { name: 'uniswap', url: 'https://app.uniswap.org/explore/tokens/ethereum/0x6982508145454ce325ddbe47a25d4ec3d2311933', logo: 'https://static.wixstatic.com/media/c267fc_a6c4d8b7f63e4eb7b4e876f778fb4b79~mv2.png/v1/fill/w_43,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Uniswap_Logo_svg.png' },
];

export default function HeroSection({ onConnect, walletAddress }) {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Faded background Pepe silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <img
          src="https://static.wixstatic.com/media/1f3f2b_21fe381c89284e328827e6c35f4b5513~mv2.png/v1/fill/w_476,h_483,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T220301_142.png"
          alt=""
          className="w-[600px] scale-150"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-7xl sm:text-8xl text-white mb-4 leading-none">
              $pepe
            </h1>
            <p className="text-white text-lg sm:text-xl font-body leading-relaxed mb-8 max-w-md">
              The most memeable memecoin in existence. The dogs have had their day, it's time for Pepe to take reign.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-10">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full overflow-hidden hover:scale-110 transition-transform">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </a>
              ))}
            </div>

            {/* Claim Airdrop CTA */}
            <button
              onClick={onConnect}
              className="border-2 border-white text-white font-body font-bold text-base px-8 py-3 rounded-full hover:bg-white hover:text-green-700 transition-all"
            >
              {walletAddress ? '🎁 claim airdrop' : '🐸 claim your $pepe airdrop'}
            </button>
          </motion.div>

          {/* Right - Pepe Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.img
              src="https://static.wixstatic.com/media/1f3f2b_21fe381c89284e328827e6c35f4b5513~mv2.png/v1/fill/w_476,h_483,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T220301_142.png"
              alt="Pepe"
              className="w-72 sm:w-96 lg:w-[440px] drop-shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        {/* Exchange Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 pb-16"
        >
          {exchanges.map((ex) => (
            <a
              key={ex.name}
              href={ex.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-white/70 rounded-full py-2.5 px-4 hover:bg-white/10 transition-all group"
            >
              <span className="text-white font-body font-semibold text-sm sm:text-base">{ex.name}</span>
              <img src={ex.logo} alt={ex.name} className="w-6 h-6 sm:w-7 sm:h-7 object-contain rounded-full" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}