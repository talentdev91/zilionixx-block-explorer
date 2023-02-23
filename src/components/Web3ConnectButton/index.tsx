import React from 'react'
import Button from '@material-ui/core/Button'
import { useWallet, UseWalletProvider } from 'use-wallet'

// components
import useStyles from './styles'

const Web3ConnectButton: React.FC = () => {
  const classes = useStyles()
  const [isWeb3Activated, setIsWeb3Activated] = React.useState(false)
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()

  return (
    <div>
      {wallet.status === 'connected' ? (
        <div>
          <Button className={classes.web3ButtonConnected} onClick={() => wallet.reset()}>
            <i className="fas fa-circle" style={{ color: '#00C9A7' }}></i>&nbsp;Connected web3 [{wallet.account}]
          </Button>
        </div>
      ) : (
        <Button className={classes.web3Button} onClick={() => wallet.connect()}>
          <i className="fas fa-circle" style={{ color: '#EA867E' }}></i>&nbsp;Connect to web3
        </Button>
      )}
    </div>
  )
}

export default () => (
  <UseWalletProvider chainId={250} connectors={{}}>
    <Web3ConnectButton />
  </UseWalletProvider>
)
