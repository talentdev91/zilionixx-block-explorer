import { makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  leftPart: {
    paddingBottom: '0 !important',
  },
  leftListItem: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#1e2022',
    textAlign: 'left',
    wordWrap: 'break-word',
  },
  listDivider: {
    margin: '12px 0',
  },
  partDivider: {
    marginTop: '12px',
    [theme.breakpoints.up('md')]: {
      display: 'none !important',
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  rightListItem: {
    color: '#4a4f55',
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    wordWrap: 'break-word',
  },
}))
