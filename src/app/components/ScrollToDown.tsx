'use client'

import Image from 'next/image';
import { useRef } from 'react';

const ScrollToDown: React.FC = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollButtonClick = () => {
    scrollToBottom();
  };

  return (
    <div style={{ height: '400px', overflowY: 'scroll' }}>
      {/* Render your messages */}
      <div style={{ marginBottom: '100px' }} ref={messagesEndRef}>
        {/* This div will be scrolled into view */}
      </div>

      {/* Scroll button */}
      <button onClick={handleScrollButtonClick}><Image className='animate-spin-slow ' src='/ScDown.png' alt='scroll down' height={100} width={100} /></button>
    </div>
  );
};

export default ScrollToDown;
