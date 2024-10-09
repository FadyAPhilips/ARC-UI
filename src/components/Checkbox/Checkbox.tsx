// src/components/Checkbox/Checkbox.tsx
import React, { useState } from 'react';
import './Checkbox.scss';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  changeable?: boolean;
  onChange?: (checked: boolean) => void;
  crossOutOnChecked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  changeable = true,
  crossOutOnChecked = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;

    if (changeable) {
      // Update local state if onChange isn't passed
      if (!onChange) {
        setIsChecked(newChecked);
      }

      // Trigger parent callback if it exists
      if (onChange) {
        onChange(newChecked);
      }
    }
  };

  return (
    <div className="checkbox-container">
      <label className={`checkbox-label ${changeable ? 'changeable' : ''}`}>
        <input
          type="checkbox"
          className="checkbox-input"
          checked={onChange ? checked : isChecked}
          onChange={handleChange}
        />
        {label && (
          <span
            className={`checkbox-text ${
              crossOutOnChecked && isChecked ? 'crossed-out' : ''
            }`}
          >
            {label}
          </span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
