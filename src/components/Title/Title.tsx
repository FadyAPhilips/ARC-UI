// src/components/Title.tsx
import React from 'react';
import './Title.scss';

export type TitleProps = {
  text: string;
  size?: 'small' | 'medium' | 'large';
  weight?: 'regular' | 'semibold' | 'bold';
  color?: string;
};

const Title: React.FC<TitleProps> = ({
  text,
  size = 'medium',
  weight = 'regular',
  color = '#000',
}) => {
  const titleClass = `title title-${size} title-font-${weight}`;

  return (
    <h1 className={titleClass} style={{ color }}>
      {text}
    </h1>
  );
};

export default Title;
