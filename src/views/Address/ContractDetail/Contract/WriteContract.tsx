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
import { getWriteContractInfo, getMetamaskConnected, getMetamaskDisConnected } from '../../../../store/actions/address'
import { useParams } from 'react-router'
import { BackendURL } from '../../../../config/config'

interface WriteContractProps {
  getWriteContractInfo: (address: any) => void
  getMetamaskConnected: () => void
  getMetamaskDisConnected: () => void
  metamaskConnected: boolean
  metamaskAddress: any
  writeContract: any
  loading: boolean
  abi: Array<Object>
}

function WriteContract({
  getWriteContractInfo,
  getMetamaskConnected,
  getMetamaskDisConnected,
  metamaskConnected,
  metamaskAddress,
  writeContract,
  loading,
  abi,
}: WriteContractProps) {
  const { address } = useParams<any>()

  var accordionList: { panelId: string; panelTitle: any; returnType: string; children: JSX.Element }[] = []
  const [writeContractAccordion, setWriteContractAccordion] = React.useState(accordionList)

  // const [isWeb3Connected, SetIsWeb3Connected] = React.useState(false)
  const ethEnabled = async () => {
    console.log('ethEnabled clicked')
    //
    getMetamaskConnected()
  }
  const ethDisable = async () => {
    getMetamaskDisConnected()
  }

  React.useEffect(() => {
    getWriteContractInfo(address)

    if (metamaskConnected) {
    }
    if (!loading) {
      var accordions = []
      for (let i = 0; i < writeContract.length; i++) {
        let method = writeContract[i]
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
            var queryInputForm = {
              id: nanoid(),
              label: method_arg.name + ' (' + method_arg.type + ')',
              placeholder: method_arg.name + ' (' + method_arg.type + ')',
            }
            querys.push(queryInputForm)
          }
          var queryFormExample = {
            queryInputForms: querys,
            apiUrl: `${BackendURL}/address/write/${address}`,
            panelTitle: method['method_name'],
          }
          accordion.children = (
            <ContractQueryForm
              panelTitle={queryFormExample.panelTitle}
              queryInputForms={queryFormExample.queryInputForms}
              apiUrl={queryFormExample.apiUrl}
              type="write"
              abi={abi}
              metamaskAddress={metamaskAddress}
            />
          )
        }
        accordions.push(accordion)
      }
      setWriteContractAccordion(accordions)
    } else {
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abi, address, loading, metamaskAddress, getWriteContractInfo, metamaskConnected])

  return (
    <Box>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6} style={{ alignSelf: 'center' }}>
            <Typography variant="body2">
              {!metamaskConnected ? (
                <>
                  <i className="fas fa-circle" style={{ color: 'red' }}></i> &nbsp;
                  <StyledLink underline="none" className="enableEthereumButton" onClick={ethEnabled}>
                    Connect to Web3
                  </StyledLink>
                </>
              ) : (
                <>
                  <i className="fas fa-circle" style={{ color: '#28A745' }}></i>&nbsp; Connected to Web3 -
                  <StyledLink underline="none" className="disableEthereumButton">
                    {metamaskAddress}
                  </StyledLink>
                </>
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" style={{ float: 'right', display: 'flex' }}>
              [
              <StyledLink underline="none" onClick={ethDisable}>
                Reset
              </StyledLink>
              ]
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        {writeContractAccordion.map((accordion, index) => {
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

const mapStateToProps = (state: AppState) => ({
  writeContract: state.address.writeContract,
  loading: state.address.loadingWriteContract,
  metamaskAddress: state.address.metamaskAddress,
  metamaskConnected: state.address.metamaskConnected,
  abi: state.address.abi,
})

export default connect(mapStateToProps, { getWriteContractInfo, getMetamaskConnected, getMetamaskDisConnected })(
  WriteContract,
)
