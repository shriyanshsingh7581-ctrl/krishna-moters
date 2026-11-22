import { useRef } from 'react';
import {
  ShieldCheck,
  Layers,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from 'lucide-react';
import { TRUSTED_BRANDS, TESTIMONIALS } from '../data/catalogData';

export function BrandsAndReviewsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const offset = dir === 'left' ? -320 : 320;
    carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <>
      {/* F. BRANDS WE DEAL IN (Auto-Scrolling Metallic Marquee) */}
      <section aria-label="Authorized and Genuine Brands" className="py-10 sm:py-12 border-b border-white/10 bg-[#0D1017]/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#F59E0B]">
              100% Authentic Sourcing
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Brands We Deal In
            </h2>
          </div>
          <span className="hidden sm:inline text-xs text-[#9CA3AF]">
            OEM &amp; Leading Global Lubricant Brands
          </span>
        </div>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee gap-3 py-1">
            {[...TRUSTED_BRANDS, ...TRUSTED_BRANDS].map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="shrink-0 min-h-[48px] px-5 sm:px-6 rounded-xl bg-[#131720] border border-white/12 flex items-center justify-center shadow-sm"
              >
                <span className="font-display font-bold text-base sm:text-lg tracking-wider text-[#E5E7EB] whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G. WHY CHOOSE KRISHNA MOTORS & PATIALA CUSTOMER REVIEWS */}
      <section className="py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* 3 Bento Feature Cards */}
          <div className="mb-12 sm:mb-16">
            <p className="text-xs font-semibold tracking-wider text-[#F59E0B] mb-1">
              Patiala&apos;s Automotive Counter Since 2007
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
              Why Drivers &amp; Mechanics Choose Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="rounded-2xl chrome-card p-6 flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/35 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#EF4444]" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  100% Genuine Products
                </h3>
                <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">
                  Zero duplicate or counterfeit parts. Every engine oil canister, filter, and clutch kit comes sealed with verifiable OEM holograms and genuine billing.
                </p>
              </div>

              <div className="rounded-2xl chrome-card p-6 flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/35 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  Wide Range (Car &amp; Bike)
                </h3>
                <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">
                  5,000+ ready-stock spares under one roof — covering Maruti Suzuki, Hyundai, Tata, Mahindra, Toyota, Honda cars plus Royal Enfield, Hero, Bajaj, TVS &amp; Yamaha two-wheelers.
                </p>
              </div>

              <div className="rounded-2xl chrome-card p-6 flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  Trusted Service Since 2007
                </h3>
                <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">
                  19+ years of honest part-matching and fair counter pricing for Patiala families, daily commuters, highway riders, and local multi-brand garages.
                </p>
              </div>
            </div>
          </div>

          {/* Patiala Customer & Mechanic Reviews Carousel */}
          <div>
            <div className="flex items-end justify-between gap-4 mb-5">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#F59E0B] mb-1">
                  Verified Local Trust
                </p>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Patiala Customer &amp; Mechanic Reviews
                </h2>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollCarousel('left')}
                  aria-label="Previous reviews"
                  className="w-11 h-11 rounded-xl bg-[#131720] hover:bg-[#1E2432] border border-white/12 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel('right')}
                  aria-label="Next reviews"
                  className="w-11 h-11 rounded-xl bg-[#131720] hover:bg-[#1E2432] border border-white/12 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {TESTIMONIALS.map((review) => (
                <article
                  key={review.id}
                  className="snap-start shrink-0 w-[86vw] sm:w-[360px] rounded-2xl chrome-card p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-0.5 text-[#F59E0B]" aria-label="5 out of 5 stars">
                        {Array.from({ length: review.rating }).map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 fill-[#F59E0B]" />
                        ))}
                      </div>
                      <span className="text-[11px] font-medium text-[#9CA3AF]">
                        {review.vehicle}
                      </span>
                    </div>

                    <p className="text-sm text-[#E5E7EB] leading-relaxed">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold text-white">{review.name}</div>
                      <div className="text-xs text-[#9CA3AF]">{review.role}</div>
                    </div>
                    <div className="inline-flex items-center gap-1 text-[11px] text-[#9CA3AF] shrink-0">
                      <MapPin className="w-3 h-3 text-[#EF4444]" />
                      <span>{review.location}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
