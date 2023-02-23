function createData(
  block: number,
  age: number,
  parenttxnhash: string,
  type: string,
  from: string,
  to: string,
  value: number,
) {
  return { block, age, parenttxnhash, type, from, to, value }
}

export const rows = [
  createData(
    16113867,
    4,
    '0xff89a78eb717bd8b2f4dc02fef5cd424ee9a26821c777d0e9ea5affa6cd67ce8',
    'call',
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    1353.682108568344904,
  ),
  createData(
    16223467,
    6,
    '0xff89a78eb717bd8b2f4dc02fef5cd424ee9a26821c777d0e9ea5affa6cd67ce8',
    'call',
    '0x1234f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf3512345e0459a4b53a27862c51a2a7292b383d1',
    1353.682108568344904,
  ),
  createData(
    16345867,
    4,
    '0xdd89a78eb717bd8b2f4dc02fef5cd424ee9a26821c777d0e9ea5affa6cd67ce8',
    'call',
    '0x2345a228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    434.195308811386739,
  ),
  createData(
    16113867,
    4,
    '0x22ss178eb717bd8b2f4dc02fef5cd424ee9a26821c777d0e9ea5affa6cd67ce8',
    'call',
    '0x3179f344ff0ccf71dd3bf3730824b21b3affbf58',
    '0xf35a096745ad9a4b53a27862c51a2a7292b383d1',
    434.195308811386739,
  ),
  createData(
    16113867,
    4,
    '0xdd43578eb717bd8b2f4dc02fef5cd424ee9a26821c777d0e9ea5affa6cd67ce8',
    'call',
    '0x531dcd28390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459f71dd3bf373c51a2a7292b383d1',
    0.02,
  ),
  createData(
    11223867,
    4,
    '0x12345678b717bd8b2f4dc02fef5cd424ee9a26821c777d0e9ea5affa6cd67ce8',
    'call',
    '0xff342228390ccf71dd3bf3730824b21b3affbf58',
    '0xfaaf3236e0459a4b53a27862c51a2a7292b383d1',
    1,
  ),
  createData(
    16654327,
    4,
    '0xf24ee9a2b717bd8b2f4dc02fef5cd424ee9a26821c777d0e9ea5affa6cd67ce8',
    'call',
    '0xbf58f228390ccf71dd3bf3730824b21b3affbf58',
    '0x3a27fbd6e0459a4b53a27862c51a2a7292b383d1',
    20000,
  ),
  createData(
    16113867,
    4,
    '0xff89a78eb717bd8b2f4dc02fef5cd424ee9a26821c777d0e9ea5affa6cd67ce8',
    'call',
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    579.338238976985523,
  ),
  createData(
    16113867,
    4,
    '0xff89a78eb717bd8b2f4dc02fef5cd424ee9a26821c777d0e9ea5affa6cd67ce8',
    'call',
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    58.689053712759686,
  ),
  createData(
    16113867,
    4,
    '0xff89a78eb717bd8b2f4dc02fef5cd424ee9a26821c777d0e9ea5affa6cd67ce8',
    'call',
    '0x3179f228390ccf71dd3bf3730824b21b3affbf58',
    '0xf35a6bd6e0459a4b53a27862c51a2a7292b383d1',
    670,
  ),
]

export const columns = ['Block', 'Age', 'Parent Txn Hash', 'Type', 'From', '', 'To', 'Value']

export const totaltransactions = '14,799,639'
