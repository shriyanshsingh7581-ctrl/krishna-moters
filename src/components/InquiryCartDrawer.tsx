import { useEffect } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  Copy,
  ShoppingBag,
  Car,
} from 'lucide-react';
import { ProductItem, buildWhatsAppUrl } from '../data/catalogData';

export interface CartEntry {
  product: ProductItem;
  quantity: number;
}

interface InquiryCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartEntry[];
  vehicleName: string;
  onVehicleNameChange: (val: string) => void;
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onCopyList: (formattedText: string) => void;
}

export function InquiryCartDrawer({
  isOpen,
  onClose,
  items,
  vehicleName,
  onVehicleNameChange,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onCopyList,
}: InquiryCartDrawerProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalUnits = items.reduce((sum, entry) => sum + entry.quantity, 0);

  const formattedMessage = [
    'Hello Krishna Motors Patiala! 👋',
    'Please share price & ready-stock availability for my Parts Inquiry List:',
    '',
    `🚗 Vehicle: ${vehicleName.trim() || 'Not specified (please advise)'}`,
    '',
    ...items.map(
      (entry, index) =>
        `${index + 1}. ${entry.product.name} (${entry.product.brand}) — Qty: ${entry.quantity} [${entry.product.sku}]`
    ),
    '',
    `Total Items: ${totalUnits}`,
    'Sent via krishnamotorspatiala.com',
  ].join('\n');

  const whatsappUrl = buildWhatsAppUrl(formattedMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-stretch md:justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-drawer-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close inquiry drawer"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-default"
      />

      {/* Slide-up Mobile Sheet / Slide-over Desktop Panel */}
      <div className="relative z-10 w-full md:max-w-md max-h-[88vh] md:max-h-full md:h-full rounded-t-3xl md:rounded-none md:rounded-l-3xl bg-[#10141D] border-t md:border-t-0 md:border-l border-white/15 flex flex-col shadow-2xl">
        {/* Mobile grab handle */}
        <div className="md:hidden pt-3 pb-1 flex justify-center">
          <div className="w-11 h-1.5 rounded-full bg-white/20" />
        </div>

        {/* Drawer Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/35 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-[#EF4444]" />
            </span>
            <div>
              <h2
                id="inquiry-drawer-title"
                className="font-display font-bold text-xl text-white leading-none"
              >
                My Parts Inquiry List
              </h2>
              <p className="text-xs text-[#9CA3AF] mt-0.5">
                {totalUnits === 0
                  ? 'Add parts for instant WhatsApp estimate'
                  : `${items.length} product${items.length === 1 ? '' : 's'} · ${totalUnits} unit${totalUnits === 1 ? '' : 's'}`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close inquiry list"
            className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-[#D1D5DB] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {/* Customer Vehicle Name Input */}
          <div>
            <label
              htmlFor="inquiry-vehicle-input"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#D1D5DB] mb-1.5"
            >
              <Car className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Your Vehicle Name &amp; Year (for exact fitment)</span>
            </label>
            <input
              id="inquiry-vehicle-input"
              type="text"
              value={vehicleName}
              onChange={(e) => onVehicleNameChange(e.target.value)}
              placeholder="e.g., Maruti Swift 2021 / Royal Enfield Classic 350"
              className="w-full min-h-[44px] px-3.5 rounded-xl bg-[#0A0C10] border border-white/15 text-sm text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#EF4444]"
            />
          </div>

          {items.length === 0 ? (
            <div className="rounded-2xl bg-[#0A0C10]/70 border border-white/10 p-7 text-center">
              <ShoppingBag className="w-9 h-9 text-[#4B5563] mx-auto mb-3" />
              <p className="text-sm font-semibold text-white">Your inquiry list is empty</p>
              <p className="mt-1 text-xs text-[#9CA3AF] leading-relaxed">
                Tap &ldquo;+ Add to List&rdquo; on any engine oil, filter, brake pad, or bike spare part to build a combined WhatsApp quote.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 min-h-[44px] px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold cursor-pointer"
              >
                Browse Genuine Parts
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="rounded-2xl bg-[#0A0C10]/85 border border-white/10 p-3.5 flex items-start justify-between gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-semibold text-[#F59E0B]">
                      {product.brand} · <span className="font-mono-tech text-[#9CA3AF]">{product.sku}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white leading-snug mt-0.5">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-[#9CA3AF] mt-0.5">{product.packSpec}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => onRemoveItem(product.id)}
                      aria-label={`Remove ${product.name}`}
                      className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-[#EF4444] hover:bg-white/[0.05] cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1 rounded-xl bg-[#131720] border border-white/12 p-0.5">
                      <button
                        type="button"
                        onClick={() => onUpdateQty(product.id, -1)}
                        aria-label={`Decrease quantity of ${product.name}`}
                        className="w-8 h-8 rounded-lg hover:bg-white/10 text-white flex items-center justify-center cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center font-mono-tech text-xs font-bold text-white">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(product.id, 1)}
                        aria-label={`Increase quantity of ${product.name}`}
                        className="w-8 h-8 rounded-lg hover:bg-white/10 text-white flex items-center justify-center cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-xs font-medium text-[#9CA3AF] hover:text-[#EF4444] transition-colors cursor-pointer"
                >
                  Clear entire list
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer CTA */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0B0E15] space-y-2.5 pb-safe">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:brightness-110 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>Send Full List on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => onCopyList(formattedMessage)}
              className="w-full min-h-[44px] px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.11] border border-white/12 text-[#E5E7EB] text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 shrink-0" />
              <span>Copy Formatted List</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
