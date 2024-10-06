// src/components/Title.tsx
import React from 'react';

interface TitleProps {
  text: string; // The text to display as the title
  size?: 'small' | 'medium' | 'large'; // Optional size prop to adjust title size
  color?: string; // Optional color prop to customize the title color
}

const Title: React.FC<TitleProps> = ({
  text,
  size = 'medium',
  color = '#000',
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'title-small';
      case 'large':
        return 'title-large';
      default:
        return 'title-medium';
    }
  };

  return (
    <h1 className={getSizeClass()} style={{ color }}>
      {text}
    </h1>
  );
};

export default Title;
