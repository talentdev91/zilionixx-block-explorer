import React from 'react'

//components
import InternalTxn from './components/Table'

export const InternalTxns: React.FC = () => {
  const columns = ['Parent Txn Hash', 'Block', 'Age', 'From', '', 'To', 'Value']
  return <InternalTxn columns={columns} />
}
