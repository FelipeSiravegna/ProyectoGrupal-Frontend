import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useField, useFormikContext } from 'formik';
import { useState } from 'react';

export default function ComboBox({name,
    options, label,
    ...otherProps}) {
        const { setFieldValue } = useFormikContext();
        const [field, meta] = useField(name);
        
        const handleChange = evt => {
          
          const { outerText } = evt.target;
          setFieldValue(name, outerText);
          console.log(outerText)
        };
      
        const configSelect = {
          ...field,
          ...otherProps,
          
          variant: 'outlined',
          fullWidth: true,
          onChange: handleChange
        };
      
        if (meta && meta.touched && meta.error) {
          configSelect.error = true;
          configSelect.helperText = meta.error;
        }
       
       
  return (
    <Autocomplete
      disablePortal
      onChange={handleChange}
      fullWidth 
      id="combo-box-demo"
      options={options}
      renderInput={(params) => (
      <TextField  {...params}  name={name} label={label} {...configSelect} />)}
    />
  );
}