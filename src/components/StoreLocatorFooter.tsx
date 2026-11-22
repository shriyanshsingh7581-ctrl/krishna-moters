import {
  MapPin,
  Navigation,
  Copy,
  Phone,
  Clock,
  Globe,
  MessageCircle,
  Check,
} from 'lucide-react';
import { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { STORE_INFO, buildWhatsAppUrl } from '../data/catalogData';
import { NavSectionId } from './HeaderAndNav';

interface StoreLocatorFooterProps {
  onCopyAddress: () => void;
  onNavigate: (id: NavSectionId) => void;
}

export function StoreLocatorFooter({
  onCopyAddress,
  onNavigate,
}: StoreLocatorFooterProps) {
  const [copiedLocal, setCopiedLocal] = useState(false);

  const handleCopy = () => {
    onCopyAddress();
    setCopiedLocal(true);
    window.setTimeout(() => setCopiedLocal(false), 2200);
  };

  const quickWaChat = buildWhatsAppUrl(
    'Hello Krishna Motors Patiala! I would like to visit your shop on Bhadson Road or check spare part availability.'
  );

  return (
    <>
      {/* H. STORE LOCATOR & DUAL CALL BAR */}
      <section id="contact" className="py-12 sm:py-16 border-b border-white/10 bg-[#0D1017]/65">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-7">
            <p className="text-xs font-semibold tracking-wider text-[#F59E0B] mb-1">
              Visit Our Patiala Counter
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Store Locator &amp; Direct Call Desk
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Address Card */}
            <div className="lg:col-span-7 rounded-3xl chrome-card p-6 sm:p-7 flex flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#EF4444] mb-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>BHADSON ROAD, PATIALA</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  KRISHNA MOTORS
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#D1D5DB] leading-relaxed max-w-xl">
                  {STORE_INFO.address}
                </p>

                {/* Shop Hours */}
                <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#0A0C10]/75 border border-white/10 p-3.5 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">Mon – Sat</div>
                      <div className="text-xs text-[#9CA3AF] font-mono-tech mt-0.5">
                        9:30 AM – 8:30 PM
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#0A0C10]/75 border border-white/10 p-3.5 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">Sunday</div>
                      <div className="text-xs text-[#9CA3AF] mt-0.5">
                        Open · Call to Confirm
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions + Copy Address Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[48px] px-5 py-3 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#EF4444] hover:brightness-110 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-all active:scale-[0.98] whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 shrink-0" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="min-h-[48px] px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {copiedLocal ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-emerald-300">Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 shrink-0" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Dual Click-to-Call Desk Card */}
            <div className="lg:col-span-5 rounded-3xl chrome-card p-6 sm:p-7 flex flex-col justify-between gap-5">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#F59E0B] mb-1">
                  Instant Counter Support
                </p>
                <h3 className="font-display font-bold text-2xl text-white">
                  Direct Call &amp; WhatsApp Desk
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#9CA3AF]">
                  Call our Patiala counter directly for urgent parts availability, mechanic bulk rates, or engine oil quotes.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:+91${STORE_INFO.primaryPhoneRaw}`}
                  className="w-full min-h-[60px] px-4 py-3 rounded-2xl bg-[#0A0C10]/85 hover:bg-[#151A25] border border-white/12 hover:border-[#EF4444]/50 flex items-center justify-between gap-3 transition-all active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/35 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#EF4444]" />
                    </span>
                    <div>
                      <div className="text-[11px] font-medium text-[#9CA3AF]">
                        Primary Phone &amp; WhatsApp
                      </div>
                      <div className="font-mono-tech text-base sm:text-lg font-bold text-white">
                        +91 {STORE_INFO.primaryPhoneRaw}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#EF4444] shrink-0">
                    Call Now →
                  </span>
                </a>

                <a
                  href={`tel:+91${STORE_INFO.secondaryPhoneRaw}`}
                  className="w-full min-h-[60px] px-4 py-3 rounded-2xl bg-[#0A0C10]/85 hover:bg-[#151A25] border border-white/12 hover:border-[#F59E0B]/50 flex items-center justify-between gap-3 transition-all active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/35 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#F59E0B]" />
                    </span>
                    <div>
                      <div className="text-[11px] font-medium text-[#9CA3AF]">
                        Secondary Counter Line
                      </div>
                      <div className="font-mono-tech text-base sm:text-lg font-bold text-white">
                        +91 {STORE_INFO.secondaryPhoneRaw}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#F59E0B] shrink-0">
                    Call Now →
                  </span>
                </a>

                <a
                  href={quickWaChat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Chat on WhatsApp (+91 7814090007)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAN FOOTER (with extra mobile bottom padding so fixed bottom bar never overlaps footer) */}
      <footer className="bg-[#080A0E] pt-10 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
            {/* Brand Column */}
            <div className="md:col-span-5 flex items-start gap-4">
              <BrandLogo size="md" glow />
              <div>
                <div className="font-display font-bold text-xl tracking-wide text-white">
                  KRISHNA <span className="text-[#EF4444]">MOTORS</span>
                </div>
                <p className="text-xs italic text-[#F59E0B] mt-0.5">
                  &ldquo;{STORE_INFO.tagline}&rdquo;
                </p>
                <p className="text-xs text-[#9CA3AF] mt-2 leading-relaxed max-w-sm">
                  Trusted Since 2007. Genuine Car &amp; Bike Spare Parts and Lubricants on Bhadson Road, Patiala, Punjab.
                </p>
                <a
                  href={`https://${STORE_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#E5E7EB] hover:text-[#EF4444] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#EF4444]" />
                  <span>{STORE_INFO.website}</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="font-display font-bold text-sm tracking-wider text-white mb-3">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs text-[#9CA3AF]">
                {(
                  [
                    ['home', 'Home'],
                    ['part-finder', 'Smart Part Finder'],
                    ['catalog', 'Spare Parts Catalog'],
                    ['oil-guide', 'Engine Oil Advisor'],
                    ['contact', 'Store Locator & Contact'],
                  ] as [NavSectionId, string][]
                ).map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(id);
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Summary */}
            <div className="md:col-span-4">
              <h4 className="font-display font-bold text-sm tracking-wider text-white mb-3">
                Patiala Store Details
              </h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {STORE_INFO.address}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono-tech text-xs text-[#E5E7EB]">
                <a href={`tel:+91${STORE_INFO.primaryPhoneRaw}`} className="hover:text-[#EF4444]">
                  +91 {STORE_INFO.primaryPhoneRaw}
                </a>
                <a href={`tel:+91${STORE_INFO.secondaryPhoneRaw}`} className="hover:text-[#F59E0B]">
                  +91 {STORE_INFO.secondaryPhoneRaw}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B7280]">
            <p>
              © {new Date().getFullYear()} Krishna Motors, Patiala. All rights reserved.
            </p>
            <p className="text-[#9CA3AF]/90 font-medium">
              Live Demo Preview • Crafted by Aura AI Automations
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
