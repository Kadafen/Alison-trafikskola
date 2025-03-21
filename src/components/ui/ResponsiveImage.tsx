import React from 'react';
import Image, { ImageProps } from 'next/image';
import useNetworkQuality from '@/hooks/useNetworkQuality';

type ResponsiveImageProps = Omit<ImageProps, 'quality'> & {
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  lowQualityPlaceholder?: boolean;
};

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  mobileHeight = 'h-[300px]',
  tabletHeight = 'h-[400px]',
  desktopHeight = 'h-[500px]',
  lowQualityPlaceholder = true,
  className = '',
  alt,
  ...props
}) => {
  const { imageQuality, isSlowConnection } = useNetworkQuality();
  
  // Generate responsive height class based on device size
  const heightClass = `${mobileHeight} sm:${tabletHeight} md:${desktopHeight}`;
  
  // Generate blur placeholder if not provided
  const blurPlaceholder = props.blurDataURL || 
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZWFlYWVhIi8+PC9zdmc+";
  
  return (
    <div className={`relative w-full ${heightClass} overflow-hidden ${className}`}>
      <Image
        alt={alt || "Image"}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        quality={imageQuality}
        loading={props.priority ? "eager" : "lazy"}
        placeholder={lowQualityPlaceholder ? "blur" : "empty"}
        blurDataURL={blurPlaceholder}
        {...props}
      />
    </div>
  );
};

export default ResponsiveImage; 