import React from 'react'
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    italic: {
      fontStyle: 'italic',
      color: '#6c757d!important',
    },
  }),
)

const Accordion = withStyles((theme) => ({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: theme.palette.primary.dark,
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
}))(MuiAccordion)

const AccordionSummary = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    fontSize: '1rem',
    marginBottom: -1,
    minHeight: 30,
    '&$expanded': {
      minHeight: 30,
    },
  },
  content: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#a2b9c8' : '#343a40'}`,
    fontSize: '1rem',
    margin: '3px 0',
    '&$expanded': {
      margin: '3px 0',
    },
  },
  expanded: {},
}))(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#a2b9c8' : '#343a40'}`,
    backgroundColor: theme.palette.primary.dark,
    fontSize: '.875rem',
    padding: theme.spacing(2),
    display: 'block',
  },
}))(MuiAccordionDetails)

interface AccordionProps {
  id: number
  panelId: string
  panelTitle: string
  returnType: string
  children: React.ReactNode
}

export const StyledAccordion: React.FC<AccordionProps> = ({ id, panelId, panelTitle, returnType, children }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion square expanded={expanded === panelId} onChange={handleChange(panelId)}>
        <AccordionSummary
          expandIcon={<i className="fas fa-arrow-down" style={{ fontSize: 10 }}></i>}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography variant="body2">
            {id}.&nbsp;{panelTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {children}
          <Box>
            <i className="fas fa-long-arrow-alt-right" style={{ fontSize: 10 }}></i>
            <span className={classes.italic}>{returnType}</span>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
