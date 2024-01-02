"use client";
import React, { useState } from 'react';
import UpSelect from '@/ui-component/upSelect/UpSelect';

const SelectMenu = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (event:any) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    { value: 'option1', name: 'radha' },
    { value: 'option2', name: 'rani' },
    { value: 'option3', name: 'raha' },
  ];
  
  return (
    <div>
      <UpSelect
        id="exampleId"
        value={selectedValue}
        options={options}
        onChange={handleSelect}
      >
      </UpSelect>

      <h1>Selected Value: {selectedValue}</h1>
    </div>
  );
};

export default SelectMenu;
