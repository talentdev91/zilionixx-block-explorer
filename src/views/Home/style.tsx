import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: '-80px',
    },
    section: {
      alignItems: 'left',
      justifyContent: 'left',
      marginBottom: '30px',
      textAlign: 'center',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#12161c'}`,
      backgroundImage: `url('/images/abstract-shapes-20.png')`,
      backgroundPosition: 'center',
      padding: '30px 15px 20px 15px',
    },
    title: {
      color: '#FBDA3C',
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.5,
      margin: '15px 15px',
      alignSelf: 'self-end',
    },
    search: {
      width: '100%',
      margin: 'auto',
    },
    adimg: {
      borderRadius: '1rem',
      marginTop: '25px',
      alignItems: 'center',
      zIndex: 3,
      width: '299px',
      height: '168px',
    },
  }),
)

export default useStyles
