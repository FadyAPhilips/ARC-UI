import React from 'react';
import './Button.scss';

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  primaryColor?: string;
  secondaryColor?: string;
  border?: boolean;
  negative?: boolean;
};

const Title: React.FC<ButtonProps> = ({
  text,
  onClick,
  size = 'medium',
  primaryColor = '#3699b1',
  secondaryColor = '#fff',
  border = 'false',
  negative = 'false',
}) => {
  const pColor = negative ? primaryColor : secondaryColor;
  const sColor = !negative ? primaryColor : secondaryColor;

  const borderClass = border ? 'button-border' : 'button-noBorder';
  const className = `button button-${size} ${borderClass}`;

  return (
    <button
      className={className}
      style={{
        color: sColor,
        backgroundColor: pColor,
        borderColor: sColor,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Title;
