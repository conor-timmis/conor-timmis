import React, { useState, useEffect } from 'react';

const TextScramble = () => {
  const [text, setText] = useState('');
  const finalText = 'Conor Timmis';
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText((prevText) =>
        finalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= finalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 4;
    }, 40);

    return () => clearInterval(interval);
  }, [finalText]);

  return (
    <div className="text-2xl font-semibold tabular-nums tracking-tight text-red-500 text-center">
      {text}
    </div>
  );
};

export default TextScramble;
