import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection({ onCollaborateClick }: { onCollaborateClick: () => void }) {
  const brandLogos = [
    { name: 'Sephora', width: 'w-20' },
    { name: 'TCL', width: 'w-16' },
    { name: 'Costco', width: 'w-20' },
    { name: 'Nutribullet', width: 'w-24' },
    { name: 'L\'Oréal', width: 'w-20' },
    { name: 'SHEIN', width: 'w-20' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#101010] via-[#1a1a1a] to-[#101010]" />
      
      {/* Subtle gold accent overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#D4AF37] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent">
                  Authentic Storytelling
                </span>
                <br />
                <span className="text-white">
                  That Turns Attention Into Action
                </span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
              
              <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                <span className="text-[#D4AF37] font-semibold">Rachna Panday</span> | UGC Content Creator & Influencer
                <br />
                <span className="text-gray-400">300K+ Highly Engaged Followers</span>
              </p>
            </div>

            <button
              type="button"
              onClick={onCollaborateClick}
              className="group relative px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#101010] font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105"
            >
              <span className="relative z-10">Collaborate With Me</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>

            {/* Trust Strip - Desktop */}
            <div className="hidden md:block pt-8 border-t border-[#D4AF37]/20">
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">Trusted By</p>
              <div className="flex flex-wrap items-center gap-8">
                {brandLogos.map((logo, index) => (
                  <div 
                    key={index}
                    className={`${logo.width} h-8 bg-white/10 rounded flex items-center justify-center`}
                  >
                    <span className="text-xs text-[#D4AF37] font-medium">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:self-start">
            <div className="relative z-10">
              {/* Gold border accent */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] rounded-3xl blur-xl opacity-30" />
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30">
                <ImageWithFallback
                  src="/Rachna-herosection-image.jpeg"
                  alt="Rachna Panday - Professional UGC Creator"
                  className="w-full h-[600px] object-cover lg:object-top"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#D4AF37]/30 rounded-full" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#D4AF37]/20 rounded-full" />
          </div>
        </div>

        {/* Trust Strip - Mobile */}
        <div className="md:hidden mt-12 pt-8 border-t border-[#D4AF37]/20">
          <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">Trusted By</p>
          <div className="flex flex-wrap items-center gap-4">
            {brandLogos.slice(0, 4).map((logo, index) => (
              <div 
                key={index}
                className={`${logo.width} h-8 bg-white/10 rounded flex items-center justify-center`}
              >
                <span className="text-xs text-[#D4AF37] font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full" />
        </div>
      </div>
    </section>
  );
}
