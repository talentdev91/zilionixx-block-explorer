import { Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  basicBackground: {
    minHeight: '100vh',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
  },
}))
