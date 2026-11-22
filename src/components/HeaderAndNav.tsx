import { Home, Search, LayoutGrid, Droplets, MapPin, Phone, ShoppingBag } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { STORE_INFO } from '../data/catalogData';

export type NavSectionId = 'home' | 'part-finder' | 'catalog' | 'oil-guide' | 'contact';

interface HeaderAndNavProps {
  activeSection: NavSectionId;
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (id: NavSectionId) => void;
}

const NAV_ITEMS: { id: NavSectionId; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'part-finder', label: 'Part Finder', icon: Search },
  { id: 'catalog', label: 'Catalog', icon: LayoutGrid },
  { id: 'oil-guide', label: 'Oil Guide', icon: Droplets },
  { id: 'contact', label: 'Contact', icon: MapPin },
];

export function HeaderAndNav({
  activeSection,
  cartCount,
  onOpenCart,
  onNavigate,
}: HeaderAndNavProps) {
  return (
    <>
      {/* Sticky Glass Top Bar */}
      <header className="sticky top-0 z-40 h-14 md:h-16 bg-[#0A0C10]/88 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto h-full px-3 sm:px-6 flex items-center justify-between gap-4">
          {/* Left: Official Logo + Brand Title + Live Shop Open Indicator */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="flex items-center gap-2.5 min-w-0 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] rounded-lg"
          >
            <BrandLogo size="sm" />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg sm:text-xl tracking-wide text-[#F9FAFB] whitespace-nowrap">
                KRISHNA <span className="text-[#EF4444]">MOTORS</span>
              </span>
              <span className="mt-0.5 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#9CA3AF] whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)]" aria-hidden="true" />
                <span className="text-emerald-400 font-semibold">Open Now</span>
                <span aria-hidden="true">·</span>
                <span>Patiala</span>
              </span>
            </div>
          </a>

          {/* Center: Desktop Single-Line Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive ? 'text-white font-semibold' : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-[19px] h-[2px] bg-gradient-to-r from-[#DC2626] to-[#EF4444]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Quick Call + Inquiry Cart with Live Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:+91${STORE_INFO.primaryPhoneRaw}`}
              aria-label={`Call Krishna Motors at ${STORE_INFO.primaryPhoneDisplay}`}
              className="min-h-[44px] min-w-[44px] sm:px-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/12 text-[#F9FAFB] flex items-center justify-center gap-2 transition-colors active:scale-[0.97]"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span className="hidden lg:inline font-mono-tech text-xs font-semibold whitespace-nowrap">
                {STORE_INFO.primaryPhoneRaw}
              </span>
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`Open Parts Inquiry List (${cartCount} items)`}
              className="relative min-h-[44px] px-3 sm:px-4 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#EF4444] hover:brightness-110 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-all active:scale-[0.97] whitespace-nowrap cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Inquiry List</span>
              <span className="min-w-[20px] h-5 px-1.5 rounded-full bg-[#0A0C10] text-white font-mono-tech text-[11px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Sticky Bottom Mobile Navigation Bar (Thumb-Friendly, Mobile Only) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D1017]/95 backdrop-blur-xl border-t border-white/12 pb-safe"
      >
        <div className="grid grid-cols-5 h-[58px] max-w-md mx-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`relative min-h-[44px] flex flex-col items-center justify-center gap-0.5 transition-colors cursor-pointer ${
                  isActive ? 'text-[#EF4444]' : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2.5px] rounded-b-full bg-gradient-to-r from-[#DC2626] to-[#EF4444]" />
                )}
                <Icon className={`w-[19px] h-[19px] ${isActive ? 'stroke-[2.4]' : 'stroke-[1.9]'}`} />
                <span className="text-[10px] font-semibold tracking-tight leading-none whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
