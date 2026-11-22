import { ArtworkType } from '../data/catalogData';

interface PartArtworkProps {
  type: ArtworkType;
  label?: string;
  compact?: boolean;
}

const OIL_THEMES: Record<
  'oil-gold' | 'oil-red' | 'oil-silver' | 'oil-amber' | 'oil-blue',
  { bodyStart: string; bodyEnd: string; cap: string; accent: string; grade: string; sub: string }
> = {
  'oil-gold': {
    bodyStart: '#F59E0B',
    bodyEnd: '#B45309',
    cap: '#DC2626',
    accent: '#FEF3C7',
    grade: '5W-30',
    sub: 'FULL SYNTHETIC',
  },
  'oil-red': {
    bodyStart: '#DC2626',
    bodyEnd: '#7F1D1D',
    cap: '#F59E0B',
    accent: '#FEE2E2',
    grade: '10W-40',
    sub: '4T ESTER SYN',
  },
  'oil-silver': {
    bodyStart: '#9CA3AF',
    bodyEnd: '#374151',
    cap: '#DC2626',
    accent: '#F3F4F6',
    grade: '5W-40',
    sub: 'TURBO DIESEL',
  },
  'oil-amber': {
    bodyStart: '#D97706',
    bodyEnd: '#78350F',
    cap: '#111827',
    accent: '#FDE68A',
    grade: '15W-50',
    sub: 'RE TOURING',
  },
  'oil-blue': {
    bodyStart: '#2563EB',
    bodyEnd: '#1E3A8A',
    cap: '#F59E0B',
    accent: '#DBEAFE',
    grade: '10W-30',
    sub: 'SCOOTER MB',
  },
};

export function PartArtwork({ type, label, compact = false }: PartArtworkProps) {
  const isOil =
    type === 'oil-gold' ||
    type === 'oil-red' ||
    type === 'oil-silver' ||
    type === 'oil-amber' ||
    type === 'oil-blue';

  return (
    <div
      className={`relative w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#161B26] via-[#0F131B] to-[#0A0C10] ${
        compact ? 'h-32' : 'aspect-[4/3]'
      }`}
    >
      {/* Subtle machined metallic radial backdrop */}
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.09), transparent 62%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 22px 22px, 22px 22px',
        }}
      />

      {isOil ? (
        <OilBottleSVG theme={OIL_THEMES[type]} />
      ) : type === 'air-filter' ? (
        <AirFilterSVG />
      ) : type === 'oil-filter' ? (
        <OilFilterSVG />
      ) : type === 'cabin-filter' ? (
        <CabinFilterSVG />
      ) : type === 'brake-pads' ? (
        <BrakePadsSVG />
      ) : type === 'disc-rotor' ? (
        <DiscRotorSVG />
      ) : type === 'spark-plug' ? (
        <SparkPlugSVG />
      ) : type === 'chain-kit' ? (
        <ChainKitSVG />
      ) : type === 'clutch-kit' ? (
        <ClutchKitSVG />
      ) : type === 'timing-belt' ? (
        <TimingBeltSVG />
      ) : type === 'wheel-bearing' ? (
        <WheelBearingSVG />
      ) : (
        <ShockAbsorberSVG />
      )}

      {label && (
        <span className="absolute bottom-2.5 right-2.5 font-mono-tech text-[11px] font-medium tracking-wide text-[#F9FAFB]/90 bg-[#0A0C10]/85 border border-white/12 px-2 py-0.5 rounded">
          {label}
        </span>
      )}
    </div>
  );
}

function OilBottleSVG({
  theme,
}: {
  theme: { bodyStart: string; bodyEnd: string; cap: string; accent: string; grade: string; sub: string };
}) {
  const gradId = `oil-grad-${theme.grade.replace(/[^a-zA-Z0-9]/g, '')}-${theme.sub.slice(0, 3)}`;
  return (
    <svg viewBox="0 0 220 165" className="w-[78%] h-[82%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.bodyStart} />
          <stop offset="100%" stopColor={theme.bodyEnd} />
        </linearGradient>
      </defs>
      {/* Bottle cap */}
      <rect x="92" y="12" width="26" height="12" rx="3" fill={theme.cap} />
      <rect x="95" y="24" width="20" height="8" fill="#1F2937" />
      {/* Canister body + integrated side handle */}
      <path
        d="M72 44 C72 35 84 30 95 30 L120 30 C138 30 156 42 158 60 L160 142 C160 149 154 154 147 154 L68 154 C61 154 56 149 56 142 L58 62 C59 51 64 46 72 44 Z"
        fill={`url(#${gradId})`}
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.5"
      />
      {/* Handle cutout */}
      <path
        d="M132 50 C142 52 146 60 146 74 L146 95 C146 101 141 104 136 102 C131 100 130 95 130 88 L130 62 C130 55 130 50 132 50 Z"
        fill="#0F131B"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="1.2"
      />
      {/* Oil level side ribs */}
      <line x1="65" y1="68" x2="65" y2="136" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
      {/* Front technical label */}
      <rect x="70" y="64" width="54" height="74" rx="6" fill="#0B0E14" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <rect x="70" y="64" width="54" height="14" rx="4" fill="#DC2626" />
      <text x="97" y="74" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        ENGINE OIL
      </text>
      {/* Golden drop */}
      <path d="M97 84 C97 84 103 91 103 95 C103 98.5 100.3 101 97 101 C93.7 101 91 98.5 91 95 C91 91 97 84 97 84 Z" fill="#F59E0B" />
      <text x="97" y="117" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700" fontFamily="JetBrains Mono, monospace">
        {theme.grade}
      </text>
      <text x="97" y="129" textAnchor="middle" fill={theme.accent} fontSize="6.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
        {theme.sub}
      </text>
    </svg>
  );
}

function AirFilterSVG() {
  return (
    <svg viewBox="0 0 220 165" className="w-[82%] h-[82%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      {/* Rubber gasket frame */}
      <rect x="34" y="34" width="152" height="98" rx="12" fill="#EA580C" stroke="#FB923C" strokeWidth="2" />
      <rect x="44" y="44" width="132" height="78" rx="6" fill="#1F2937" />
      {/* Filter pleats */}
      {Array.from({ length: 14 }).map((_, i) => (
        <g key={i}>
          <rect x={48 + i * 9} y="47" width="5" height="72" rx="1" fill="#FDE68A" />
          <rect x={53 + i * 9} y="47" width="4" height="72" fill="#D97706" opacity="0.65" />
        </g>
      ))}
      {/* Mesh support bands */}
      <rect x="44" y="65" width="132" height="3" fill="#9CA3AF" opacity="0.5" />
      <rect x="44" y="96" width="132" height="3" fill="#9CA3AF" opacity="0.5" />
    </svg>
  );
}

function OilFilterSVG() {
  return (
    <svg viewBox="0 0 220 165" className="w-[78%] h-[82%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      <defs>
        <linearGradient id="spin-can" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="40%" stopColor="#374151" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      {/* Canister */}
      <rect x="68" y="40" width="84" height="106" rx="10" fill="url(#spin-can)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      {/* Top plate & rubber O-ring */}
      <ellipse cx="110" cy="40" rx="42" ry="12" fill="#D1D5DB" stroke="#6B7280" strokeWidth="1.5" />
      <ellipse cx="110" cy="40" rx="34" ry="9" fill="#111827" />
      <ellipse cx="110" cy="40" rx="12" ry="4" fill="#9CA3AF" />
      {/* Oil flow holes */}
      {[88, 98, 122, 132].map((cx) => (
        <circle key={cx} cx={cx} cy="40" r="2.5" fill="#4B5563" />
      ))}
      {/* Brand stripe */}
      <rect x="68" y="76" width="84" height="28" fill="#DC2626" />
      <text x="110" y="93" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="Rajdhani, sans-serif" letterSpacing="1.5">
        OEM FILTER
      </text>
      <text x="110" y="124" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="JetBrains Mono, monospace">
        HIGH-FLOW VALVE
      </text>
    </svg>
  );
}

function CabinFilterSVG() {
  return (
    <svg viewBox="0 0 220 165" className="w-[82%] h-[82%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      <rect x="38" y="38" width="144" height="90" rx="8" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
      <rect x="46" y="46" width="128" height="74" rx="4" fill="#374151" />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={50 + i * 10} y="49" width="6" height="68" rx="1" fill={i % 2 === 0 ? '#6B7280' : '#4B5563'} />
      ))}
      <rect x="74" y="73" width="72" height="20" rx="3" fill="#0A0C10" fillOpacity="0.82" />
      <text x="110" y="86" textAnchor="middle" fill="#F9FAFB" fontSize="8" fontWeight="700" fontFamily="JetBrains Mono, monospace">
        CARBON HEPA
      </text>
    </svg>
  );
}

function BrakePadsSVG() {
  return (
    <svg viewBox="0 0 220 165" className="w-[84%] h-[84%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      {/* Rear pad shadow */}
      <path
        d="M52 60 C78 38 142 38 168 60 L176 92 C148 112 72 112 44 92 Z"
        fill="#1F2937"
        stroke="#DC2626"
        strokeWidth="2.5"
      />
      {/* Front ceramic pad */}
      <path
        d="M44 78 C72 56 148 56 176 78 L184 114 C152 134 68 134 36 114 Z"
        fill="#374151"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.5"
      />
      {/* Ceramic friction block */}
      <path
        d="M56 84 C80 68 140 68 164 84 L170 109 C144 123 76 123 50 109 Z"
        fill="#111827"
      />
      {/* Center heat expansion slot */}
      <rect x="108" y="72" width="4" height="48" fill="#4B5563" />
      {/* Chamfer highlights */}
      <path d="M56 84 L68 109" stroke="#9CA3AF" strokeWidth="1" opacity="0.4" />
      <path d="M164 84 L152 109" stroke="#9CA3AF" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function DiscRotorSVG() {
  return (
    <svg viewBox="0 0 220 165" className="w-[80%] h-[84%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      <defs>
        <radialGradient id="rotor-metal" cx="50%" cy="50%" r="50%">
          <stop offset="45%" stopColor="#9CA3AF" />
          <stop offset="78%" stopColor="#E5E7EB" />
          <stop offset="100%" stopColor="#6B7280" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="82" r="64" fill="url(#rotor-metal)" stroke="#D1D5DB" strokeWidth="2" />
      <circle cx="110" cy="82" r="56" fill="none" stroke="#4B5563" strokeWidth="1" strokeDasharray="3 3" />
      {/* Cross-drilled slots */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 110 82)`}>
          <circle cx="110" cy="34" r="2.2" fill="#111827" />
          <circle cx="116" cy="41" r="2.2" fill="#111827" />
          <line x1="126" y1="36" x2="119" y2="48" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
      {/* Center hat */}
      <circle cx="110" cy="82" r="27" fill="#1F2937" stroke="#DC2626" strokeWidth="2.5" />
      <circle cx="110" cy="82" r="11" fill="#0A0C10" stroke="#9CA3AF" strokeWidth="1.5" />
      {[0, 72, 144, 216, 288].map((deg) => (
        <circle
          key={deg}
          cx={110 + 18 * Math.cos((deg * Math.PI) / 180)}
          cy={82 + 18 * Math.sin((deg * Math.PI) / 180)}
          r="3"
          fill="#D1D5DB"
        />
      ))}
    </svg>
  );
}

function SparkPlugSVG() {
  return (
    <svg viewBox="0 0 220 165" className="w-[78%] h-[82%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      <g transform="rotate(-32 110 82)">
        {/* Terminal nut */}
        <rect x="104" y="16" width="12" height="14" rx="2" fill="#D1D5DB" />
        {/* Ceramic insulator */}
        <rect x="98" y="30" width="24" height="46" rx="4" fill="#F9FAFB" />
        <line x1="98" y1="40" x2="122" y2="40" stroke="#DC2626" strokeWidth="3" />
        <line x1="98" y1="48" x2="122" y2="48" stroke="#E5E7EB" strokeWidth="2" />
        <line x1="98" y1="54" x2="122" y2="54" stroke="#E5E7EB" strokeWidth="2" />
        {/* Hex shell */}
        <rect x="92" y="76" width="36" height="20" rx="2" fill="#9CA3AF" stroke="#4B5563" strokeWidth="1.5" />
        {/* Threads */}
        <rect x="98" y="96" width="24" height="32" fill="#6B7280" />
        {[101, 106, 111, 116, 121, 126].map((y) => (
          <line key={y} x1="97" y1={y} x2="123" y2={y + 2} stroke="#1F2937" strokeWidth="1.8" />
        ))}
        {/* Iridium electrode + ground strap */}
        <rect x="108" y="128" width="4" height="10" fill="#F59E0B" />
        <path d="M118 128 L118 142 L106 142" fill="none" stroke="#D1D5DB" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function ChainKitSVG() {
  return (
    <svg viewBox="0 0 220 165" className="w-[82%] h-[82%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      {/* Rear sprocket */}
      <circle cx="88" cy="82" r="48" fill="#1F2937" stroke="#F59E0B" strokeWidth="5" strokeDasharray="7 5" />
      <circle cx="88" cy="82" r="36" fill="#111827" stroke="#9CA3AF" strokeWidth="2" />
      <circle cx="88" cy="82" r="14" fill="#0A0C10" stroke="#F59E0B" strokeWidth="2" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle
          key={deg}
          cx={88 + 25 * Math.cos((deg * Math.PI) / 180)}
          cy={82 + 25 * Math.sin((deg * Math.PI) / 180)}
          r="5"
          fill="#0A0C10"
        />
      ))}
      {/* Front pinion */}
      <circle cx="164" cy="96" r="22" fill="#374151" stroke="#F59E0B" strokeWidth="4" strokeDasharray="6 4" />
      <circle cx="164" cy="96" r="8" fill="#0A0C10" />
      {/* Brass drive chain */}
      <path d="M88 34 L168 74" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" strokeDasharray="8 4" />
      <path d="M88 130 L164 118" stroke="#D97706" strokeWidth="6" strokeLinecap="round" strokeDasharray="8 4" />
    </svg>
  );
}

function ClutchKitSVG() {
  return (
    <svg viewBox="0 0 220 165" className="w-[80%] h-[82%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      {/* Friction outer plate */}
      <circle cx="110" cy="82" r="60" fill="#27272A" stroke="#71717A" strokeWidth="3" />
      <circle cx="110" cy="82" r="46" fill="#3F3F46" stroke="#18181B" strokeWidth="2" />
      {/* Damper springs */}
      {[0, 90, 180, 270].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 110 82)`}>
          <rect x="100" y="44" width="20" height="10" rx="3" fill="#DC2626" stroke="#FCA5A5" strokeWidth="1" />
        </g>
      ))}
      {/* Splined hub */}
      <circle cx="110" cy="82" r="20" fill="#111827" stroke="#D1D5DB" strokeWidth="2.5" />
      <circle cx="110" cy="82" r="9" fill="#0A0C10" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 2" />
    </svg>
  );
}

function TimingBeltSVG() {
  return (
    <svg viewBox="0 0 220 165" className="w-[82%] h-[82%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      {/* Belt loop */}
      <rect x="42" y="42" width="136" height="82" rx="41" fill="none" stroke="#1F2937" strokeWidth="16" />
      <rect x="42" y="42" width="136" height="82" rx="41" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="6 6" />
      {/* Pulleys inside */}
      <circle cx="80" cy="83" r="24" fill="#374151" stroke="#D1D5DB" strokeWidth="2.5" />
      <circle cx="80" cy="83" r="8" fill="#DC2626" />
      <circle cx="144" cy="83" r="18" fill="#374151" stroke="#F59E0B" strokeWidth="2.5" />
      <circle cx="144" cy="83" r="6" fill="#0A0C10" />
    </svg>
  );
}

function WheelBearingSVG() {
  return (
    <svg viewBox="0 0 220 165" className="w-[80%] h-[82%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      <defs>
        <linearGradient id="steel-race" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3F4F6" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
      </defs>
      {/* Outer race */}
      <circle cx="110" cy="82" r="58" fill="url(#steel-race)" />
      <circle cx="110" cy="82" r="46" fill="#111827" />
      {/* Steel balls */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i * 36 * Math.PI) / 180;
        return (
          <circle
            key={i}
            cx={110 + 36 * Math.cos(angle)}
            cy={82 + 36 * Math.sin(angle)}
            r="8"
            fill="url(#steel-race)"
            stroke="#1F2937"
            strokeWidth="1"
          />
        );
      })}
      {/* Inner race */}
      <circle cx="110" cy="82" r="26" fill="url(#steel-race)" />
      <circle cx="110" cy="82" r="16" fill="#0A0C10" stroke="#DC2626" strokeWidth="2" />
    </svg>
  );
}

function ShockAbsorberSVG() {
  return (
    <svg viewBox="0 0 220 165" className="w-[80%] h-[82%] drop-shadow-[0_14px_20px_rgba(0,0,0,0.65)]" aria-hidden="true">
      <g transform="rotate(24 110 82)">
        {/* Top eyelet */}
        <circle cx="110" cy="20" r="8" fill="none" stroke="#D1D5DB" strokeWidth="4" />
        {/* Piston shaft */}
        <rect x="106" y="28" width="8" height="44" fill="#E5E7EB" />
        {/* Coil spring */}
        {[40, 52, 64, 76, 88, 100].map((y) => (
          <path key={y} d={`M90 ${y} L130 ${y + 6}`} stroke="#DC2626" strokeWidth="5.5" strokeLinecap="round" />
        ))}
        {/* Lower damper cylinder */}
        <rect x="97" y="74" width="26" height="58" rx="4" fill="#1F2937" stroke="#9CA3AF" strokeWidth="1.5" />
        <rect x="97" y="106" width="26" height="10" fill="#F59E0B" />
        {/* Bottom eyelet */}
        <circle cx="110" cy="142" r="8" fill="none" stroke="#D1D5DB" strokeWidth="4" />
      </g>
    </svg>
  );
}
