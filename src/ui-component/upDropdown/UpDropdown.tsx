// Dropdown.tsx
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { DropdownProps } from './types';

const Dropdown: React.FC<DropdownProps> = ({ id,label, value, options, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="dropdown-label">{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        label={label}
        onChange={(event) => onChange(event.target.value as string)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
