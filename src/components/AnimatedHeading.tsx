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
        const words = line.split(' ');
        let charInLineCount = 0;

        const lineContent = (
          <div key={lineIndex} className="block overflow-hidden pb-1">
            {words.map((word, wordIndex) => {
              const wordContent = (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {word.split('').map((char, charIndex) => {
                    const globalIndex = cumulativeCharCount + charInLineCount + charIndex;
                    const delay = globalIndex * 30; // 30ms per char
                    
                    const charStyle: React.CSSProperties = {
                      display: 'inline-block',
                      opacity: startAnimation ? 1 : 0,
                      transform: startAnimation ? 'translateX(0)' : 'translateX(-18px)',
                      transition: `opacity 500ms ease-out ${delay}ms, transform 500ms ease-out ${delay}ms`,
                    };

                    return (
                      <span key={charIndex} style={charStyle}>
                        {char}
                      </span>
                    );
                  })}
                  {/* Space after the word */}
                  {wordIndex < words.length - 1 && (
                    <span
                      style={{
                        display: 'inline-block',
                        opacity: startAnimation ? 1 : 0,
                        transform: startAnimation ? 'translateX(0)' : 'translateX(-18px)',
                        transition: `opacity 500ms ease-out ${(cumulativeCharCount + charInLineCount + word.length) * 30}ms, transform 500ms ease-out ${(cumulativeCharCount + charInLineCount + word.length) * 30}ms`,
                      }}
                    >
                      {'\u00A0'}
                    </span>
                  )}
                </span>
              );
              charInLineCount += word.length + 1; // +1 for the space
              return wordContent;
            })}
          </div>
        );
        cumulativeCharCount += line.length;
        return lineContent;
      })}
    </h1>
  );
}
