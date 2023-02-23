import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  InputField: {
    width: '100%',
    height: 40,
    padding: '5px 5px 5px 10px',
    borderRadius: '5px',
    color: theme.palette.text.primary,
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
    border: `1px solid ${theme.palette.secondary.light}`,
    '&.Mui-focused': {
      boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
      border: `1px solid ${theme.palette.info.light}`,
      outline: 'none',
    },
  },
  button: {
    minWidth: '1.75rem',
    height: '1.75rem',
    backgroundColor: theme.palette.info.main,
    marginBottom: 'auto',
    float: 'right',
    marginRight: 50,
    padding: 18,
    '&:hover': {
      backgroundColor: '#3498db',
      boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
    },
    color: 'white',
    textDecoration: 'none',
    size: 'medium',
  },

  UploadBtn: {
    minWidth: '1.75rem',
    height: '1.75rem',
    backgroundColor: theme.palette.info.main,
    marginBottom: 'auto',
    float: 'left',
    padding: 18,
    '&:hover': {
      backgroundColor: '#3498db',
      boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
    },
    color: 'white',
    textDecoration: 'none',
    size: 'medium',
    width: '80%',
  },

  adTitle: {
    margin: 10,
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  adLabel: {
    margin: 10,
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: '1rem',
  },
  adUpload: {
    margin: 10,
    textAlign: 'left',
    color: theme.palette.text.primary,
    fontSize: '0.8rem',
    width: '100%',
    border: 'none',
    background: 'none',
  },
}))
