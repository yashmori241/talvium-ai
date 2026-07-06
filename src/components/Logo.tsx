import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32, iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Interlocking Triangular Geometric Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-hidden="true"
      >
        {/* Background rounded square representation of the brand book if requested, but clean transparent vector is preferred. 
            Let's draw the precise interlocking bands.
            The logo is a triangle with lines that cross over.
        */}
        <g stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Main outer triangle with open gap */}
          <path d="M 50 12 L 88 82 L 12 82 Z" />
          
          {/* Interlocking geometric fold (inner elements) */}
          <path d="M 31 82 L 50 44 L 69 82" />
          <path d="M 50 44 L 69 44 L 50 82" />
          
          {/* Subtle logo-derived geometric horizontal line extending to the left */}
          <path d="M 12 55 L 43 55" strokeWidth="5.5" />
        </g>
      </svg>

      {!iconOnly && (
        <span className="font-heading font-extrabold tracking-tight text-xl text-prussian uppercase">
          Talvium <span className="text-royal">AI</span>
        </span>
      )}
    </div>
  );
};
