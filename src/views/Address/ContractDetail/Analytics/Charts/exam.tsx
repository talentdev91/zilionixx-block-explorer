export const createDataPoint = (time = Date.now(), magnitude = 1000, offset = 0) => {
  return [time + offset * magnitude, Math.round(Math.random() * 100 * 2) / 2]
}

export const createRandomData = (time = Date.now(), magnitude = 1000, points = 100) => {
  const data = []
  let i = points * -1 + 1
  for (i; i <= 0; i++) {
    data.push(createDataPoint(time, magnitude, i))
  }
  return data
}

const now = Date.now()

export const testChartData = {
  data1: createRandomData(now, 1e7, 500),
  data2: createRandomData(now, 1e7, 500),
  data3: createRandomData(now, 1e7, 500),
  data4: createRandomData(now, 1e7, 500),
}
