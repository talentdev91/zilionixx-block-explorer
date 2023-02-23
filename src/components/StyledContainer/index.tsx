import { withStyles, styled } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import Container from '@material-ui/core/Container'

export const StyledContainer = withStyles((theme) => ({
  root: {
    padding: '0 15px 50px 15px',
  },
  maxWidthLg: {
    maxWidth: '1400px',
  },
}))(Container)

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#3498db',
  '&:hover': {
    color: '#2c80b4',
  },
})

export const StyledBackgroundContainer = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: '0 15px 50px 15px',
  },
  maxWidthLg: {
    maxWidth: '1400px',
  },
}))(Container)
