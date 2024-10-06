import React from 'react';
import clsx from 'clsx';

interface TitleProps {
  text: string;
  size?: 'small' | 'medium' | 'large'; // Optional size prop
  isHighlighted?: boolean; // Optional prop for conditional styling
}

const getSizeClass = (size?: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 'text-sm'; // Tailwind class for small text
    case 'large':
      return 'text-6xl'; // Tailwind class for large text
    default:
      return 'text-4xl'; // Default size (medium)
  }
};

const Title: React.FC<TitleProps> = ({
  text,
  size = 'medium',
  isHighlighted = false,
}) => {
  // return (
  //   <h1
  //     className={clsx(
  //       'font-bold text-center my-4 caret-lime-400', // Base styles
  //       getSizeClass(size), // Dynamic size class
  //       isHighlighted ? 'text-yellow-500' : 'text-gray-800', // Conditional class based on isHighlighted
  //     )}
  //   >
  //     {text}
  //   </h1>
  // );
  return <h1 className="text-2xl font-bold text-blue-500">Hello World</h1>;
};

export default Title;
