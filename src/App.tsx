import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { PRODUCTS, ProductItem, STORE_INFO } from './data/catalogData';
import { BrandLogo } from './components/BrandLogo';
import { HeaderAndNav, NavSectionId } from './components/HeaderAndNav';
import { HeroSection } from './components/HeroSection';
import { PartFinderSection } from './components/PartFinderSection';
import { OilAdvisorSection } from './components/OilAdvisorSection';
import { CatalogSection } from './components/CatalogSection';
import { BrandsAndReviewsSection } from './components/BrandsAndReviewsSection';
import { StoreLocatorFooter } from './components/StoreLocatorFooter';
import { CartEntry, InquiryCartDrawer } from './components/InquiryCartDrawer';

const CART_STORAGE_KEY = 'krishna_motors_inquiry_cart_v1';

interface ToastState {
  id: number;
  message: string;
  showCartCta?: boolean;
}

export default function App() {
  const [cartQuantities, setCartQuantities] = useState<Record<string, number>>(() => {
    try {
      const saved = window.localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') return parsed;
      }
    } catch {
      // Ignore storage read errors in restricted iframe modes
    }
    return {};
  });

  const [vehicleName, setVehicleName] = useState<string>('Maruti Suzuki Swift');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<NavSectionId>('home');
  const [toast, setToast] = useState<ToastState | null>(null);
  const [showSplashAccent, setShowSplashAccent] = useState<boolean>(true);
  const toastTimerRef = useRef<number | null>(null);

  // Brief, smooth non-blocking logo splash accent on first mount
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setShowSplashAccent(false);
      return;
    }
    const t = window.setTimeout(() => setShowSplashAccent(false), 520);
    return () => window.clearTimeout(t);
  }, []);

  // Persist inquiry list to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartQuantities));
    } catch {
      // Ignore storage write errors
    }
  }, [cartQuantities]);

  // Scroll-spy for active navigation highlights (desktop header + mobile bottom nav)
  useEffect(() => {
    const sectionIds: NavSectionId[] = [
      'home',
      'part-finder',
      'oil-guide',
      'catalog',
      'contact',
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as NavSectionId);
        }
      },
      { rootMargin: '-28% 0px -52% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const triggerToast = useCallback((message: string, showCartCta = false) => {
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    setToast({ id: Date.now(), message, showCartCta });
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
    }, 3200);
  }, []);

  const handleNavigate = useCallback((id: NavSectionId) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleAddToCart = useCallback(
    (product: ProductItem, vehicleContext?: string) => {
      if (vehicleContext) {
        setVehicleName(vehicleContext);
      }
      setCartQuantities((prev) => ({
        ...prev,
        [product.id]: (prev[product.id] || 0) + 1,
      }));
      triggerToast(`Added ${product.brand} part to Inquiry List`, true);
    },
    [triggerToast]
  );

  const handleUpdateQty = useCallback((productId: string, delta: number) => {
    setCartQuantities((prev) => {
      const nextQty = (prev[productId] || 0) + delta;
      if (nextQty <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: nextQty };
    });
  }, []);

  const handleRemoveItem = useCallback((productId: string) => {
    setCartQuantities((prev) => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  }, []);

  const handleClearCart = useCallback(() => {
    setCartQuantities({});
    triggerToast('Inquiry list cleared');
  }, [triggerToast]);

  const copyTextToClipboard = useCallback(
    async (text: string, successMessage: string) => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
        triggerToast(successMessage);
      } catch {
        triggerToast(successMessage);
      }
    },
    [triggerToast]
  );

  const cartEntries: CartEntry[] = useMemo(() => {
    return PRODUCTS.filter((p) => (cartQuantities[p.id] || 0) > 0).map((product) => ({
      product,
      quantity: cartQuantities[product.id],
    }));
  }, [cartQuantities]);

  const cartTotalCount = useMemo(
    () => cartEntries.reduce((sum, entry) => sum + entry.quantity, 0),
    [cartEntries]
  );

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#F9FAFB] flex flex-col">
      {/* Ultra-brief Brand Emblem Loading Accent */}
      <div
        aria-hidden={!showSplashAccent}
        className={`fixed inset-0 z-50 bg-[#0A0C10] flex flex-col items-center justify-center gap-4 pointer-events-none transition-opacity duration-300 ${
          showSplashAccent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <BrandLogo size="lg" glow />
        <div className="text-center">
          <div className="font-display font-bold text-2xl tracking-[0.16em] text-white">
            KRISHNA <span className="text-[#EF4444]">MOTORS</span>
          </div>
          <div className="text-[11px] tracking-[0.2em] text-[#F59E0B] mt-1">
            TRUSTED SINCE 2007 · PATIALA
          </div>
        </div>
      </div>

      {/* Sticky Glass Top Bar + Mobile Bottom Nav */}
      <HeaderAndNav
        activeSection={activeSection}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection onFindPartClick={() => handleNavigate('part-finder')} />

        <PartFinderSection
          cartQuantities={cartQuantities}
          onAddToCart={handleAddToCart}
          onUpdateQty={handleUpdateQty}
          onVehicleSelected={setVehicleName}
        />

        <CatalogSection
          cartQuantities={cartQuantities}
          cartTotalCount={cartTotalCount}
          onAddToCart={handleAddToCart}
          onUpdateQty={handleUpdateQty}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <OilAdvisorSection onAddToCart={handleAddToCart} />

        <BrandsAndReviewsSection />

        <StoreLocatorFooter
          onCopyAddress={() =>
            copyTextToClipboard(
              `${STORE_INFO.brandName}, ${STORE_INFO.address}`,
              'Patiala shop address copied to clipboard!'
            )
          }
          onNavigate={handleNavigate}
        />
      </main>

      {/* Slide-up Mobile / Slide-over Desktop Inquiry List Drawer */}
      <InquiryCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartEntries}
        vehicleName={vehicleName}
        onVehicleNameChange={setVehicleName}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onCopyList={(formatted) =>
          copyTextToClipboard(formatted, 'Formatted inquiry list copied!')
        }
      />

      {/* Non-blocking Toast Notification (positioned cleanly above Mobile Bottom Nav) */}
      {toast && (
        <div
          key={toast.id}
          role="status"
          aria-live="polite"
          className="fixed left-1/2 -translate-x-1/2 bottom-[74px] md:bottom-6 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl bg-[#161B26]/95 backdrop-blur-xl border border-white/15 px-4 py-3 shadow-2xl shadow-black/70 flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-white truncate">
              {toast.message}
            </span>
          </div>
          {toast.showCartCta && (
            <button
              type="button"
              onClick={() => {
                setToast(null);
                setIsCartOpen(true);
              }}
              className="shrink-0 px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#EF4444] text-white text-xs font-semibold inline-flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>View ({cartTotalCount})</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
