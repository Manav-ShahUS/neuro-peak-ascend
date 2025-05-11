
import React, { useEffect, useRef } from "react";

interface NeuralLinesProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
}

const NeuralLines = ({ className, density = 'medium' }: NeuralLinesProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Generate more natural-looking random paths
  const generatePath = () => {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    
    // Create control points for the curve
    const cp1x = startX + Math.random() * 30 - 15;
    const cp1y = startY + Math.random() * 30 - 15;
    const cp2x = startX + Math.random() * 60 - 30;
    const cp2y = startY + Math.random() * 60 - 30;
    
    const endX = startX + Math.random() * 40 - 20;
    const endY = startY + Math.random() * 40 - 20;
    
    return `M${startX},${startY} C${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`;
  };

  // Determine number of paths based on density
  const getPathCount = () => {
    switch(density) {
      case 'low': return 8;
      case 'high': return 24;
      case 'medium':
      default: return 15;
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden opacity-20 pointer-events-none ${className}`}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7E3AF2" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {Array.from({ length: getPathCount() }).map((_, i) => (
          <path
            key={i}
            d={generatePath()}
            stroke="url(#neural-gradient)"
            strokeWidth="0.7"
            fill="none"
            className="animate-neural-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default NeuralLines;
