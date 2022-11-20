import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, green, grey, red, yellow } from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const theme = createTheme({
  palette: {
    rojo: {
      main: red[500],
    },
    rojo2: {
      main: red[400],
    },
    blanco: {
      main: grey[50],
    },
    gris: {
      main: grey[400],
    },
    amarillo: {
      main: yellow[500],
    },
    azul: {
      main: blue[500],
    },
    verde: {
      main: green[500],
    },
    negro: {
      main: grey[900],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Auth0Provider
        domain="dev-8o2otz3ie1yxg3ny.us.auth0.com"
        clientId="UzyCaJmzUIjeNtEz970NiXpSy7kyHcmS"
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </Auth0Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);