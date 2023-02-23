import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    web3Button: {
      fontSize: '0.675rem',
      color: 'white',
      backgroundColor: '#77838f',
      '&:hover': {
        backgroundColor: '#77838f',
      },
    },
    web3ButtonConnected: {
      fontSize: '0.675rem',
      color: 'white',
      backgroundColor: '#007BFF',
      '&:hover': {
        backgroundColor: '#007BFF',
      },
    },
  }),
)

export default useStyles
