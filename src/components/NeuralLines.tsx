
import React from "react";

interface NeuralLinesProps {
  className?: string;
}

const NeuralLines = ({ className }: NeuralLinesProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden opacity-20 pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7E3AF2" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
            stroke="url(#neural-gradient)"
            strokeWidth="0.5"
            fill="none"
            className="animate-neural-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default NeuralLines;
