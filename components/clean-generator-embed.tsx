'use client';

import React, { useEffect } from 'react';

interface CleanGeneratorEmbedProps {
  height?: string;
  className?: string;
}

export const CleanGeneratorEmbed: React.FC<CleanGeneratorEmbedProps> = ({
  height = '600px',
  className = ''
}) => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type) {
        // Send directly to Activepieces
        fetch('https://your-activepieces-webhook.url/api/webhook', {
          method: 'POST',
          body: JSON.stringify({
            event: event.data.type,
            payload: event.data.payload,
            timestamp: new Date().toISOString()
          }),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your-auth-token-here'
          }
        }).catch(error => console.error('Activepieces error:', error));
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe
      id="tattty-generator"
      src="https://morons.vercel.app"
      style={{
        padding: '5px',
        border: 'none',
        width: '100%',
        height: height,
        background: 'black',
        boxSizing: 'border-box'
      }}
      allow="clipboard-write"
      title="TaTTTy Tattoo Generator"
      className={className}
    />
  );
};
