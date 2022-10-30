import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form'
import {AdvancedImage} from '@cloudinary/react';
// import {Cloudinary} from "@cloudinary/url-gen";
// // import dayjs from "dayjs";
import Swal from 'sweetalert2';
import TextField from "@mui/material/TextField";
import Container from "@mui/material//Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller, useForm } from "react-hook-form";
import {addMovie, getAllGenres} from '../../redux/actions';
import {useDispatch} from 'react-redux';


export default function LoginPage() {

  const [images, setImages]= useState("")
  const dispatch = useDispatch();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      director: "",
      trailer: "",
      releaseDate: "",
      length: "",
      language: "",
      actor: [],
      genre: [],
    },
  });


  const handleChange = async (e)=>{
   // Create a Cloudinary instance and set your cloud name.
   
    const files= e.target.files
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtm13pkj8/image/upload",
     { 
      method: "POST",
      body:data
    }
    )
    const file = await res.json();
    setImages(file.secure_url)
    console.log(file.secure_url)
  }
  

  const onSubmit = async (data) => {
 
    const {
      name,
      description,
      trailer,
      director,
      releaseDate,
      actor,
      length,
      genre,
      language,
    } = data;
    let datos = {
      name,
      image: images,
      description,
      trailer,
      director,
      releaseDate,
      language,
      actor,
      length,
      genre,
    };
    // dispatch(addMovie(datos))
    console.log(datos);
    Swal.fire({
      icon: 'success',
      title: 'The movie has been save',
      showConfirmButton: true,
      
    })
  };
  const actors = ["Dicaprio", "Angelina", "Tom"];
  const directors = ["Disney", "DC", "Marvel"];
  const genres = ["Action", "Adventure", "Comedy"];
  const languages = ["ES", "EN", "FR"];
  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2} mt={2}>
          {/* Textfield 1 */}
          <TextField
            variant="outlined"
            label="Movie Name"
            fullWidth
            autoComplete="Movie Name"
            {...register("name",{
            required: "Required field"})}
            error={!!errors?.name}
            helperText={errors?.name ? errors.name.message : null}
          />
        </Box>
        <Box mb={2}>
          {/* Textfield 3 */}
          <TextField
            id="outlined-multiline-static"
            variant="outlined"
            label="Description"
            multiline
            rows={4}
            fullWidth
            autoComplete="Description"
            {...register("description", {
              required: "Required field"
            })}
            error={!!errors?.description}
            helperText={errors?.description ? errors.description.message : null}
          />
        </Box>
        <Box mb={2}>
          {/* Textfield 5 */}
          <TextField
            id="date"
            label="Release Date"
            autoComplete="Release Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            fullWidth
            {...register("releaseDate",{
              required: "Required field"})}
            error={!!errors?.releaseDate}
            helperText={errors?.releaseDate ? errors.releaseDate.message : null}
          />
        </Box>
        <Box mb={2}>
          {/* Textfield 4 */}
          <TextField
            variant="outlined"
            label="Length"
            fullWidth
            autoComplete="Length"
            type ="number"
            {...register("length", {
              required: "Required field"})}
            error={!!errors?.length}
            helperText={errors?.length ? errors.length.message : null}
          />
        </Box>
        <Box mb={2}>
          {/* Textfield 4 */}
          <TextField
            variant="outlined"
            label="Trailer"
            fullWidth
            autoComplete="Trailer"
            {...register("trailer", {
              required: "Required field"})}
            error={!!errors?.trailer}
            helperText={errors?.trailer ? errors.trailer.message : null}
          />
        </Box>
        <Box mb={2}>
          {/* Select 1  */}
          <Controller
            name="language"
            control={control}
            type="text"
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="language">Language</InputLabel>
                <Select
                  {...field}
                  labelId="language"
                  label="language"
                  {...register("language")}
                >
                  {languages.map((language) => (
                    <MenuItem value={language} key={language}>
                      {language}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Box>
        <Box mb={2}>
          {/* Select 1  */}
          <Controller
            name="director"
            control={control}
            type="text"
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="language">Director</InputLabel>
                <Select
                  {...field}
                  labelId="director"
                  label="director"
                  {...register("director")}
                >
                  {directors.map((director) => (
                    <MenuItem value={director} key={director}>
                      {director}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Box>
        <Box mb={2}>
          {/* Select 1  */}
          <Controller
            name="actor"
            control={control}
            type="text"
            defaultValue={[]}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="actors">Actors</InputLabel>
                <Select
                  {...field}
                  labelId="Actor"
                  label="Actor"
                  multiple
                  {...register("actor")}
                >
                  {actors.map((actor) => (
                    <MenuItem value={actor} key={actor}>
                      {actor}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Box>
        <Box mb={2}>
          {/* Select 3  */}
          <Controller
            name="genre"
            control={control}
            type="text"
            defaultValue={[]}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="genre">Genres</InputLabel>
                <Select
                  {...field}
                  labelId="Genre"
                  label="Genre"
                  multiple
                  {...register("genre")}
                >
                  {genres.map((genre) => (
                    <MenuItem value={genre} key={genre}>
                      {genre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Box>
        
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control 
        type="file" 
        placeholder = "Uploud a image"
        onChange={handleChange}
        required
        />
      </Form.Group>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          SAVE
        </Button>
      </form>
    </Container>
  );
}
