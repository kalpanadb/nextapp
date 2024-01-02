"use client"
import React, { useState } from 'react';
import UpRadioButton from '@/ui-component/upRadio/UpRadio';


const RadioList= () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (clickValue: string) => {
    setSelectedValue(clickValue);
  };

  const radioOptions = [
    { value: '1', label: 'green' },
    { value: '2', label: 'red' },
    { value: '3', label: 'yellow'},
  ];

  return (
    <div>
      {radioOptions.map((option) => (
        <UpRadioButton
          key={option.value}
          isSelectedValue={selectedValue}
          setSelectedValue={handleRadioChange}
          value={option.value}
          label={option.label}
        />
      ))}
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
};

export default RadioList;
