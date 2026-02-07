import { Heart, Video, Globe, TrendingUp } from 'lucide-react';

export function ValueProposition() {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Influence',
      description: 'Building genuine connections that resonate with audiences and create lasting brand loyalty',
    },
    {
      icon: Video,
      title: 'UGC Expertise',
      description: 'Professional content creation that captures attention and tells compelling brand stories',
    },
    {
      icon: Globe,
      title: 'Diverse Reach',
      description: 'Access to 300K+ engaged followers across multiple demographics and interest groups',
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Campaigns designed to drive traffic, buzz, and real, measurable results for your brand',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-[#0a0a0a] to-[#101010]" />
      
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-block">
            <p className="text-sm text-[#D4AF37] uppercase tracking-[0.3em] font-semibold">Partnership Benefits</p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Why Brands</span>{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent">
              Partner With Me
            </span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative text-center space-y-4 p-6">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="relative">
                      {/* Icon background glow */}
                      <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Icon container */}
                      <div className="relative w-20 h-20 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-9 h-9 text-[#D4AF37]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-1 w-16 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial / Quote Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-[#D4AF37]/10 to-[#D4AF37]/5 rounded-3xl blur-2xl" />
            <div className="relative bg-[#1a1a1a]/50 border border-[#D4AF37]/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <div className="text-6xl text-[#D4AF37]/20 font-serif mb-4">"</div>
              <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-6">
                Every campaign is crafted with precision, authenticity, and a deep understanding of what drives engagement in today's digital landscape.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#D4AF37] font-semibold">Rachna Panday</p>
                  <p className="text-gray-400 text-sm">The Gold Standard of UGC</p>
                </div>
                <div className="text-4xl">✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
    </section>
  );
}
