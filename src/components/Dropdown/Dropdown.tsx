// src/components/Dropdown/Dropdown.tsx
import React, { useState } from 'react';
import './Dropdown.scss';

export interface DropdownProps {
  options: string[]; // Array of options to display
  placeholder?: string; // Placeholder text when no option is selected
  onSelect?: (option: string) => void; // Callback for when an option is selected
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select an option',
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false); // To control dropdown open/close state
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // The selected option

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option); // Trigger the onSelect callback
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : placeholder}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              className={`dropdown-option ${
                selectedOption === option ? 'selected' : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
