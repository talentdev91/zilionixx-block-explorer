import { nanoid } from 'nanoid'

function createData(
  txnhash: string,
  method: string,
  block: number,
  count: number,
  from: string,
  to: string,
  value: number,
  txnfee: number,
  out: string,
) {
  return { txnhash, method, block, count, from, to, value, txnfee, out }
}

export const rows = [
  createData(
    '0xfc00face00000000000000000000000000000000',
    'ANY Token',
    16113867,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    'OUT',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'anyETH Token',
    16113867,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    'OUT',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'anyFSN Token',
    16113867,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    'OUT',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'anyLTC Token',
    16113867,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    'OUT',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'anyYFI Token ',
    16113867,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    'OUT',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'BADGER Token',
    16113867,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    'OUT',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'bBADGER Token',
    16113867,
    4,
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    0,
    0.03840125,
    'OUT',
  ),
]

export const columns = [
  {
    id: nanoid(),
    name: 'Address',
  },
  {
    id: nanoid(),
    name: 'Name Tag',
  },
  {
    id: nanoid(),
    name: 'Balance',
  },
  {
    id: nanoid(),
    name: 'TxCount',
  },
]

export const totaltransactions = '49,602,895'
