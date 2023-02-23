import React from 'react'
import ERC721 from './components/Table'

export const ERC721TokenTxns: React.FC = () => {
  const columns = ['Txn Hash', 'Age', 'From', '', 'To', 'Token ID', 'Token']
  return <ERC721 columns={columns} />
}
