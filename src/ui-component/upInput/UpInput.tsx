"use client"
import { FormControl, TextField } from "@mui/material";
import { UpInputProps } from "./types";
import { HelperText, InputStyled } from "./UpInput.styled";


const UpInput = (props: UpInputProps) => {
    const {
        id = "userinput",
        className,
        value,
        type = "text",
        placeholder ,
        fullWidth,
        width = 100,
        ariaName = "input",
        variant = "outlined",
        startAdornment,
        endAdornment,
        onInputHandler,
        helperText,
        label,
        ref
    } = props

    const renderHelperText = () => {
        if (helperText) {
            return (
                <HelperText error id="outlined-weight-helper-text">
                    {helperText}
                </HelperText>
            );
        }
    };
    return (
        <FormControl variant={variant} className={className} sx={{ width: `${fullWidth ? 100 : width}%` }}>
            <InputStyled
                id={id}
                label={label}
                ref={ref}
                placeholder={placeholder}
                type={type}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                inputProps={{ 'aria-label': ariaName }}
                value={value}
                onChange={onInputHandler}
            />
            {renderHelperText()}

        </FormControl>
    )

};
export default UpInput;
