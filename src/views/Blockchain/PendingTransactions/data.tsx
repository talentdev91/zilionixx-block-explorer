function createData(
  txnhash: string,
  nonce: string,
  method: string,
  lastseen: string,
  gaslimit: number,
  gasprice: number,
  from: string,
  to: string,
  value: number,
) {
  return { txnhash, nonce, method, lastseen, gaslimit, gasprice, from, to, value }
}

export const rows = [
  createData(
    '0xd9a9bd506589beea88825a8f0868c2ef0ed0fbee',
    '1068',
    'Beef In',
    '3',
    1407715,
    53,
    '0xabf28ef8fc76326f89765609310ccbfcca291d19',
    '0x8afc0f9bdc5dca9f0408df03a03520bfa98a15af',
    0,
  ),
  createData(
    '0xd9a9bd506589beea88825a8f0868c2ef0ed0fbee',
    '1068',
    'Beef In',
    '3',
    1407715,
    53,
    '0xabf28ef8fc76326f89765609310ccbfcca291d19',
    '0x8afc0f9bdc5dca9f0408df03a03520bfa98a15af',
    0,
  ),
  createData(
    '0xd9a9bd506589beea88825a8f0868c2ef0ed0fbee',
    '1068',
    'Beef In',
    '3',
    1407715,
    53,
    '0xabf28ef8fc76326f89765609310ccbfcca291d19',
    '0x8afc0f9bdc5dca9f0408df03a03520bfa98a15af',
    0,
  ),
  createData(
    '0xd9a9bd506589beea88825a8f0868c2ef0ed0fbee',
    '1068',
    'Beef In',
    '3',
    1407715,
    53,
    '0xabf28ef8fc76326f89765609310ccbfcca291d19',
    '0x8afc0f9bdc5dca9f0408df03a03520bfa98a15af',
    0,
  ),
  createData(
    '0xd9a9bd506589beea88825a8f0868c2ef0ed0fbee',
    '1068',
    'Beef In',
    '3',
    1407715,
    53,
    '0xabf28ef8fc76326f89765609310ccbfcca291d19',
    '0x8afc0f9bdc5dca9f0408df03a03520bfa98a15af',
    0,
  ),
]

export const columns = ['Txn Hash', 'Nonce', 'Method', 'Last seen', 'Gas Limit', 'Gas Price', 'From', 'To', 'Value']

export const totalpendings = '12'
