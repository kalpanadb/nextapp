"use client"
import React from 'react';
import Radio from '@mui/material/Radio';
import { UpRadioProps } from './types';


const UpRadioButton=(props:UpRadioProps) => {
    const{
  className,
  name = 'radio-buttons',
  isSelectedValue,
  setSelectedValue,
  value,
  label,
  disabled,
}=props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === isSelectedValue) {
      setSelectedValue('');
    } else {
      setSelectedValue(event.target.value);
    }
  };

  return (
    <div>
      <Radio
        className={className}
        checked={isSelectedValue === value}
        onChange={handleChange}
        value={value}
        name={name}
        disabled={disabled}
        inputProps={{ 'aria-label': name }}
      />
      <label>{label}</label>
    </div>
  );
};

export default UpRadioButton;
