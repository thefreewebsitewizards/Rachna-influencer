export function BrandPartners() {
  const brandCategories = [
    {
      category: 'Fashion & Lifestyle',
      brands: ['SHEIN', 'Fabletics', 'Halara', 'Zara', 'H&M'],
    },
    {
      category: 'Beauty & Wellness',
      brands: ['Sephora', 'L\'Oréal', 'Kiehl\'s', 'CeraVe', 'Glossier'],
    },
    {
      category: 'Tech & Home',
      brands: ['TCL', 'Nutribullet', 'Costco', 'Samsung', 'Philips'],
    },
    {
      category: 'Food & Beverage',
      brands: ['Mionetto', 'Ghost Hill Vodka', 'Nestlé', 'Coca-Cola', 'Starbucks'],
    },
  ];

  const allBrands = brandCategories.flatMap(cat => cat.brands);

  return (
    <section id="partners" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-block">
            <p className="text-sm text-[#D4AF37] uppercase tracking-[0.3em] font-semibold">Trusted Partnerships</p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent">
              Brand Partners
            </span>
          </h2>
          
          <p className="text-lg text-gray-400">
            Collaborated with <span className="text-[#D4AF37] font-semibold">1000+ global brands</span> across multiple industries
          </p>
        </div>

        {/* Logo Grid by Category */}
        <div className="space-y-12">
          {brandCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-6">
              <h3 className="text-sm text-gray-500 uppercase tracking-widest text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {category.brands.map((brand, brandIndex) => (
                  <div
                    key={brandIndex}
                    className="group relative"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Logo container */}
                    <div className="relative w-32 h-16 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 group-hover:text-[#D4AF37] transition-colors duration-300">
                          {brand}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Ticker - Featured Brands */}
        <div className="mt-20 relative">
          <div className="border-y border-[#D4AF37]/20 py-8 overflow-hidden">
            <div className="flex items-center gap-12 animate-scroll">
              {/* Duplicate brands for seamless loop effect */}
              {[...allBrands, ...allBrands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-12 flex items-center justify-center"
                >
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <p className="text-sm text-gray-400 uppercase tracking-wider">Brand Partnerships</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent mb-2">
              50+
            </div>
            <p className="text-sm text-gray-400 uppercase tracking-wider">Industries Covered</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent mb-2">
              95%
            </div>
            <p className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent mb-2">
              Global
            </div>
            <p className="text-sm text-gray-400 uppercase tracking-wider">Brand Reach</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
