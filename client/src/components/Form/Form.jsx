import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Textfield from "./Textfield";
import Select from "./Select";
import ComboBox from "./AutoComplete";
import Tags from "./tags";
import Upload from "./Upload";
import DateTimePicker from "./DataTimePicker";
import Button from "./Button";
import { addMovie, allDirector, allActor, allGenres } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import './Form.css'
import NavbarP from "../NavbarP/NavbarP";
import fondo from '../media/fondo.jpg'


const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));


let lang = ["ES", "EN", "FR"];
const INITIAL_FORM_STATE = {
  name: "",
  description: "",
  image: "",
  director: "",
  trailer: "",
  popularity: "",
  releaseDate: "",
  length: "",
  rating: "",
  language: "",
  actor: [],
  genre: [],
};
const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().typeError("This field is required").required("Required"),
  description: Yup.string()
    .typeError("This field is required")
    .required("Required"),
  image: Yup.string()
    .matches(/([a-z-_0-9/:.]*.(jpg|jpeg|png|gif))/i, "Image is required")
    .required("Image is required"),
  trailer: Yup.string()
    .matches(
      /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm,
      "This field is required"
    )
    .required("Please enter a valid url"),
  director: Yup.string()
    .typeError("This field is required")
    .required("Required"),
  popularity: Yup.string().required("Required"),
  releaseDate: Yup.string().required("Required"),
  length: Yup.number().required("Required"),
  rating: Yup.number()
    .required("Required")
    .max(10, "Rating cant be longer than 10"),
  language: Yup.string().required("Required"),
  actor: Yup.array()
    .min(1, "You can't leave this blank.")
    .required("You can't leave this blank.")
    .nullable(),
  genre: Yup.array()
    .min(1, "You can't leave this blank.")
    .required("You can't leave this blank.")
    .nullable(),
});
const Forms = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDB = useSelector((state) => state.user)
  useEffect(() => {
    //console.log("aqui");
    // dispatch(allDirector());
    dispatch(allActor());
    dispatch(allGenres());
  }, [dispatch]);

  // let directors = useSelector((state) => state.directors);
  let actors = useSelector((state) => state.actors);
  let genres = useSelector((state) => state.genres);
  // let directores = directors.map((e) => e.name);
  let actore = actors.map((e) => e.name);
  let genero = genres.map((e) => e.name);
  let actores= actore?.unshift('Select an option')
  let generos= genero?.unshift('Select an option')
  const handleSubmit = (values) => {
    const {
      name,
      description,
      image,
      trailer,
      director,
      releaseDate,
      actor,
      length,
      popularity,
      rating,
      genre,
      language,
    } = values;
    let datos = {
      name,
      image,
      description,
      trailer,
      director,
      releaseDate,
      language,
      actors: actor,
      rating: parseFloat(rating),
      length: parseInt(length),
      popularity: parseFloat(popularity),
      genres: genre,
    };
    dispatch(addMovie(datos));
    Swal.fire({
      icon: "success",
      title: "The movie has been save",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <div className="formu">
      <NavbarP/>
      <h1 className="ndea">Create movie</h1>
      <br></br>
      {userDB.premium ?
    <Grid container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={handleSubmit}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Textfield name="name" label="Movie Name" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="description"
                      label="Description"
                      multiline={true}
                      minRows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <DateTimePicker name="releaseDate" label="Release Date" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="length" label="Length" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="rating" label="Rating" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="popularity" label="Popularity" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="trailer" label="Trailer" />
                  </Grid>

                  <Grid item xs={12}>
                    <Select name="language" label="Language" options={lang} />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="director" label="Director" />
                  </Grid>

                  {/* <Grid item xs={12}>
                    <ComboBox
                      name="director"
                      label="Director"
                      options={directores}
                    />
                  </Grid> */}

                  <Grid item xs={12}>
                    <Tags name="actor" label="Actors" options={actore} />
                  </Grid>

                  <Grid item xs={12}>
                    <Tags name="genre" label="Genres" options={genero} />
                  </Grid>

                  <Grid item xs={12}>
                    <Upload name="image" label="image" />
                  </Grid>
                  
                  <Grid item xs={12}>
                    {<Button>Submit Form</Button>}
                  </Grid>
                      
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
    : <div className="accesoDenegau">
<h1 className="er">Do you want to create movies? <Link className="ll" to={'/premium'}>SUBSCRIBE TO PREMIUM</Link> to get this and more exclusive benefits</h1>
      
      
      </div>}
    </div>
  );
};

export default Forms;

