import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { StyledLink } from '../../../Resource/TopStatistics/components/CustomLink'
import { StyledAccordion } from './components/ReadContract/StyledAccordion'
import { ContractQueryForm } from './components/ReadContract/ContractQueryForm'
import { nanoid } from 'nanoid'

import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { getReadContractInfo } from '../../../../store/actions/address'
import { useParams } from 'react-router'
import { BackendURL } from '../../../../config/config'

interface ContractProps {
  getReadContractInfo: (address: any) => void
  readContract: any
  loading: boolean
}

function ReadContract({ getReadContractInfo, readContract, loading }: ContractProps) {
  const { address } = useParams<any>()
  console.log('contractInfo on frontend', loading)
  console.log('asdfasdfasdfasdf', `${BackendURL}/address/readContract/${address}`)

  var accordionList: { panelId: string; panelTitle: any; returnType: string; children: JSX.Element }[] = []
  const [readContractAccordion, setReadContractAccordion] = React.useState(accordionList)

  React.useEffect(() => {
    getReadContractInfo(address)

    if (!loading) {
      var accordions = []
      for (let i = 0; i < readContract.length; i++) {
        let method = readContract[i]
        let returnType = ''
        for (let j = 0; j < method.method_outputs.length; j++) {
          returnType += method.method_outputs[j].type + method.method_outputs[j].name
        }
        var accordion = {
          panelId: 'panel' + (i + 1).toString(),
          panelTitle: method['method_name'],
          returnType: returnType,
          children: <p></p>,
        }
        if ('method_result' in method) {
          accordion.children = <p>{method['method_result']}</p>
        } else {
          var querys = []

          for (let j = 0; j < method['method_args'].length; j++) {
            var method_arg = method['method_args'][j]
            console.log('method_arg', method_arg)
            var queryInputForm = {
              id: nanoid(),
              label: method_arg.name + ' (' + method_arg.type + ')',
              placeholder: method_arg.name + ' (' + method_arg.type + ')',
            }
            querys.push(queryInputForm)
          }
          var queryFormExample = {
            queryInputForms: querys,
            apiUrl: `${BackendURL}/address/readContract/${address}`,
            panelTitle: method['method_name'],
          }
          accordion.children = (
            <ContractQueryForm
              panelTitle={queryFormExample.panelTitle}
              queryInputForms={queryFormExample.queryInputForms}
              apiUrl={queryFormExample.apiUrl}
              type="read"
              abi={[]}
              metamaskAddress={''}
            />
          )
        }
        accordions.push(accordion)
      }
      setReadContractAccordion(accordions)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, loading, getReadContractInfo])
  return !loading ? (
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
        {readContractAccordion.map((accordion, index) => {
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
  ) : (
    <div>Loading ...</div>
  )
}

const mapStateToProps = (state: AppState) => ({
  readContract: state.address.readContract,
  loading: state.address.loadingReadContract,
})

export default connect(mapStateToProps, { getReadContractInfo })(ReadContract)
