export type UpCheckboxProps = {
    id?: string;
    value?: String;
    name?: string;
    label: string;
    checked: boolean;
    helperText?: string | React.ReactNode;
    onChange: (checked: boolean) => void
}