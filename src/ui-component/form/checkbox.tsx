'use client';

import { Controller } from 'react-hook-form';
import UpCheckbox from '../upCheckbox/UpCheckbox';

const FormCheckbox = (props: any) => {
    const { id, name, control, rules, label, errorText } = props;

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value, ref } }) => (
                <UpCheckbox
                    label={label}
                    name={name}
                    checked={value}
                    {...ref}
                    id={id ? id : name}
                    onChange={onChange}
                    value={value}
                    helperText={errorText}
                />
            )}
        />
    );
};

export default FormCheckbox;
