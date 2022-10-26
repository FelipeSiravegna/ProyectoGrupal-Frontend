import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, grey, red, yellow } from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

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

  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
                <App />
            </BrowserRouter>
              </Provider>
              </React.StrictMode>
        </ThemeProvider>,
  document.getElementById('root')
);
