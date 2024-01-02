export interface UpInputProps {
  ref:any;
  label?:String;
  value: string;
  type?: string;
  disabled?: boolean;
  id?: string;
  className?:string;
  placeholder?:string;
  fullWidth?:boolean;
  width?:Number;
  variant?:'outlined' |'filled'|'standard';
  ariaName?:string;
  startAdornment?:React.ReactNode;
  endAdornment?:React.ReactNode;
  onInputHandler?:(event:React.ChangeEvent<HTMLInputElement>)=>void;
  helperText?: string | React.ReactNode;
}