import React from 'react';

interface LogoProps {
  className?: string;
  iconSize?: number;
  variant?: 'full' | 'icon';
}

const Logo: React.FC<LogoProps> = ({ className = "", iconSize = 32, variant = 'full' }) => {
  return (
    <div className={`flex items-center gap-2 md:gap-3 select-none ${className}`}>
      {/* Custom Logo SVG - Recreated from brand assets */}
      <svg 
        width={iconSize * 1.5} 
        height={iconSize * 1.5} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-label="Wolff Law Logo Emblem"
      >
        {/* Outer Shield Outline */}
        <path 
          d="M50 92L15 70V25L50 8L85 25V70L50 92Z" 
          stroke="#A8A5A2" 
          strokeWidth="3"
          strokeLinejoin="round"
        />
        
        {/* Inner W Monogram */}
        <path 
          d="M30 38L43 68L50 52L57 68L70 38" 
          stroke="#424FBF" 
          strokeWidth="8" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
        />
      </svg>
      
      {variant === 'full' && (
        <div className="flex items-baseline leading-none">
          <span className="font-sans font-bold text-brand-blue text-xl md:text-2xl tracking-[0.1em]">WOLFF</span>
          <span className="font-sans font-light text-brand-gray text-xl md:text-2xl ml-1.5 tracking-[0.1em]">LAW</span>
        </div>
      )}
    </div>
  );
};

export default Logo;