import * as React from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useField, useFormikContext } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Upload = ({
  name,
  ...otherProps
}) => {
  const mystyle = {
    color: "#d32f2f",
    fontSize: "12px",
    marginLeft: "10px"

   
  };
  const mystyle2 = {
    color: "#d32f2f",
    borderColor: "#d32f2f"
   
  };
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);
  const [field, mata] = useField(name);

  const { setFieldValue } = useFormikContext();
  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    
  };  
  
  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }  


  
  const handleImage = async (e) => {
    // Create a Cloudinary instance and set your cloud name.
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtm13pkj8/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImages(file.secure_url);
    setLoading(false);
    
  };
  loading && ( Swal.fire({
    icon: "info",
    title: "Image Upload",
   
  }))
  useEffect(() => {
    console.log(images)
    setFieldValue(name, images)
  }, [images] )

  //   console.log(value)
  return (

    
   <> 
    <Button variant="contained" style={mata && mata.touched && mata.error?mystyle2:null} {...  configTextfield } id={name} name={name} value={images} component="label" startIcon={<PhotoCamera />} onChange={handleImage}>
    Upload
    <input hidden accept="image/*"  multiple type="file"  />
  </Button>
     <span style={mystyle}>{mata && mata.touched && mata.error?mata.error:null}</span>
       
     </>     
    
         
      );
    }
export default Upload;