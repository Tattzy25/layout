'use client';

import React from 'react';

interface IframeWrapperProps {
  src: string;
  width?: string;
  height?: string;
  className?: string;
}

export const IframeWrapper: React.FC<IframeWrapperProps> = ({
  src,
  width = '100%',
  height = '100%',
  className = ''
}) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      className={className}
      style={{
        border: 'none',
        padding: '5px',
        boxSizing: 'border-box'
      }}
      allowFullScreen
    />
  );
};
