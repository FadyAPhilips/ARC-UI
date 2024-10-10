import React, { ReactNode } from 'react';
import styled from 'styled-components';

export type TitleProps = {
  children: ReactNode; // Use children instead of text
  size?: 'small' | 'medium' | 'large';
  weight?: 'regular' | 'semibold' | 'bold';
  color?: string;
};

const StyledTitle = styled.h1<TitleProps>`
  font-size: ${({ size }) =>
    size === 'small' ? '16px' : size === 'medium' ? '24px' : '32px'};
  color: ${({ color }) => color || 'black'};
  font-weight: ${({ weight }) =>
    weight === 'regular' ? 400 : weight === 'semibold' ? 600 : 700};
`;

StyledTitle.defaultProps = {
  size: 'medium',
  color: 'black',
  weight: 'regular',
};

const Title: React.FC<TitleProps> = ({ children, size, color, weight }) => {
  return (
    <StyledTitle size={size} color={color} weight={weight}>
      {children}
    </StyledTitle>
  );
};

export default Title;
