import { useState } from 'react';
import {
  Droplets,
  CheckCircle2,
  MessageCircle,
  Plus,
  Gauge,
  Shield,
  CalendarClock,
} from 'lucide-react';
import {
  OilVehicleType,
  DrivingCondition,
  OIL_VEHICLE_OPTIONS,
  DRIVING_CONDITION_OPTIONS,
  OIL_MATRIX,
  PRODUCTS,
  ProductItem,
  buildWhatsAppUrl,
} from '../data/catalogData';
import { PartArtwork } from './PartArtwork';

interface OilAdvisorSectionProps {
  onAddToCart: (product: ProductItem, vehicleContext?: string) => void;
}

export function OilAdvisorSection({ onAddToCart }: OilAdvisorSectionProps) {
  const [vehicleType, setVehicleType] = useState<OilVehicleType>('car-petrol');
  const [condition, setCondition] = useState<DrivingCondition>('city');

  const recommendation = OIL_MATRIX[vehicleType][condition];
  const matchedProduct =
    PRODUCTS.find((p) => p.id === recommendation.matchedProductId) ?? PRODUCTS[0];

  const vehicleLabel =
    OIL_VEHICLE_OPTIONS.find((v) => v.id === vehicleType)?.label ?? 'Vehicle';
  const conditionLabel =
    DRIVING_CONDITION_OPTIONS.find((c) => c.id === condition)?.label ?? 'Daily';

  const orderOilWhatsAppUrl = buildWhatsAppUrl(
    `Hello Krishna Motors Patiala! From your Engine Oil Advisor, I would like to order:\n• Vehicle Type: ${vehicleLabel}\n• Driving Condition: ${conditionLabel}\n• Recommended Oil Grade: ${recommendation.grade} (${recommendation.specStandard})\nPlease share available brands & best price.`
  );

  return (
    <section
      id="oil-guide"
      className="relative py-12 sm:py-16 border-b border-white/10 bg-[#0D1017]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#F59E0B] mb-1">
              Lubricant Selector Tool
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Engine Oil &amp; Lubricant Advisor
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] max-w-md">
            Pick your engine type and Punjab driving style to find the ideal SAE viscosity grade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Controls */}
          <div className="lg:col-span-5 rounded-3xl chrome-card p-5 sm:p-6 flex flex-col justify-between gap-6">
            {/* Step 1: Vehicle Type */}
            <div>
              <span className="block text-xs font-semibold text-[#9CA3AF] mb-3">
                1. Select Vehicle Engine Type
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {OIL_VEHICLE_OPTIONS.map((opt) => {
                  const active = opt.id === vehicleType;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setVehicleType(opt.id)}
                      className={`min-h-[60px] p-3 rounded-2xl text-left border transition-all cursor-pointer active:scale-[0.98] ${
                        active
                          ? 'bg-[#F59E0B]/15 border-[#F59E0B] text-white shadow-[0_0_20px_rgba(245,158,11,0.16)]'
                          : 'bg-[#0A0C10]/75 border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/25'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {opt.label}
                      </div>
                      <div className="mt-0.5 text-[11px] text-[#9CA3AF] leading-tight">
                        {opt.sub}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Driving Condition */}
            <div>
              <span className="block text-xs font-semibold text-[#9CA3AF] mb-3">
                2. Select Driving Condition
              </span>
              <div className="space-y-2.5">
                {DRIVING_CONDITION_OPTIONS.map((opt) => {
                  const active = opt.id === condition;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setCondition(opt.id)}
                      className={`w-full min-h-[54px] px-4 py-3 rounded-2xl text-left border flex items-center justify-between gap-3 transition-all cursor-pointer active:scale-[0.99] ${
                        active
                          ? 'bg-[#DC2626]/18 border-[#EF4444] text-white'
                          : 'bg-[#0A0C10]/75 border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/25'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-white">{opt.label}</div>
                        <div className="text-xs text-[#9CA3AF]">{opt.sub}</div>
                      </div>
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          active ? 'border-[#EF4444]' : 'border-white/25'
                        }`}
                      >
                        {active && <span className="w-2 h-2 rounded-full bg-[#EF4444]" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Live Recommendation Output */}
          <div className="lg:col-span-7 rounded-3xl chrome-card overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-[#1A140B] via-[#171B26] to-[#1A1014] border-b border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-full sm:w-44 shrink-0 rounded-2xl overflow-hidden border border-white/12">
                <PartArtwork
                  type={recommendation.artwork}
                  label={recommendation.formulaType}
                  compact
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F59E0B]">
                  <Droplets className="w-3.5 h-3.5 shrink-0" />
                  <span>Ideal Recommended Oil Grade</span>
                </div>
                <h3 className="mt-1 font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                  {recommendation.grade}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                  {recommendation.summary}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-5">
              {/* Technical Specs Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-[#0A0C10]/75 border border-white/10 p-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#9CA3AF]">
                    <Shield className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>OEM Standard</span>
                  </div>
                  <div className="mt-1 font-mono-tech text-xs font-semibold text-white">
                    {recommendation.specStandard}
                  </div>
                </div>
                <div className="rounded-xl bg-[#0A0C10]/75 border border-white/10 p-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#9CA3AF]">
                    <CalendarClock className="w-3.5 h-3.5 text-[#EF4444]" />
                    <span>Change Interval</span>
                  </div>
                  <div className="mt-1 font-mono-tech text-xs font-semibold text-white">
                    {recommendation.drainInterval}
                  </div>
                </div>
                <div className="rounded-xl bg-[#0A0C10]/75 border border-white/10 p-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#9CA3AF]">
                    <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                    <span>In Stock Brands</span>
                  </div>
                  <div className="mt-1 text-xs font-semibold text-white truncate">
                    {recommendation.recommendedBrands.join(' · ')}
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <ul className="space-y-2.5">
                {recommendation.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E5E7EB]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* 1-Tap Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={orderOilWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[48px] px-5 py-3 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#EF4444] hover:brightness-110 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-all active:scale-[0.98] whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Order This Oil on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() =>
                    onAddToCart(matchedProduct, `${vehicleLabel} (${conditionLabel})`)
                  }
                  className="min-h-[48px] px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Plus className="w-4 h-4 shrink-0" />
                  <span>Add to Inquiry List</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
