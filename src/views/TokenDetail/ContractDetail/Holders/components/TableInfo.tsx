import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

export const useStyles = makeStyles((theme: Theme) => ({
  tokenCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
  smallText: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontSize: '70%',
  },
  holdpietitle: {
    marginBottom: '.5rem!important',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '.65625rem',
    padding: '.3rem .5rem',
    borderRadius: '.25rem',
    color: '#3498db',
    background: 'rgba(51,122,254,.1)',
    borderColor: 'transparent',
    fontWeight: 500,
    '&:hover': {
      color: 'white',
      backgroundColor: '#0D61FE',
    },
  },  
  linkitem: {
    marginBottom: '0.5rem',
    textDecoration: 'none',
  },
}))
const TableInfo = (address: any, totalAccounts: any) => {
  const classes = useStyles()

  return (
    <Box display="flex" flexDirection="column">
      <Link to={`/token/tokenholderchart/${address}`} className={classes.linkitem}>
        <span className={classes.holdpietitle}>
          <i className="fas fa-chart-pie"></i>Token Holders Chart
        </span>
      </Link>
      <Typography className={classes.tokenCount}>A total of 68 token holders</Typography>
    </Box>
  )
}

export default TableInfo
