import React from 'react'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { getContractInfo } from '../../../../store/actions/address'
import SimpleTabs from '../../../Resource/TopStatistics/components/Tab/SimpleTabs'
import Code from './Code'
import ReadContract from './ReadContract'
import WriteContract from './WriteContract'
import { nanoid } from 'nanoid'

interface ContractProps {
  getContractInfo: (address: any) => void
  loading: boolean
  contractIsVerified: boolean
  contractIsExist: boolean
}

function Contract({ getContractInfo, loading, contractIsVerified }: ContractProps) {
  const { address } = useParams<any>()

  var val = 0
  var initContent:
    | { children?: React.ReactNode; label: any; index: any; suburl: string }[]
    | { id: string; children: JSX.Element; label: string; index: number; suburl: string }[] = []
  const [content, setContent] = React.useState(initContent)
  React.useEffect(() => {
    getContractInfo(address)
    if (!loading) {
      if (contractIsVerified) {
        setContent([
          {
            id: nanoid(),
            children: <Code />,
            label: 'Code',
            index: 0,
            suburl: 'code',
          },
          {
            id: nanoid(),
            children: <ReadContract />,
            label: 'Read Contract',
            index: 1,
            suburl: 'readContract',
          },
          {
            id: nanoid(),
            children: <WriteContract />,
            label: 'Write Contract',
            index: 2,
            suburl: 'writeContract',
          },
        ])
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, loading, getContractInfo])

  return !loading ? (
    contractIsVerified ? (
      <SimpleTabs val={val} tabs={content} />
    ) : (
      <div>This contract is not verified yet</div>
    )
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.address.loadingContract,
  contractIsVerified: state.address.contractIsVerified,
  contractIsExist: state.address.contractIsExist,
})

export default connect(mapStateToProps, { getContractInfo })(Contract)
