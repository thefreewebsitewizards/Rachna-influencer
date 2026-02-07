import { Instagram, Mail, FileText } from 'lucide-react';

export function Footer({ onRequestMediaKit }: { onRequestMediaKit: () => void }) {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#000000]" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Main CTA Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">Let's Create</span>{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent">
                Something Iconic
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ready to elevate your brand with authentic, high-impact UGC? Let's collaborate.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Instagram */}
            <a
              href="https://instagram.com/rachna.panday"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-2xl p-6 hover:border-[#D4AF37] transition-all group-hover:transform group-hover:-translate-y-1">
                <Instagram className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">Instagram</p>
                <p className="text-gray-400 text-sm">@rachna.panday</p>
              </div>
            </a>

            {/* Email Primary */}
            <a
              href="mailto:kanchu15aug@gmail.com"
              className="group relative block"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-2xl p-6 hover:border-[#D4AF37] transition-all group-hover:transform group-hover:-translate-y-1">
                <Mail className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">Primary Email</p>
                <p className="text-gray-400 text-sm break-all">kanchu15aug@gmail.com</p>
              </div>
            </a>

            {/* Email Secondary */}
            <a
              href="mailto:rachnapanday21867@gmail.com"
              className="group relative block"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-2xl p-6 hover:border-[#D4AF37] transition-all group-hover:transform group-hover:-translate-y-1">
                <Mail className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">Business Email</p>
                <p className="text-gray-400 text-sm break-all">rachnapanday21867@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Media Kit CTA */}
          <div className="pt-8">
            <button
              type="button"
              onClick={onRequestMediaKit}
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#101010] transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              <span>Request Media Kit</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F3E5AB] flex items-center justify-center">
              <span className="text-[#101010] font-bold text-xs">RP</span>
            </div>
            <p>
              © 2026 Rachna Panday. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest">The Gold Standard of UGC</span>
          </div>
        </div>

        {/* Decorative tagline */}
        <div className="text-center mt-12">
          <p className="text-xs text-gray-600 uppercase tracking-[0.3em]">
            Authentic • Professional • Results-Driven
          </p>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-[#D4AF37]/5 blur-3xl" />
    </footer>
  );
}
