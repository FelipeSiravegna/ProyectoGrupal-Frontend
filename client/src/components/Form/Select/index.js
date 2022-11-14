import React from 'react';
import { TextField, MenuItem } from '@mui/material/';
import { useField, useFormikContext } from 'formik';

const SelectWrapper = ({
  name,
  options,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = evt => {
    const { value } = evt.target;
    console.log(evt)
    setFieldValue(name, value);
    console.log(value)
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={options[item]}>
            {options[item]}
          </MenuItem>
        )
      })}
    </TextField>
  );
};

export default SelectWrapper;
