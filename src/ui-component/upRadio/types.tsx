export interface UpRadioProps {
    className?: string;
    name?: string;
    isSelectedValue: string;
    setSelectedValue: (value: string) => void;
    value: string;
    label: string;
    disabled?: boolean;
  }
  