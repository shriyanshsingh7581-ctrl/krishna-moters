import { useMemo, useState } from 'react';
import {
  Search,
  Plus,
  Minus,
  MessageCircle,
  Camera,
  X,
  ShoppingBag,
} from 'lucide-react';
import {
  CATALOG_CATEGORIES,
  CatalogCategory,
  PRODUCTS,
  ProductItem,
  buildWhatsAppUrl,
} from '../data/catalogData';
import { PartArtwork } from './PartArtwork';

interface CatalogSectionProps {
  cartQuantities: Record<string, number>;
  cartTotalCount: number;
  onAddToCart: (product: ProductItem) => void;
  onUpdateQty: (productId: string, delta: number) => void;
  onOpenCart: () => void;
}

export function CatalogSection({
  cartQuantities,
  cartTotalCount,
  onAddToCart,
  onUpdateQty,
  onOpenCart,
}: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CatalogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesCat =
        activeCategory === 'All' || product.catalogCategory === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        product.name.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.compatibleModelsLabel.toLowerCase().includes(q) ||
        product.finderCategory.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  const sendPhotoWhatsAppUrl = buildWhatsAppUrl(
    'Hello Krishna Motors Patiala! I am sending a photo of my old spare part / vehicle RC. Please help me match the exact genuine part & price.'
  );

  return (
    <section id="catalog" className="py-12 sm:py-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header + Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#F59E0B] mb-1">
              Ready-Stock Patiala Counter
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Genuine Spare Parts &amp; Oils Catalog
            </h2>
          </div>

          <div className="flex items-center gap-2.5 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-72">
              <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Castrol, Swift, Brake, NGK..."
                aria-label="Search spare parts catalog"
                className="w-full min-h-[44px] pl-10 pr-9 rounded-xl bg-[#131720] border border-white/12 text-sm text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#EF4444] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#9CA3AF] hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {cartTotalCount > 0 && (
              <button
                type="button"
                onClick={onOpenCart}
                className="min-h-[44px] px-3.5 rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/50 text-white text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer hover:bg-[#EF4444]/25 transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-[#EF4444]" />
                <span>List ({cartTotalCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* Horizontal Scrollable Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Product Categories"
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {CATALOG_CATEGORIES.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`min-h-[44px] px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-[0.98] ${
                  active
                    ? 'bg-gradient-to-r from-[#DC2626] to-[#EF4444] border-[#EF4444] text-white shadow-md shadow-red-950/40'
                    : 'bg-[#131720] border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/25'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredProducts.map((product) => {
              const qty = cartQuantities[product.id] || 0;
              const quickWaUrl = buildWhatsAppUrl(
                `Hello Krishna Motors Patiala! Please confirm price & availability for:\n• ${product.name}\n• Brand: ${product.brand} (${product.packSpec})\n• Ref: ${product.sku}`
              );

              return (
                <article
                  key={product.id}
                  className="rounded-2xl chrome-card overflow-hidden flex flex-col chrome-card-hover"
                >
                  <PartArtwork type={product.artwork} label={product.highlightMetric} />

                  <div className="p-4 flex-1 flex flex-col">
                    {/* Clean Unboxed Metadata Line */}
                    <div className="flex items-center justify-between gap-2 text-[11px] font-medium">
                      <span className="text-[#F59E0B] font-semibold truncate">
                        {product.authenticityTag}
                      </span>
                      <span className="text-emerald-400 shrink-0">{product.stockNote}</span>
                    </div>

                    <h3 className="mt-1.5 font-semibold text-[15px] text-white leading-snug">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#9CA3AF] line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Vehicle Compatibility Metadata */}
                    <div className="mt-3 pt-2.5 border-t border-white/8 text-[11px] text-[#9CA3AF]">
                      <span className="text-[#D1D5DB] font-medium">Fits: </span>
                      <span>{product.compatibleModelsLabel}</span>
                    </div>

                    {/* Action Row */}
                    <div className="mt-auto pt-4 flex items-center gap-2">
                      {qty === 0 ? (
                        <button
                          type="button"
                          onClick={() => onAddToCart(product)}
                          className="flex-1 min-h-[44px] px-3 rounded-xl bg-white/[0.07] hover:bg-[#DC2626] border border-white/12 hover:border-[#EF4444] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
                        >
                          <Plus className="w-4 h-4 shrink-0" />
                          <span>Add to List</span>
                        </button>
                      ) : (
                        <div className="flex-1 min-h-[44px] rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/60 flex items-center justify-between px-1.5">
                          <button
                            type="button"
                            onClick={() => onUpdateQty(product.id, -1)}
                            aria-label={`Remove one ${product.name}`}
                            className="w-9 h-9 rounded-lg hover:bg-white/10 text-white flex items-center justify-center cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono-tech text-sm font-bold text-white">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(product.id, 1)}
                            aria-label={`Add one more ${product.name}`}
                            className="w-9 h-9 rounded-lg hover:bg-white/10 text-white flex items-center justify-center cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      <a
                        href={quickWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ask price for ${product.name} on WhatsApp`}
                        title="Ask Price on WhatsApp"
                        className="min-h-[44px] min-w-[44px] rounded-xl bg-emerald-600/20 hover:bg-emerald-600/35 border border-emerald-500/40 text-emerald-300 flex items-center justify-center transition-colors shrink-0"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl chrome-card p-8 text-center">
            <p className="text-base font-semibold text-white">
              No parts matched &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="mt-1 text-sm text-[#9CA3AF]">
              Clear your search filter or send us a photo of your part directly on WhatsApp.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-4 min-h-[44px] px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold cursor-pointer"
            >
              Show All 16 Featured Parts
            </button>
          </div>
        )}

        {/* E. "DON'T KNOW THE PART NAME? SEND PHOTO!" QUICK BANNER */}
        <div className="mt-10 sm:mt-14 relative rounded-3xl overflow-hidden border border-[#EF4444]/40 bg-gradient-to-br from-[#2B0A0E] via-[#131720] to-[#0A0C10] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_-20px_rgba(220,38,38,0.45)]">
          <div className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full bg-[#DC2626]/20 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#F59E0B] mb-2">
                <Camera className="w-4 h-4 shrink-0" />
                <span>FAST PHOTO PART MATCHING</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight [text-wrap:balance]">
                Confused About Which Part Fits?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                Send a photo of your old spare part or vehicle RC on WhatsApp — our Patiala experts will match the exact genuine part in minutes!
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={sendPhotoWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[52px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#EF4444] hover:brightness-110 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-red-950/60 transition-all active:scale-[0.98] whitespace-nowrap"
              >
                <Camera className="w-5 h-5 shrink-0" />
                <span>Send Part Photo on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
