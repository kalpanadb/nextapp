import { SelectChangeEvent } from '@mui/material';

export interface UpSelectProps {
  value: string;
  id?:string;
  options: { value: string; name: string }[]; 
  children: string | React.ReactNode;
  onChange: (event: SelectChangeEvent|any) => void;
}
