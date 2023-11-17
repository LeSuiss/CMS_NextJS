import React from 'react';

interface IframeProps {
  companyName: string;
  googleMapLocation: string;
  style?: {
    minHeight?: string;
    aspectRatio?: string;
  };
}

export const Iframe = ({
  companyName,
  googleMapLocation,
  style,
}: IframeProps) => (
  <div
    style={{
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      minHeight: style?.minHeight ?? '200px',
      aspectRatio: style?.aspectRatio ?? '4/3',
    }}
  >
    <iframe
      title={`${companyName} map`}
      src={googleMapLocation}
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        width: '100%',
        height: '100%',
      }}
      loading="lazy"
    />
  </div>
);
