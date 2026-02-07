import { Smartphone, Coffee, Home, Sparkles, Baby, Shirt } from 'lucide-react';

export function PortfolioSection({ onViewPortfolio }: { onViewPortfolio: () => void }) {
  const niches = [
    {
      title: 'Tech & Gadgets',
      icon: Smartphone,
      description: 'Smart devices, electronics, and innovative tech solutions',
      gradient: 'from-[#D4AF37] to-[#F3E5AB]',
    },
    {
      title: 'Food & Beverage',
      icon: Coffee,
      description: 'Culinary delights, beverages, and gourmet experiences',
      gradient: 'from-[#F3E5AB] to-[#D4AF37]',
    },
    {
      title: 'Lifestyle & Home',
      icon: Home,
      description: 'Interior design, home essentials, and living spaces',
      gradient: 'from-[#D4AF37] to-[#F3E5AB]',
    },
    {
      title: 'Wellness & Beauty',
      icon: Sparkles,
      description: 'Skincare, cosmetics, and self-care products',
      gradient: 'from-[#F3E5AB] to-[#D4AF37]',
    },
    {
      title: 'Family & Kids',
      icon: Baby,
      description: 'Parenting, toys, education, and family lifestyle',
      gradient: 'from-[#D4AF37] to-[#F3E5AB]',
    },
    {
      title: 'Fashion & Outdoors',
      icon: Shirt,
      description: 'Apparel, accessories, and outdoor adventures',
      gradient: 'from-[#F3E5AB] to-[#D4AF37]',
    },
  ];

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-block">
            <p className="text-sm text-[#D4AF37] uppercase tracking-[0.3em] font-semibold">Content Expertise</p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Diverse</span>{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent">
              Content Niches
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Specializing in creating authentic, engaging content across multiple verticals to help brands connect with their target audiences
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {niches.map((niche, index) => {
            const Icon = niche.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${niche.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
                
                {/* Card */}
                <div className="relative bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-2xl p-8 h-full hover:border-[#D4AF37]/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${niche.gradient} p-0.5`}>
                      <div className="w-full h-full bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#D4AF37]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {niche.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {niche.description}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${niche.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Looking for content in a specific niche?
          </p>
          <button
            type="button"
            onClick={onViewPortfolio}
            className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#101010] transition-all duration-300"
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
