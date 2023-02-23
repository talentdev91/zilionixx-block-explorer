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
  cap: number,
) {
  return { txnhash, method, block, count, from, to, value, txnfee, out, cap }
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
    407209822585,
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
    12283728846,
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
    1256184349,
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
    262972335,
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
    186355726,
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
    186355726,
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
    186355726,
  ),
]

export const columns = [
  {
    id: nanoid(),
    name: '#',
  },
  {
    id: nanoid(),
    name: 'Contract Address',
  },
  {
    id: nanoid(),
    name: '	Token Name',
  },
  {
    id: nanoid(),
    name: 'Market Cap',
  },
  {
    id: nanoid(),
    name: 'Holders',
  },
  {
    id: nanoid(),
    name: 'Website',
  },
]

export const totaltransactions = '49,602,895'
