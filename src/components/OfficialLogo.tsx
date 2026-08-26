import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadgeText?: boolean;
  withPhone?: boolean;
}

export const OfficialLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showBadgeText = true,
  withPhone = false,
}) => {
  const [imgError, setImgError] = useState(false);

  // Dimension mapping
  const sizeMap = {
    sm: { h: 'h-10', w: 'w-10', text: 'text-sm', subtext: 'text-[9px]' },
    md: { h: 'h-12 md:h-14', w: 'w-12 md:w-14', text: 'text-base md:text-lg', subtext: 'text-[10px]' },
    lg: { h: 'h-16 md:h-20', w: 'w-16 md:w-20', text: 'text-xl md:text-2xl', subtext: 'text-xs' },
    xl: { h: 'h-24 md:h-32', w: 'w-24 md:w-32', text: 'text-2xl md:text-3xl', subtext: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Shield Logo Mark */}
      <div className={`relative ${currentSize.h} ${currentSize.w} shrink-0 drop-shadow-md`}>
        {!imgError ? (
          <img
            src="/LOGO.jpg"
            alt="AB Pest Control Fumigaciones Official Logo"
            className="w-full h-full object-contain rounded-lg"
            onError={() => setImgError(true)}
          />
        ) : (
          /* High-Fidelity Official Shield Vector */
          <svg
            viewBox="0 0 400 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-lg"
          >
            {/* Outer Grey / Silver Border */}
            <path
              d="M200 12 L370 65 C370 240 285 385 200 435 C115 385 30 240 30 65 Z"
              fill="#94a3b8"
              stroke="#cbd5e1"
              strokeWidth="6"
            />
            {/* Inner Deep Green Shield */}
            <path
              d="M200 30 L350 78 C350 230 275 365 200 412 C125 365 50 230 50 78 Z"
              fill="#15803d"
            />
            
            {/* Bee Icon with 'A' and 'B' in wings */}
            <g transform="translate(0, -10)">
              {/* Antennae */}
              <path
                d="M182 110 C170 85 155 75 140 78 M218 110 C230 85 245 75 260 78"
                stroke="#ffffff"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <circle cx="138" cy="80" r="7" fill="#ffffff" />
              <circle cx="262" cy="80" r="7" fill="#ffffff" />

              {/* Bee Head */}
              <ellipse cx="200" cy="115" rx="26" ry="20" fill="#ffffff" />

              {/* Left Wing with 'A' */}
              <path
                d="M175 130 C120 100 80 130 95 180 C110 215 160 200 175 175 Z"
                fill="#ffffff"
              />
              {/* Letter A cutout on left wing */}
              <text
                x="135"
                y="170"
                fontFamily="system-ui, sans-serif"
                fontSize="38"
                fontWeight="900"
                fill="#15803d"
                textAnchor="middle"
              >
                A
              </text>

              {/* Right Wing with 'B' */}
              <path
                d="M225 130 C280 100 320 130 305 180 C290 215 240 200 225 175 Z"
                fill="#ffffff"
              />
              {/* Letter B cutout on right wing */}
              <text
                x="265"
                y="170"
                fontFamily="system-ui, sans-serif"
                fontSize="38"
                fontWeight="900"
                fill="#15803d"
                textAnchor="middle"
              >
                B
              </text>

              {/* Bee Striped Body */}
              <path
                d="M175 145 C175 135 225 135 225 145 C235 200 225 245 200 270 C175 245 165 200 175 145 Z"
                fill="#ffffff"
              />
              {/* Green body stripes */}
              <rect x="175" y="165" width="50" height="10" rx="4" fill="#15803d" />
              <rect x="178" y="190" width="44" height="10" rx="4" fill="#15803d" />
              <rect x="183" y="215" width="34" height="10" rx="4" fill="#15803d" />
              <rect x="190" y="240" width="20" height="8" rx="3" fill="#15803d" />

              {/* Little Legs */}
              <path
                d="M170 200 C155 210 155 225 165 235 M230 200 C245 210 245 225 235 235"
                stroke="#ffffff"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* AB PEST CONTROL Text */}
            <text
              x="200"
              y="325"
              fontFamily="Impact, Arial Black, sans-serif"
              fontSize="34"
              letterSpacing="1"
              fontWeight="900"
              fill="#ffffff"
              textAnchor="middle"
            >
              AB PEST CONTROL
            </text>

            {/* FUMIGACIONES subtitle */}
            <text
              x="200"
              y="360"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              letterSpacing="4"
              fontWeight="800"
              fill="#facc15"
              textAnchor="middle"
            >
              FUMIGACIONES
            </text>
          </svg>
        )}
      </div>

      {/* Brand Text Block */}
      {showBadgeText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight text-white uppercase font-['Syne',sans-serif] ${currentSize.text}`}>
              AB Pest-Control
            </span>
            <span className="bg-green-500/20 text-green-400 border border-green-500/40 text-[9px] font-black uppercase px-1.5 py-0.5 rounded tracking-wider">
              DFW
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`font-bold tracking-widest text-yellow-400 uppercase ${currentSize.subtext}`}>
              Fumigaciones
            </span>
            <span className="text-zinc-500 text-[10px]">•</span>
            <span className="text-zinc-400 text-[10px] font-medium hidden sm:inline">
              Dallas, Texas
            </span>
          </div>

          {withPhone && (
            <span className="text-xs font-bold text-green-400 mt-0.5 font-mono">
              (214) 668-8338
            </span>
          )}
        </div>
      )}
    </div>
  );
};
