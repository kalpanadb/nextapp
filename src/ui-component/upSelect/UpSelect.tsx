"use client"
import React from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { UpSelectProps } from './types';
import { MenuItem } from '@mui/material';

 const UpSelect = (props:UpSelectProps) => {
  const {id,value,onChange,options}=props;
  return (
  
      <FormControl>
        <Select
          labelId={id}
          id={id}
          value={value}
          onChange={onChange}
        >
           {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
        </Select>
      </FormControl>
  );
};

export default UpSelect;
