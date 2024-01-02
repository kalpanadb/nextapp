'use client';
import { Controller } from 'react-hook-form';
import { UpInputProps } from './types';
import UpInput from '../upInput/UpInput';

const FormInput = (props: UpInputProps) => {
    const { id, name = 'UpInput', control, rules, errorText,placeholder } = props;

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue=""
            render={({ field: { onChange, value,ref } }) => (
                <UpInput
                ref={ref}
                    label=''
                    id={id ? id : name}
                    fullWidth
                    onInputHandler={onChange}
                    value={value}
                    placeholder={placeholder}
                    helperText={errorText}
                />
            )}
        />
    );
};

export default FormInput;
