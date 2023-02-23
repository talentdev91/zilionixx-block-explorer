export const pastTime = (differenceSeconds: any) => {
  differenceSeconds = Number(differenceSeconds)
  const d = Math.floor(differenceSeconds / (3600 * 24))
  const h = Math.floor((differenceSeconds % (3600 * 24)) / 3600)
  const m = Math.floor((differenceSeconds % 3600) / 60)
  const s = Math.floor(differenceSeconds % 60)

  const dDisplay = d > 0 ? d + (d === 1 ? ' day' : ' days') : ''
  const hDisplay = h > 0 ? h + (h === 1 ? ' hour' : ' hours') : ''
  const mDisplay = m > 0 ? m + (m === 1 ? ' minute' : ' minutes') : ''
  const sDisplay = s >= 0 ? s + (s === 1 || s === 0 ? ' second' : ' seconds') : ''
  const differenceTime =
    d > 0
      ? `${dDisplay} ${hDisplay} ago`
      : h > 0
        ? `${hDisplay} ${mDisplay} ago`
        : m > 0
          ? `${mDisplay} ${sDisplay} ago`
          : `${sDisplay} ago`

  return differenceTime
}

export const duringTime = (differenceSeconds: any) => {
  differenceSeconds = Number(differenceSeconds)
  const d = Math.floor(differenceSeconds / (3600 * 24))
  const h = Math.floor((differenceSeconds % (3600 * 24)) / 3600)
  const m = Math.floor((differenceSeconds % 3600) / 60)
  const s = Math.floor(differenceSeconds % 60)

  const dDisplay = d > 0 ? d + (d === 1 ? ' day' : ' days') : ''
  const hDisplay = h > 0 ? h + (h === 1 ? ' hour' : ' hours') : ''
  const mDisplay = m > 0 ? m + (m === 1 ? ' minute' : ' minutes') : ''
  const sDisplay = s >= 0 ? s + (s === 1 || s === 0 ? ' sec' : ' secs') : ''
  const differenceTime =
    d > 0
      ? `in ${dDisplay} ${hDisplay}`
      : h > 0
        ? `in ${hDisplay} ${mDisplay}`
        : m > 0
          ? `in ${mDisplay} ${sDisplay}`
          : `in ${sDisplay}`

  return differenceTime
}

export function isEmptyObject(obj: any) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

export const numberFormat = (n: any) => {
  if (n) {
    return n.toLocaleString('en-US')
  }
  return 0
}

export const numberWithCommas = (x: any) => {
  if (x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  }
  return 0
}

export const bigNumberFormat = (n: any) => {
  if (n && n !== 0) {
    var res = Math.round(n / Math.pow(10, 10)) / Math.pow(10, 8)
    return res.toLocaleString('en-US')
  }
  return 0
}

export const tsToDate = (ts: number) => {
  var dateObj = new Date(ts)

  var month = dateObj.getUTCMonth() + 1 //months from 1-12
  var day = dateObj.getUTCDate()
  var year = dateObj.getUTCFullYear()

  return year + '-' + month + '-' + day
}