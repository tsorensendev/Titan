import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import blueGrey from '@material-ui/core/colors/blueGrey';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal,
    secondary: blueGrey,
    error: {
      light: red[400],
      main: red[700],
      dark: red.A700,
    },
  },
});

export default theme;
