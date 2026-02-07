import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const stats = [
    { number: '300K+', label: 'Engaged Followers', gradient: 'from-[#D4AF37] to-[#F3E5AB]' },
    { number: '1000+', label: 'Brand Partnerships', gradient: 'from-[#F3E5AB] to-[#D4AF37]' },
    { number: 'High', label: 'Engagement Rate', gradient: 'from-[#D4AF37] to-[#F3E5AB]' },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-[#1a1a1a] to-[#101010]" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-sm text-[#D4AF37] uppercase tracking-[0.3em] font-semibold">About the Creator</p>
                <div className="h-px w-full bg-gradient-to-r from-[#D4AF37] to-transparent mt-2" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent">
                  Meet Rachna
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I create <span className="text-[#D4AF37] font-semibold">authentic, high-impact content</span> that helps brands build trust, drive engagement, and convert audiences into loyal customers.
              </p>
              
              <p>
                With over <span className="text-white font-semibold">300,000 highly engaged followers</span> and partnerships with <span className="text-white font-semibold">1000+ global brands</span>, I specialize in crafting compelling UGC that resonates across multiple niches—from tech and beauty to lifestyle and wellness.
              </p>

              <p className="text-[#F3E5AB] italic">
                "My mission is to be The Gold Standard of UGC—delivering content that doesn't just capture attention, but drives real results."
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-xl blur-sm group-hover:blur-md transition-all" />
                  <div className="relative bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4 hover:border-[#D4AF37]/50 transition-all">
                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Decorative border */}
              <div className="absolute -inset-3 border-2 border-[#D4AF37]/20 rounded-2xl" />
              <div className="absolute -inset-6 border border-[#D4AF37]/10 rounded-3xl" />
              
              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="/Rachna-image.jpeg"
                  alt="Rachna Panday - Content Creation"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating accent */}
              <div className="absolute bottom-8 right-8 bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-[#D4AF37] text-3xl font-bold">✨</div>
                <p className="text-white text-sm font-semibold mt-2">Results-Driven</p>
                <p className="text-gray-400 text-xs">Authentic Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
    </section>
  );
}
