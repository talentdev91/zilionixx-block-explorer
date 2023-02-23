import React from 'react'
import ERC20 from './components/Table'

export const ERC20TokenTxns: React.FC = () => {
  const columns = ['Txn Hash', 'Age', 'From', '', 'To', 'Value', 'Token']
  return <ERC20 columns={columns} />
}
