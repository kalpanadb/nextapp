import { ChangeEvent, PropsWithChildren } from "react";
import { UpCheckboxProps } from "./types";
import { CheckBoxContainer, CheckBoxInput, ErrorCheckbox } from "./UpCheckbox.styled";

const UpCheckbox = (props: PropsWithChildren<UpCheckboxProps>) => {
    const {
        label,
        checked,
        onChange,
        helperText,
    } = props;
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.checked);
        }
    };
    const renderHelperText = () => {
        if (helperText) {
            return (
                <ErrorCheckbox error id="outlined-weight-helper-text">
                    {helperText}
                </ErrorCheckbox>
            );
        }
    };
    return (
        <>
            <CheckBoxContainer>
                <CheckBoxInput
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange} />
                {label}
            </CheckBoxContainer>
        </>
    );

}
export default UpCheckbox;