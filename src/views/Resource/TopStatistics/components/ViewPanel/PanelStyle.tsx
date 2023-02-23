import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

export const StyledPaper = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    height: '100%',
    backgroundColor: theme.palette.primary.light,
    color: theme.typography.body1.color,
  },
}))(Paper)

export const StyledBodyBox = withStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
  },
}))(Box)

export const StyledBox = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.text.secondary,
  },
}))(Box)
