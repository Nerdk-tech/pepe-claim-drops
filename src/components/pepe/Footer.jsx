import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 text-center" style={{ backgroundColor: '#3a7030' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Twitter */}
        <div className="flex justify-center mb-6">
          <a href="https://twitter.com/pepecoineth" target="_blank" rel="noopener noreferrer"
            className="w-16 h-16 rounded-full overflow-hidden hover:scale-110 transition-transform">
            <img
              src="https://static.wixstatic.com/media/1f3f2b_f59a557a4c72456581fa206a9247dcac~mv2.png/v1/fill/w_85,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/twtttt.png"
              alt="Twitter"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://static.wixstatic.com/media/1f3f2b_e78823e3b50f4f76963293a9ab1e19c3~mv2.png/v1/fill/w_211,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pepetitle.png"
            alt="$pepe"
            className="h-12 object-contain"
          />
        </div>

        {/* Disclaimer */}
        <div className="space-y-3 text-white/70 font-body text-sm max-w-xl mx-auto">
          <p>
            $pepe coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.
          </p>
          <p>
            $PEPE is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}