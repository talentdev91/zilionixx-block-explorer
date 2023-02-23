import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.light,
    },
    toptitle: {
      color: theme.palette.text.primary,
      fontWeight: 400,
      fontSize: '1.3125rem',
      lineHeight: 1.5,
      display: 'flex',
      paddingBottom: '.75rem!important',
      position: 'relative',
      justifyContent: 'space-between!important',
      alignItems: 'center',
    },
  }),
)

export default useStyles
