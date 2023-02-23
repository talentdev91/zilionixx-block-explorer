import React from 'react'

function createData(token: string, transfersH: number, transfersD: number) {
  return { token, transfersH, transfersD }
}

export const rows = [createData('Fantums', 2982, 14909), createData('Zilionixx Diamond', 408, 408)].sort((a, b) =>
  a.transfersH > b.transfersH ? -1 : 1,
)

export const columns = [<i className="far fa-question-circle"></i>, 'Action', 'Name Tag', 'Address Note', 'Created']
export const totalERCToken = '688,468'
