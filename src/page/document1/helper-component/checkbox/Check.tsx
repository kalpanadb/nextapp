"use client"
import UpCheckbox from '@/ui-component/upCheckbox/UpCheckbox';
import React, { useState } from 'react';

export default function Checkboxes() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
console.log(checked);
  return (
    <>
      <UpCheckbox label='yes' checked={checked} onChange={handleChange}/>

    </>
  );
}
