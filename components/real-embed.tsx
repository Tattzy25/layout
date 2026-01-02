'use client';

import React, { useEffect, useRef } from 'react';

interface RealEmbedProps {
  width?: string;
  height?: string;
  className?: string;
}

export const RealEmbed: React.FC<RealEmbedProps> = ({
  width = '100%',
  height = '500px',
  className = ''
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set up cross-domain communication
    const handleMessage = (event: MessageEvent) => {
      // Verify the origin for security
      if (event.origin !== 'https://morons.vercel.app') return;

      // Handle messages from the embedded content
      console.log('Received message from iframe:', event.data);

      // You can add specific handlers for different message types
      if (event.data.type === 'generate') {
        console.log('Generate button clicked in iframe');
        // Handle generate action
      } else if (event.data.type === 'send') {
        console.log('Send button clicked in iframe');
        // Handle send action
      } else if (event.data.type === 'prompt') {
        console.log('Prompt input:', event.data.value);
        // Handle prompt input
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Send messages to the iframe
  const sendToIframe = (message: {type: string, [key: string]: unknown}) => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(message, 'https://morons.vercel.app');
    }
  };

  return (
    <div className={`responsive-iframe-container ${className}`} style={{ width }}>
      <iframe
        ref={iframeRef}
        src="https://morons.vercel.app"
        width="100%"
        height={height}
        style={{
          border: 'none',
          padding: '5px',
          boxSizing: 'border-box'
        }}
        allowFullScreen
        allow="clipboard-write; microphone; camera"
        title="Morons App Embed"
      />
    </div>
  );
};
