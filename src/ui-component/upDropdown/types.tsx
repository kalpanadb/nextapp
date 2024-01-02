export type DropdownProps ={
  id?:string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (selectedOption: string) => void;
}