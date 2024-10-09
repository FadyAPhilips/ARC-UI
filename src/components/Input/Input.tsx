import React, { useState } from 'react';
import './input.scss';

export interface InputProps {
  placeholder?: string;
  value: string;
  size?: 'small' | 'medium' | 'large';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password';
  primaryColor?: string;
  secondaryColor?: string;
  negative?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  size = 'medium',
  type = 'text',
  primaryColor = 'rgba(0,0,0,0)',
  secondaryColor = '#000',
  negative = 'false',
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const className = `input input-${size} `;
  const inputType =
    type === 'password' && !isPasswordVisible ? 'password' : 'text';

  const pColor = negative ? primaryColor : secondaryColor;
  const sColor = !negative ? primaryColor : secondaryColor;

  return (
    <div className="input-wrapper">
      <input
        type={inputType}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          color: sColor,
          backgroundColor: pColor,
        }}
      />
      {type === 'password' && (
        <button
          type="button"
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
          {!isPasswordVisible ? '🙈' : '👁️'}
        </button>
      )}
    </div>
  );
};

export default Input;
