import React from 'react';
import './input.scss';

export interface InputProps {
  placeholder?: string;
  value: string;
  size?: 'small' | 'medium' | 'large';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  size = 'medium',
}) => {
  const className = `input input-${size} `;
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
