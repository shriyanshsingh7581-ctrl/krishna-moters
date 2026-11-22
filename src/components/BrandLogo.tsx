import { useState } from 'react';
import { STORE_INFO } from '../data/catalogData';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<BrandLogoProps['size']>, string> = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-24 h-24 sm:w-28 sm:h-28',
  xl: 'w-36 h-36 sm:w-44 sm:h-44',
};

export function BrandLogo({ size = 'sm', glow = false, className = '' }: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative shrink-0 rounded-full p-[2px] bg-gradient-to-b from-white/30 via-[#272D3B] to-[#DC2626]/60 ${
        glow ? 'shadow-[0_0_28px_rgba(220,38,38,0.32)]' : 'shadow-md shadow-black/50'
      } ${SIZE_CLASSES[size]} ${className}`}
    >
      <div className="relative w-full h-full rounded-full bg-[#0A0C10] p-[2px] overflow-hidden flex items-center justify-center">
        {!imgError ? (
          <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center ring-1 ring-black/25">
            <img
              src={STORE_INFO.logoPath}
              alt="Krishna Motors Patiala Official Gear Logo — Since 2007"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-contain scale-[1.03] select-none"
              draggable={false}
            />
          </div>
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1A1F2B] to-[#0A0C10] flex flex-col items-center justify-center text-center border border-white/15">
            <span className="font-display font-bold text-white leading-none tracking-wider text-sm">
              K<span className="text-[#EF4444]">M</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
