import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <div className="h-8 w-8 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Cap */}
          <polygon points="12,2 22,7 12,12 2,7" />
          <path d="M4 9v4c0 1.66 3.58 3 8 3s8-1.34 8-3V9" />
          {/* Book */}
          <path d="M4 19.5V8.5" />
          <path d="M20 19.5V8.5" />
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        </svg>
      </div>
      <span className="ml-3 text-2xl font-bold text-foreground font-headline">
        TutorVista
      </span>
    </div>
  );
};
export default Logo;
