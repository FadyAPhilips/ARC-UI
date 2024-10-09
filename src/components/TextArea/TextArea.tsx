import React, { useState, useEffect } from 'react';
import './TextArea.scss';

export interface TextAreaProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  minRows?: number;
  resizable?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
  negative?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  value = '',
  placeholder = 'Enter text...',
  onChange,
  minRows = 3,
  resizable = true,
  primaryColor = 'rgba(0,0,0,0)',
  secondaryColor = '#000',
  negative = 'false',
}) => {
  const [textareaValue, setTextareaValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setTextareaValue(newValue);

    useEffect(() => {
      setTextareaValue(value);
    }, [value]);

    if (onChange) {
      onChange(newValue);
    }
  };

  const pColor = negative ? primaryColor : secondaryColor;
  const sColor = !negative ? primaryColor : secondaryColor;

  return (
    <textarea
      className={`textarea-input`}
      value={textareaValue}
      placeholder={placeholder}
      rows={minRows}
      onChange={handleChange}
      style={{
        resize: resizable ? 'both' : 'none',
        color: sColor,
        backgroundColor: pColor,
      }}
    />
  );
};

export default TextArea;
