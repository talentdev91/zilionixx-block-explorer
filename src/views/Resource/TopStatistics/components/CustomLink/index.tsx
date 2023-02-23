import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export const StyledLink = withStyles((theme) => ({
  root: {
    color: theme.palette.info.main,
    fontSize: '.825rem',
    '&:hover': {
      color: theme.palette.info.dark,
    },
  },
}))(Link)

export const StyledEllipsisTypography = withStyles((theme) => ({
  root: {
    width: "170px",
    color: theme.palette.info.main,
    fontSize: '.825rem',
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: 1.8,
  },
}))(Typography)
