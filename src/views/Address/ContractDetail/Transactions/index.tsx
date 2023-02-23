import React from 'react'

//components
import AddressTransactionTable from './components/Table'

function Transactions() {
  const columns = ['Txn Hash', 'Method', 'Block', 'Age', 'From', '', 'To', 'Value', '[Txn Fee]']
  return <AddressTransactionTable columns={columns} />
}

export default Transactions
