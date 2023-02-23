import { withStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline-flex',
  },
  pullLeft: {
    float: 'left',
  },
  pullRight: {
    float: 'right',
  },
}))

export const RedBackgroundPaper = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    color: '#725002',
    backgroundColor: '#F8EBCD',
  },
}))(Paper)
