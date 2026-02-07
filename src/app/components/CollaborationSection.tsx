export function CollaborationSection({ onStartCollaboration }: { onStartCollaboration: () => void }) {
  const formats = [
    { name: 'High-Energy Reels', emoji: '🎬' },
    { name: 'Aesthetic Feed Posts', emoji: '📸' },
    { name: 'Interactive Stories', emoji: '✨' },
    { name: 'Giveaways', emoji: '🎁' },
    { name: 'UGC Ads', emoji: '🎯' },
  ];

  return (
    <section id="collaborate" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-[#1a1a1a] to-[#101010]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-block">
            <p className="text-sm text-[#D4AF37] uppercase tracking-[0.3em] font-semibold">Services Offered</p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-2" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Collaboration</span>{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent">
              Formats
            </span>
          </h2>
          
          <p className="text-lg text-gray-400">
            Flexible content solutions tailored to your brand's unique needs and goals
          </p>
        </div>

        {/* Formats Display */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {formats.map((format, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-full blur opacity-0 group-hover:opacity-50 transition duration-300" />
              
              {/* Pill */}
              <div className="relative px-8 py-4 bg-[#1a1a1a] border-2 border-[#D4AF37]/30 rounded-full hover:border-[#D4AF37] transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{format.emoji}</span>
                  <span className="text-white font-semibold whitespace-nowrap">
                    {format.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Quality</h3>
              <p className="text-gray-400 text-sm">
                Professional-grade content that aligns with your brand's aesthetic and messaging
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Turnaround</h3>
              <p className="text-gray-400 text-sm">
                Efficient content delivery without compromising on creativity or quality
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Data-Driven</h3>
              <p className="text-gray-400 text-sm">
                Strategic content backed by analytics and audience insights for maximum impact
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            type="button"
            onClick={onStartCollaboration}
            className="group relative px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#101010] font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-105"
          >
            <span className="relative z-10">Start a Collaboration</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Media kit, analytics, and case studies available upon request
          </p>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
    </section>
  );
}
