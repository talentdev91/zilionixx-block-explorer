import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
//material-ui components
import { Typography, Box } from '@material-ui/core'
//material-ui icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
//components
import routes from '../../../routes'
import { useStyles, StyledAccordion, StyledAccordionSummary, StyledAccordionDetails } from '../TopmenuStyle'

const TopMenuToogle = () => {
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  const [menuName, setMenuName] = React.useState('Home')
  const [parentName, setParentName] = React.useState('Home')

  const handleMenuClick = (linkName: any) => {
    setParentName(linkName)
  }

  const handleMenuListClick = (listName: any, linkName: any) => {
    setParentName(linkName)
    setMenuName(listName)
  }

  return (
    <Box px="0.5rem">
      {routes.map((route, key) => {
        if (!route.children) {
          return (
            <StyledAccordion
              key={key}
              square
              expanded={expanded === `panel${key + 1}`}
              onChange={handleChange(`panel${key + 1}`)}
            >
              <Link key={key} to={route.path} style={{ textDecoration: 'none' }}>
                <StyledAccordionSummary aria-controls={`panel${key + 1}d-content`} id={`panel${key + 1}d-header`}>
                  <Typography
                    onClick={() => handleMenuClick(route.name)}
                    className={clsx(classes.toggleMenuLink, {
                      [classes.activeLink]: parentName === `${route.name}`,
                    })}
                  >
                    {route.name}
                  </Typography>
                </StyledAccordionSummary>
              </Link>
            </StyledAccordion>
          )
        } else {
          return (
            <StyledAccordion
              key={key}
              square
              expanded={expanded === `panel${key + 1}`}
              onChange={handleChange(`panel${key + 1}`)}
            >
              <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fontSize: 15 }} />}
                aria-controls={`panel${key + 1}d-content`}
                id={`panel${key + 1}d-header`}
              >
                <Typography
                  className={clsx(classes.toggleMenuLink, {
                    [classes.activeLink]: parentName === `${route.name}`,
                  })}
                >
                  {route.name}
                </Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                {route.children.map((child, key) => {
                  return (
                    <Link
                      key={key}
                      onClick={() => handleMenuListClick(child.name, route.name)}
                      className={clsx(classes.childLink, {
                        [classes.activeLink]: menuName === child.name && parentName === route.name,
                      })}
                      to={child.path}
                    >
                      {child.name}
                    </Link>
                  )
                })}
              </StyledAccordionDetails>
            </StyledAccordion>
          )
        }
      })}
    </Box>
  )
}

export default TopMenuToogle
