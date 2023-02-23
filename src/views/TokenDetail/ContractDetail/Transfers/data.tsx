import { nanoid } from 'nanoid'

function createData(
  txnhash: string,
  method: string,
  block: number,
  age: number,
  from: string,
  to: string,
  value: number,
  txnfee: number,
  out: string,
  usd: string,
) {
  return { txnhash, method, block, age, from, to, value, txnfee, out, usd }
}

export const rows = [
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Summon',
    16113867,
    4,
    'SpookySwap: Router',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d11',
    0,
    0.03840125,
    'OUT',
    'USD Coin(USDC)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Adventure',
    16113867,
    4,
    'SpookySwap: Router',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d12',
    0,
    0.03840125,
    'OUT',
    'USD Coin(USDC)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Summon',
    16113867,
    4,
    'SpookySwap: Router',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d13',
    0,
    0.03840125,
    'OUT',
    'USD Coin(USDC)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Adventure',
    16113867,
    4,
    'SpookySwap: Router',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d14',
    0,
    0.03840125,
    'OUT',
    'USD Coin(USDC)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Summon',
    16113867,
    4,
    'SpookySwap: Router',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d15',
    0,
    0.03840125,
    'OUT',
    'USD Coin(USDC)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Adventure',
    16113867,
    4,
    'SpookySwap: Router',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d16',
    0,
    0.03840125,
    'OUT',
    'USD Coin(USDC)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Summon',
    16113867,
    4,
    'SpookySwap: Router',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d17',
    0,
    0.03840125,
    'IN',
    'USD Coin(USDC)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Summon',
    16113867,
    4,
    'SpookySwap: Router',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d18',
    0,
    0.03840125,
    'OUT',
    'USD Coin(USDC)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Adventure',
    16113867,
    4,
    'SpookySwap: Router',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d19',
    0,
    0.03840125,
    'IN',
    'USD Coin(USDC)',
  ),
  createData(
    '0xfc00face00000000000000000000000000000000',
    'Summon',
    16113867,
    4,
    'SpookySwap: Router',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d111',
    0,
    0.03840125,
    'OUT',
    'USD Coin(USDC)',
  ),
]

export const columns = [
  {
    id: nanoid(),
    name: 'Txn Hash',
  },
  {
    id: nanoid(),
    name: 'Method',
  },
  {
    id: nanoid(),
    name: 'Age',
  },
  {
    id: nanoid(),
    name: 'From',
  },
  {
    id: nanoid(),
    name: '',
  },
  {
    id: nanoid(),
    name: 'To',
  },
  {
    id: nanoid(),
    name: 'Quantity',
  },
]

export const columnsFor721 = [
  {
    id: nanoid(),
    name: 'Txn Hash',
  },
  {
    id: nanoid(),
    name: 'Method',
  },
  {
    id: nanoid(),
    name: 'Age',
  },
  {
    id: nanoid(),
    name: 'From',
  },
  {
    id: nanoid(),
    name: '',
  },
  {
    id: nanoid(),
    name: 'To',
  },
  {
    id: nanoid(),
    name: 'TokenID',
  },
]

export const totaltransactions = '49,602,895'
