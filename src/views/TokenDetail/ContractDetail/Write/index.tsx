import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { StyledLink } from '../../../Resource/TopStatistics/components/CustomLink'
import { StyledAccordion } from '../../../Address/ContractDetail/Contract/components/ReadContract/StyledAccordion'
import { ContractQueryForm } from '../../../Address/ContractDetail/Contract/components/ReadContract/ContractQueryForm'
import { nanoid } from 'nanoid'

const queryFormExample = {
  queryInputForms: [
    {
      id: nanoid(),
      label: '<input> (uint256)',
      placeholder: '<input> (uint256)',
    },
    {
      id: nanoid(),
      label: 'operator (address)',
      placeholder: 'operator (address)',
    },
  ],
  apiUrl: '#',
  panelTitle: 'adventurers_log ',
}

const AccordionList = [
  {
    panelId: 'panel1',
    panelTitle: 'adventurers_log ',
    returnType: 'uint256',
    children: (
      <ContractQueryForm
        panelTitle={queryFormExample.panelTitle}
        queryInputForms={queryFormExample.queryInputForms}
        apiUrl={queryFormExample.apiUrl}
      />
    ),
  },
  {
    panelId: 'panel2',
    panelTitle: 'adventurers_log ',
    returnType: 'uint256',
    children: <p>This is a children2</p>,
  },
]

export const Write: React.FC = () => {
  return (
    <Box>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6} style={{ alignSelf: 'center' }}>
            <Typography variant="body2">
              <i className="far fa-file-alt"></i>
              &nbsp; Read Contract Information
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" style={{ float: 'right', display: 'flex' }}>
              [
              <StyledLink href="#" underline="none">
                Reset
              </StyledLink>
              ]
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        {AccordionList.map((accordion, index) => {
          return (
            <Box mt={1} mb={1} key={index}>
              <StyledAccordion
                id={index + 1}
                panelId={accordion.panelId}
                panelTitle={accordion.panelTitle}
                returnType={accordion.returnType}
                children={accordion.children}
              />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
