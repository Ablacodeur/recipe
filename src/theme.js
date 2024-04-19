import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4E80EE', // Couleur bleu comme primaire
    },
    secondary:{
      main:'#394150',
    },
    black:{
      main:'#0E1325',
    },
    yellow:{
      main:'#FEBD2E'
    },
    white:{
      main:'#E5E7EB'
    }
  },

  
  typography: {
    fontFamily: 'Outfit, sans-serif', // Police par défaut
    h1: {
      "fontWeight": 900,
    },
    h2: {
      "fontWeight": 800,
    },
    h3: {
      "fontWeight": 600,
    },
    h4: {
      "fontWeight": 500,
    },
    h5: {
      "fontWeight": 400,
    },
    h6: {
      "fontWeight": 300,
    },
    subtitle1: {
      "fontWeight": 400,
    },
  },
});

export default theme;
