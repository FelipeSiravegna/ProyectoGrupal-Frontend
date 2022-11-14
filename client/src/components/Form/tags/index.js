import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useField, useFormikContext } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Tags({name,
    options, label, ...otherProps}
   ) 
   
   {    
     const { setFieldValue } = useFormikContext();
     const [field, meta] = useField(name);
     const [value3, setValue3]=useState([])
     
     useEffect(() => {
       console.log(value3)
       setFieldValue(name, value3)
     }, [value3] )
     
     const handleChange = (event, newValue) => {
      setValue3([...newValue.filter((option) => options[0].indexOf(option) === -1)]);
      
    };
      
    
        const configSelect = {
          ...field,
          ...otherProps,
          variant: 'outlined',
          fullWidth: true
          // onChange: handleChange
        };
        
        if (meta && meta.touched && meta.error) {
          configSelect.error = true;
          configSelect.helperText = meta.error;
        }
//   console.log(value)
  return (

<Autocomplete

     multiple={true}
     id="controlled-demo_multiple"
     value={value3}
     onChange={handleChange}
     options={options.length > 0 ? options : []}
     getOptionLabel={(option) => option}
      
     renderTags={(tagValue, getTagPros) =>
       tagValue.map((option, i) => (
         <Chip
         key={option}
           label={option}
           {...getTagPros({ i })}
         // disabled={actores[0].indexOf(option) !== -1} 
         />
       ))}
       // {...register("genre", {
       //   required: "Required field",
       // })}

     fullWidth
     renderInput={(params) => (
       <TextField {...params}  
       {...params}
            label={label}
            name={name}
            placeholder={label}
            {...configSelect}
       />
       )}
       /> 
     
  );
}