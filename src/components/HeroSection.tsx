import { ArrowDownRight, MessageCircle, ShieldCheck, Layers, Award, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { STORE_INFO, buildWhatsAppUrl } from '../data/catalogData';

interface HeroSectionProps {
  onFindPartClick: () => void;
}

export function HeroSection({ onFindPartClick }: HeroSectionProps) {
  const heroWhatsAppLink = buildWhatsAppUrl(
    'Hello Krishna Motors Patiala! I need genuine spare parts / engine oil for my vehicle. Please help with availability & price.'
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-carbon-grid border-b border-white/10 pt-7 pb-10 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20"
    >
      {/* Subtle decorative machined gear ring watermark in background corner */}
      <svg
        viewBox="0 0 240 240"
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-24 -top-20 w-72 h-72 sm:w-96 sm:h-96 opacity-[0.045] text-white animate-gear-slow"
      >
        <circle cx="120" cy="120" r="84" fill="none" stroke="currentColor" strokeWidth="18" strokeDasharray="16 14" />
        <circle cx="120" cy="120" r="56" fill="none" stroke="currentColor" strokeWidth="6" />
        <circle cx="120" cy="120" r="24" fill="none" stroke="currentColor" strokeWidth="8" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Primary Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Hero Trust Badge + Official Emblem Lockup */}
            <div className="flex items-center gap-3 mb-5">
              <BrandLogo size="md" glow className="lg:hidden" />
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131720]/90 border border-[#F59E0B]/35 text-[#F59E0B] text-[11px] sm:text-xs font-bold tracking-[0.12em]">
                <span aria-hidden="true">★</span>
                <span>TRUSTED IN PATIALA SINCE 2007</span>
                <span aria-hidden="true">★</span>
              </div>
            </div>

            {/* Bold Display Headline */}
            <h1 className="font-display font-bold text-[2.25rem] sm:text-5xl lg:text-[3.65rem] leading-[1.03] tracking-tight text-[#F9FAFB] [text-wrap:balance]">
              Genuine Car &amp; Bike{' '}
              <span className="bg-gradient-to-r from-[#EF4444] via-[#F87171] to-[#F59E0B] bg-clip-text text-transparent">
                Spare Parts &amp; Lubricants
              </span>
            </h1>

            {/* Italic Tagline */}
            <p className="mt-3 text-base sm:text-lg italic font-medium text-[#F59E0B]">
              &ldquo;{STORE_INFO.tagline}&rdquo;
            </p>

            {/* Sub-headline */}
            <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] max-w-xl leading-relaxed">
              {STORE_INFO.subHeadline}. Serving Patiala car owners, riders &amp; workshops from Bhadson Road with 100% authentic OEM parts.
            </p>

            {/* 2 Primary Action Buttons */}
            <div className="mt-6 w-full sm:w-auto flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onFindPartClick}
                className="min-h-[50px] px-6 py-3 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#EF4444] hover:brightness-110 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_10px_28px_-8px_rgba(220,38,38,0.65)] transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <span>Find Your Part</span>
                <ArrowDownRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={heroWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[50px] px-6 py-3 rounded-xl bg-[#131720] hover:bg-[#1B2230] border border-emerald-500/40 text-[#F9FAFB] font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>

            {/* Live 3-Column Trust Strip */}
            <div className="mt-8 w-full grid grid-cols-3 gap-2.5 sm:gap-4 pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl sm:text-3xl text-white tabular-nums leading-none">
                  19+ <span className="text-base sm:text-lg text-[#EF4444]">Yrs</span>
                </span>
                <span className="mt-1 text-[11px] sm:text-xs font-medium text-[#9CA3AF] leading-snug">
                  Legacy Since 2007
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-2.5 sm:pl-4">
                <span className="font-display font-bold text-2xl sm:text-3xl text-white tabular-nums leading-none">
                  100<span className="text-base sm:text-lg text-[#F59E0B]">%</span>
                </span>
                <span className="mt-1 text-[11px] sm:text-xs font-medium text-[#9CA3AF] leading-snug">
                  OEM Genuine Parts
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-2.5 sm:pl-4">
                <span className="font-display font-bold text-2xl sm:text-3xl text-white tabular-nums leading-none">
                  5,000<span className="text-base sm:text-lg text-[#EF4444]">+</span>
                </span>
                <span className="mt-1 text-[11px] sm:text-xs font-medium text-[#9CA3AF] leading-snug">
                  Parts Ready Stock
                </span>
              </div>
            </div>
          </div>

          {/* Right Brand Emblem Showcase Card (Visible cleanly on Tablet/Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="relative w-full max-w-md rounded-3xl chrome-card p-7 flex flex-col items-center text-center overflow-hidden">
              {/* Top red racing bar accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#EF4444] to-transparent" />

              <BrandLogo size="xl" glow className="mb-5" />

              <h2 className="font-display font-bold text-2xl tracking-wider text-white">
                KRISHNA MOTORS
              </h2>
              <p className="text-xs font-medium text-[#F59E0B] tracking-wide mt-0.5">
                Car &amp; Bike Spare Parts and Lubricants
              </p>

              {/* Core 3 USPs */}
              <div className="mt-6 w-full grid grid-cols-3 gap-2 pt-5 border-t border-white/10 text-center">
                <div className="flex flex-col items-center gap-1.5">
                  <ShieldCheck className="w-5 h-5 text-[#EF4444]" />
                  <span className="text-[11px] font-semibold text-[#E5E7EB] leading-tight">
                    100% Genuine
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Layers className="w-5 h-5 text-[#F59E0B]" />
                  <span className="text-[11px] font-semibold text-[#E5E7EB] leading-tight">
                    Car &amp; Bike Range
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <span className="text-[11px] font-semibold text-[#E5E7EB] leading-tight">
                    Trusted Service
                  </span>
                </div>
              </div>

              {/* Store Quick Pin */}
              <div className="mt-5 w-full rounded-2xl bg-[#0A0C10]/80 border border-white/10 px-4 py-3 flex items-center gap-2.5 text-left">
                <MapPin className="w-4 h-4 text-[#EF4444] shrink-0" />
                <p className="text-xs text-[#9CA3AF] leading-snug">
                  Opp. Amar Bagh, Gali No. 5, Near Jashan Palace, Bhadson Road, Patiala
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
