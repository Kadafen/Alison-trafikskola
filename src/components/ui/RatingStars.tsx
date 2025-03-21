import React from 'react';

interface RatingStarsProps {
  rating: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({ 
  rating, 
  max = 5,
  size = 'md',
  color = 'text-yellow-400'
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  const sizeClass = sizes[size];

  return (
    <div className="flex" aria-label={`Rating: ${rating} out of ${max} stars`}>
      {[...Array(max)].map((_, i) => (
        <svg 
          key={i} 
          className={`${sizeClass} ${i < rating ? color : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default RatingStars;