import React, { useState, useEffect } from 'react';
import TextType from './Text-Type/TextType';

const AnimatedText = ({ isVisible }) => {
  const [show, setShow] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);          // hide the component
      setTimeout(() => {
        setKey(prev => prev + 1); // remount to restart animation
        setShow(true);         // show again
      }, 200); // small delay
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return show ? (
    <TextType
      key={key}
      text={["Master of Computer Application Student"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
      className={`text-gradient text-3xl tracking-tight font-semibold
                  transform transition-all duration-1000 ease-out delay-300
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    />
  ) : null;
};

export default AnimatedText;
