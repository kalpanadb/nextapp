"use client"
import { useState } from 'react';
import Dropdown from '@/ui-component/upDropdown/UpDropdown';

const DropdownMenu: React.FC = () => {
  const [selectedChange, setSelectedChange] = useState('');

  const handleChange = (selectedOption: string) => {
    setSelectedChange(selectedOption);
    console.log(selectedOption);
  };

  const dropdownOptions = [
    { value: 'sana', label: 'Sana' },
    { value: 'kavya', label: 'Kavya' },
    { value: 'madhu', label: 'Madhu' },
  ];

  return (
    <>
      <Dropdown
        label="Select an option"
        value={selectedChange}
        options={dropdownOptions}
        onChange={handleChange}
      />
    </>
  );
};

export default DropdownMenu;
