function createData(txnhash: string, age: number, from: string, to: string, value: number, token: string) {
  return { txnhash, age, from, to, value, token }
}

export const rows = [
  createData(
    '0xfc00face00000000000000000000000000000000',
    10,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    2.828019321370197723,
    'Waka.Finance (WAKA)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    10,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    2.828019321370197723,
    'WakaBar (xWAKA)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    10,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    2.828019321370197723,
    'Zilionixx USD (FUSD)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    10,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    2.828019321370197723,
    'Frapped USDT (fUSDT)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    10,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    2.828019321370197723,
    'Zilionixx USD (FUSD)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    10,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    2.828019321370197723,
    'Frapped USDT (fUSDT)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    10,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    2.828019321370197723,
    'Wrapped Fant... (WZNX)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    10,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    2.828019321370197723,
    'Wrapped Fant... (WZNX)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    10,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    2.828019321370197723,
    'Ethereum (ETH)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    10,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    2.828019321370197723,
    'Wrapped Fant... (WZNX)',
  ),
]

export const columns = ['', 'Txn Hash', 'Age', 'From', '', 'To', 'Value', 'Token']

export const totaltransactions = '49,602,895'
