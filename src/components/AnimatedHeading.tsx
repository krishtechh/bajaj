import React, { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

export default function AnimatedHeading({ text, className = '' }: AnimatedHeadingProps) {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split('\n');
  let cumulativeCharCount = 0;

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => {
        const lineContent = (
          <div key={lineIndex} className="block overflow-hidden pb-1">
            {line.split('').map((char, charIndex) => {
              const globalIndex = cumulativeCharCount + charIndex;
              const delay = globalIndex * 30; // 30ms per char
              
              const charStyle: React.CSSProperties = {
                display: 'inline-block',
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateX(0)' : 'translateX(-18px)',
                transition: `opacity 500ms ease-out ${delay}ms, transform 500ms ease-out ${delay}ms`,
              };

              return (
                <span key={charIndex} style={charStyle}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        );
        cumulativeCharCount += line.length;
        return lineContent;
      })}
    </h1>
  );
}
