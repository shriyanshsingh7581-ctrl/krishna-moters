import { useMemo, useRef, useState } from 'react';
import {
  Car,
  Bike,
  Search,
  Plus,
  Minus,
  MessageCircle,
  CheckCircle2,
  SlidersHorizontal,
  RotateCcw,
} from 'lucide-react';
import {
  VehicleType,
  FinderCategory,
  CAR_BRANDS,
  BIKE_BRANDS,
  FINDER_CATEGORIES,
  PRODUCTS,
  ProductItem,
  buildWhatsAppUrl,
} from '../data/catalogData';
import { PartArtwork } from './PartArtwork';

interface PartFinderSectionProps {
  cartQuantities: Record<string, number>;
  onAddToCart: (product: ProductItem, vehicleContext?: string) => void;
  onUpdateQty: (productId: string, delta: number) => void;
  onVehicleSelected: (vehicleLabel: string) => void;
}

export function PartFinderSection({
  cartQuantities,
  onAddToCart,
  onUpdateQty,
  onVehicleSelected,
}: PartFinderSectionProps) {
  const [vehicleType, setVehicleType] = useState<VehicleType>('car');
  const [selectedBrand, setSelectedBrand] = useState<string>(CAR_BRANDS[0].brand);
  const [selectedModel, setSelectedModel] = useState<string>(CAR_BRANDS[0].models[0]);
  const [selectedCategory, setSelectedCategory] = useState<FinderCategory>('All');
  const [hasSearched, setHasSearched] = useState<boolean>(true);

  const resultsRef = useRef<HTMLDivElement>(null);

  const brandsList = vehicleType === 'car' ? CAR_BRANDS : BIKE_BRANDS;
  const activeBrandObj = useMemo(
    () => brandsList.find((b) => b.brand === selectedBrand) ?? brandsList[0],
    [brandsList, selectedBrand]
  );

  const vehicleFullName = `${activeBrandObj.brand} ${selectedModel}`;

  const handleSwitchType = (nextType: VehicleType) => {
    setVehicleType(nextType);
    const nextList = nextType === 'car' ? CAR_BRANDS : BIKE_BRANDS;
    const firstBrand = nextList[0];
    setSelectedBrand(firstBrand.brand);
    setSelectedModel(firstBrand.models[0]);
    onVehicleSelected(`${firstBrand.brand} ${firstBrand.models[0]}`);
  };

  const handleSelectBrand = (brandName: string) => {
    setSelectedBrand(brandName);
    const found = brandsList.find((b) => b.brand === brandName);
    const firstModel = found?.models[0] ?? '';
    setSelectedModel(firstModel);
    onVehicleSelected(`${brandName} ${firstModel}`);
  };

  const handleSelectModel = (modelName: string) => {
    setSelectedModel(modelName);
    onVehicleSelected(`${activeBrandObj.brand} ${modelName}`);
  };

  const matchedParts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (!product.vehicleTypes.includes(vehicleType)) return false;
      const matchesBrand = product.compatibleBrands.includes(activeBrandObj.brand);
      const matchesCategory =
        selectedCategory === 'All' || product.finderCategory === selectedCategory;
      return matchesBrand && matchesCategory;
    });
  }, [vehicleType, activeBrandObj.brand, selectedCategory]);

  const handleSearchClick = () => {
    setHasSearched(true);
    onVehicleSelected(vehicleFullName);
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const handleReset = () => {
    setSelectedCategory('All');
    setHasSearched(true);
  };

  const customRequestUrl = buildWhatsAppUrl(
    `Hello Krishna Motors Patiala! I am looking for ${
      selectedCategory === 'All' ? 'genuine spare parts' : selectedCategory
    } for my ${vehicleFullName} (${vehicleType === 'car' ? 'Car' : 'Bike'}). Please share availability & price.`
  );

  return (
    <section id="part-finder" className="relative py-10 sm:py-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#F59E0B] mb-1">
              3-Tap Ready-Stock Lookup
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Smart Vehicle Part Finder
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] max-w-md">
            Select your car or bike model below to see matching ready-stock OEM parts in Patiala.
          </p>
        </div>

        {/* Interactive Finder Card */}
        <div className="rounded-3xl chrome-card p-4 sm:p-6 lg:p-8 shadow-2xl shadow-black/40">
          {/* Step 1: Car vs Bike Segmented Toggle */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-[#9CA3AF] mb-2.5">
              1. Choose Vehicle Type
            </label>
            <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#0A0C10] border border-white/10 max-w-md">
              <button
                type="button"
                onClick={() => handleSwitchType('car')}
                className={`min-h-[48px] rounded-xl font-display font-bold text-base sm:text-lg tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                  vehicleType === 'car'
                    ? 'bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white shadow-lg shadow-red-950/50'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Car className="w-5 h-5 shrink-0" />
                <span>Car Parts</span>
              </button>
              <button
                type="button"
                onClick={() => handleSwitchType('bike')}
                className={`min-h-[48px] rounded-xl font-display font-bold text-base sm:text-lg tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                  vehicleType === 'bike'
                    ? 'bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white shadow-lg shadow-red-950/50'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Bike className="w-5 h-5 shrink-0" />
                <span>Bike Parts</span>
              </button>
            </div>
          </div>

          {/* Step 2: Vehicle Brand & Model Selection */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
            <div className="lg:col-span-7">
              <label className="block text-xs font-semibold text-[#9CA3AF] mb-2.5">
                2. Select {vehicleType === 'car' ? 'Car' : 'Bike / Scooter'} Brand
              </label>
              <div className="flex flex-wrap gap-2">
                {brandsList.map((item) => {
                  const active = item.brand === activeBrandObj.brand;
                  return (
                    <button
                      key={item.brand}
                      type="button"
                      onClick={() => handleSelectBrand(item.brand)}
                      className={`min-h-[44px] px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer whitespace-nowrap active:scale-[0.98] ${
                        active
                          ? 'bg-[#EF4444]/15 border-[#EF4444] text-white shadow-[0_0_16px_rgba(239,68,68,0.22)]'
                          : 'bg-[#0A0C10]/70 border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/25'
                      }`}
                    >
                      {item.brand}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <label
                htmlFor="vehicle-model-select"
                className="block text-xs font-semibold text-[#9CA3AF] mb-2.5"
              >
                Select {activeBrandObj.brand} Model
              </label>
              <select
                id="vehicle-model-select"
                value={selectedModel}
                onChange={(e) => handleSelectModel(e.target.value)}
                className="w-full min-h-[46px] px-4 rounded-xl bg-[#0A0C10] border border-white/15 text-white text-sm font-semibold focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] transition-colors cursor-pointer"
              >
                {activeBrandObj.models.map((model) => (
                  <option key={model} value={model} className="bg-[#131720] text-white">
                    {activeBrandObj.brand} {model}
                  </option>
                ))}
              </select>
              {/* Quick model tap chips for fast thumb use */}
              <div className="mt-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
                {activeBrandObj.models.slice(0, 4).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => handleSelectModel(m)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedModel === m
                        ? 'bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40'
                        : 'bg-white/[0.04] text-[#9CA3AF] hover:text-white border border-transparent'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Part Category */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-[#9CA3AF] mb-2.5">
              3. Select Part Category
            </label>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
              {FINDER_CATEGORIES.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`min-h-[44px] px-3.5 rounded-xl text-xs sm:text-sm font-medium border transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-white text-[#0A0C10] border-white font-semibold'
                        : 'bg-[#0A0C10]/70 border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/25'
                    }`}
                  >
                    {category === 'All' ? 'All Categories' : category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#9CA3AF]">
              <SlidersHorizontal className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <span>
                Selected:{' '}
                <strong className="text-white font-semibold">{vehicleFullName}</strong>
                {' · '}
                <span className="text-[#F59E0B] font-mono-tech font-semibold">
                  {matchedParts.length} ready-stock match{matchedParts.length === 1 ? '' : 'es'}
                </span>
              </span>
            </div>

            <button
              type="button"
              onClick={handleSearchClick}
              className="min-h-[48px] px-6 py-3 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#EF4444] hover:brightness-110 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <Search className="w-4 h-4 shrink-0" />
              <span>Search Matching Parts</span>
            </button>
          </div>

          {/* Matching Ready-Stock Results Tray */}
          {hasSearched && (
            <div ref={resultsRef} className="mt-7 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <h3 className="font-display font-bold text-xl text-white">
                    Ready-Stock Parts for {vehicleFullName}
                  </h3>
                </div>
                {selectedCategory !== 'All' && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9CA3AF] hover:text-white cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Show all categories
                  </button>
                )}
              </div>

              {matchedParts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {matchedParts.slice(0, 6).map((part) => {
                    const qty = cartQuantities[part.id] || 0;
                    const waPartLink = buildWhatsAppUrl(
                      `Hello Krishna Motors Patiala! Please share price & availability for:\n• Vehicle: ${vehicleFullName}\n• Part: ${part.name} (${part.brand})\n• Ref: ${part.sku}`
                    );
                    return (
                      <article
                        key={part.id}
                        className="rounded-2xl bg-[#0D1018] border border-white/10 overflow-hidden flex flex-col chrome-card-hover"
                      >
                        <PartArtwork type={part.artwork} label={part.highlightMetric} compact />
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 text-[11px] font-medium text-[#9CA3AF]">
                            <span className="text-[#F59E0B] font-semibold">{part.authenticityTag}</span>
                            <span aria-hidden="true">·</span>
                            <span className="text-emerald-400">{part.stockNote}</span>
                          </div>
                          <h4 className="mt-1.5 font-semibold text-sm sm:text-base text-white leading-snug">
                            {part.name}
                          </h4>
                          <p className="mt-1 text-xs text-[#9CA3AF]">
                            Fits <span className="text-[#E5E7EB] font-medium">{vehicleFullName}</span> · {part.packSpec}
                          </p>

                          <div className="mt-auto pt-4 flex items-center gap-2">
                            {qty === 0 ? (
                              <button
                                type="button"
                                onClick={() => onAddToCart(part, vehicleFullName)}
                                className="flex-1 min-h-[44px] px-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add to List</span>
                              </button>
                            ) : (
                              <div className="flex-1 min-h-[44px] rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/50 flex items-center justify-between px-1.5">
                                <button
                                  type="button"
                                  onClick={() => onUpdateQty(part.id, -1)}
                                  aria-label={`Decrease quantity of ${part.name}`}
                                  className="w-9 h-9 rounded-lg hover:bg-white/10 text-white flex items-center justify-center cursor-pointer"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="font-mono-tech text-sm font-bold text-white">
                                  {qty}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => onUpdateQty(part.id, 1)}
                                  aria-label={`Increase quantity of ${part.name}`}
                                  className="w-9 h-9 rounded-lg hover:bg-white/10 text-white flex items-center justify-center cursor-pointer"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            )}

                            <a
                              href={waPartLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="min-h-[44px] px-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                            >
                              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                              <span>Ask Price</span>
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-2xl bg-[#0A0C10]/80 border border-white/10 p-6 text-center">
                  <p className="text-sm font-semibold text-white">
                    Exact {selectedCategory} for {vehicleFullName} available at our Patiala counter!
                  </p>
                  <p className="mt-1 text-xs text-[#9CA3AF]">
                    We stock 5,000+ model-specific OEM parts. Message us on WhatsApp for instant counter verification.
                  </p>
                  <a
                    href={customRequestUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 min-h-[44px] px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Ask for {vehicleFullName} Part on WhatsApp</span>
                  </a>
                </div>
              )}

              {/* Direct Custom Inquiry Strip */}
              {matchedParts.length > 0 && (
                <div className="mt-4 rounded-2xl bg-[#0A0C10]/70 border border-white/10 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <p className="text-xs text-[#9CA3AF]">
                    Need another specific OEM part for <strong className="text-white">{vehicleFullName}</strong>?
                  </p>
                  <a
                    href={customRequestUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp exact part request →</span>
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
