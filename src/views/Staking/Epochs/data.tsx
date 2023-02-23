function createData(endtime: string, totalReward: number, totalfee: number, totaltxreward: number) {
  return { endtime, totalReward, totalfee, totaltxreward }
}

export const rows = [
  createData('2019-12-27 14:55:35 +UTC', 1712350331.85306803, 37.21, 37.37),
  createData('2019-12-27 18:55:48 +UTC', 123412345.85306803, 38.67, 38.83),
  createData('2019-12-27 23:02:08 +UTC', 23453241324.85306803, 36, 36.16),
  createData('2019-12-28 03:02:50 +UTC', 1234343456.85306803, 34.71, 34.95),
  createData('2019-12-28 07:04:31 +UTC', 4763525.85306803, 57.84, 57.8),
  createData('2019-12-28 11:05:04 +UTC', 1341252345.85306803, 29.96, 30.26),
  createData('2019-12-28 15:21:26 +UTC', 4563456.85306803, 30.37, 30.43),
  createData('2019-12-28 19:28:32 +UTC', 563456435.85306803, 33.72, 34.07),
  createData('2019-12-28 23:30:01 +UTC', 234556345.85306803, 46.64, 46.92),
  createData('2019-12-31 17:06:40 +UTC', 1242362365.85306803, 38.3, 38.67),
  createData('2020-01-10 10:29:34 +UTC', 4536754662.85306803, 42.29, 42.41),
  createData('2020-01-10 14:43:08 +UTC', 23452435.85306803, 35.95, 36.07),
  createData('2020-01-10 18:50:50 +UTC', 34563456.85306803, 49.1, 49.17),
  createData('2020-01-10 22:55:00 +UTC', 56783456.85306803, 56.59, 57),
  createData('2021-09-03 03:49:32 +UTC', 2345456.85306803, 76.79, 77.48),
  createData('2021-09-03 03:55:06 +UTC', 124372453.85306803, 36.04, 36.59),
  createData('2021-09-03 03:57:14 +UTC', 567143256.85306803, 42.57, 42.84),
].sort((a, b) => (a.endtime < b.endtime ? -1 : 1))

export const columns = ['Epoch', 'End Time', 'Total Base Reward', 'Total Fee', 'Total Tx Reward']
export const totalEpochs = rows.length
