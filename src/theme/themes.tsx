import { createTheme, responsiveFontSizes } from '@material-ui/core'

var baseTheme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 14,
  },
})

baseTheme = responsiveFontSizes(baseTheme)

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'dark',
    primary: {
      main: '#252525', //root background color
      dark: '#212121', //input background
      light: '#212121', //card background
      contrastText: '#c0d3df', //disable text color
    },
    secondary: {
      main: '#FFFFFF', ////text color remain color
      dark: '#2A2B2D',
      light: '#323232', //input border color
    },
    info: {
      main: '#3498db', //button background
      dark: '#2c80b4', //link text mouse hover color
      light: '#323232', //input and textarea border color
    },
    text: {
      primary: '#e5ecf3', //header title text color
      secondary: '#252525', //table search box hover color
      disabled: '#c0d3df', //button disable color
      hint: '#e5ecf3', //table text color
    },
  },
  typography: {
    body1: {
      color: '#c0d3df',   //text color contrast strong
      fontSize: '14px',
    },
    body2: {
      color: '#c0d3df',
      fontSize: '14px',
    },
  },
})

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'light',
    primary: {
      main: '#FFFFFF',
      dark: '#F8FAFD',
      light: '#FFFFFF',
      contrastText: '#6c757e',
    },
    secondary: {
      main: '#252525',
      dark: '#F1F2F4',
      light: '#e7eaf3',
    },
    info: {
      main: '#3498db',
      dark: '#2c80b4',
      light: '#03a9f4',
    },
    text: {
      primary: '#4a4f55',
      secondary: '#F8FAFD',
      disabled: '#77838f',
      hint: '#12161c',
    },
  },
  typography: {
    body1: {
      color: '#12161c',
      fontSize: '14px',
    },
    body2: {
      color: '#1e2022',
      fontSize: '14px',
    },
  },
})

export { lightTheme, darkTheme }
