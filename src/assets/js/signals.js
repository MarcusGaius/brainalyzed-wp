/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable max-classes-per-file */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable max-lines */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-undef */
/* eslint-disable unused-imports/no-unused-vars */

const namespace = 'http://www.w3.org/2000/svg'
const removeMillis = 1000
const timePonder = 300
const timeRange = 300000 / removeMillis // 300000 = 5mins
const viewBoxYPaddingTop = 0.1 // 10% on top
const viewBoxYPaddingBottom = 0.3 // 30% on bottom
const candleMinWidth = 8 // px
const scrollHeight = 17
const gridSizeX = 64
const gridSizeY = 16
const rounding = false

class Charter {
  constructor(props) {
    this.rootElement = props.root
    this.data = null
    this.sampleCount = null
    this.parsedData = null
    this.lastPoint = null
    this.profitData = null
    this.dataX = null
    this.dataXRange = null
    this.dataY = null
    this.dataYRange = null
    this.profitX = null
    this.profitXRange = null
    this.profitY = null
    this.profitYRange = null
  }

  parseData() {
    const candleBoundsFieldsToCheck = ['open', 'low', 'high', 'close']
    const [data, candleMin, candleMax] = this.data.data.reduce(
      (acc, cur) => {
        const tempData = [...acc[0]]
        const tempRow = this.data.columns.reduce((accumulated, current, i) => {
          if (current !== 'date') return { ...accumulated, [current]: cur[i] }
          return { ...accumulated, date: moment(cur[i]).valueOf() / removeMillis }
        }, {})
        tempData.push(tempRow)
        const candleValues = candleBoundsFieldsToCheck
          .map(field => tempRow[field])
          .sort((a, b) => a - b)
        const tempCandleMin = acc[1]
          ? Math.min(acc[1], candleValues[0])
          : candleValues[0]
        const tempCandleMax = acc[2]
          ? Math.max(acc[2], candleValues[candleValues.length - 1])
          : candleValues[candleValues.length - 1]
        return [tempData, tempCandleMin, tempCandleMax]
      },
      [[], null, null]
    )
    data.sort((a, b) => a.date - b.date)
    this.lastPoint = data[data.length - 1].date * removeMillis
    this.parsedData = {
      startTime: data[0].date,
      endTime: data[data.length - 1].date,
      candleMin,
      candleMax,
      data,
      candleData: data.map(({ date, open, low, high, close }) => ({
        date,
        open,
        low,
        high,
        close,
      })),
      signalData: data.reduce((acc, { buy, sell, open, close }, i) => {
        const tempResult = [...acc]
        if (buy || sell)
          tempResult.push({
            x: i,
            buy,
            sell,
            pos: open,
            direction: open > close ? 'down' : 'up',
          })
        return tempResult
      }, []),
      volumeData: data.map(({ date, volume, open, close }) => ({
        date,
        volume,
        color: open - close > 0 ? 'negative' : 'positive',
      })),
    }
  }

  setData(dataPoints) {
    this.data = dataPoints
    if (this.data && this.data?.data?.length) {
      this.sampleCount = this.data.data.length
      this.parseData()
    }
    this.renderDataChart()
  }

  setProfitData(dataPoints) {
    const [tempData, min, max] = [...dataPoints.trades]
      .map(({ close_timestamp, close_profit_pct }) => ({
        date: Math.round(close_timestamp / removeMillis),
        profit: close_profit_pct,
      }))
      .sort((a, b) => a.date - b.date)
      .reduce(
        (acc, cur, i) => {
          const tempCummulative = i
            ? acc[0][i - 1].cumulative + cur.profit
            : cur.profit
          const tempObj = { ...cur, cumulative: tempCummulative }
          const tempMin =
            acc[1] !== null ? Math.min(acc[1], tempCummulative) : tempCummulative
          const tempMax =
            acc[2] !== null ? Math.max(acc[2], tempCummulative) : tempCummulative
          const tempResult = [...acc[0]]
          tempResult.push(tempObj)
          return [tempResult, tempMin, tempMax]
        },
        [[], null, null]
      )
    this.profitData = {
      startTime: tempData[0].date,
      endTime: tempData[tempData.length - 1].date,
      profitData: tempData,
      min,
      max,
    }
    this.renderProfitChart()
  }

  setDimensions(width, height) {
    this.width = width
    this.height = height
  }

  setDataViewBox(x, y, xRange, yRange) {
    this.dataX = x
    this.dataY = y
    this.dataXRange = xRange
    this.dataYRange = yRange
  }

  setProfitViewBox(x, y, xRange, yRange) {
    this.profitX = x
    this.profitY = y
    this.profitXRange = xRange
    this.profitYRange = yRange
  }

  generateSVGs(width, height) {
    // :::::::::: GRAPH :::::::::: //
    const graphSVG = document.createElementNS(namespace, 'svg')
    graphSVG.id = 'chart-graph'
    graphSVG.setAttributeNS(null, 'version', '1.1')
    graphSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    graphSVG.setAttributeNS(null, 'preserveAspectRatio', 'none')
    graphSVG.setAttributeNS(null, 'width', `${width}px`)
    // ::::::::::::::::::::::::::: //

    // :::::::::: XAXIS :::::::::: //
    const xAxis = document.createElementNS(namespace, 'svg')
    xAxis.id = 'chart-x-axis'
    xAxis.setAttributeNS(null, 'version', '1.1')
    // xAxis.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    // xAxis.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMin slice')
    xAxis.setAttributeNS(null, 'width', `${width}px`)
    // ::::::::::::::::::::::::::: //

    // :::::::::: YAXIS :::::::::: //
    const yAxis = document.createElementNS(namespace, 'svg')
    yAxis.id = 'chart-y-axis'
    yAxis.setAttributeNS(null, 'version', '1.1')
    // yAxis.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    // yAxis.setAttributeNS(null, 'preserveAspectRatio', 'xMinYMid meet')
    yAxis.setAttributeNS(null, 'height', `${height}px`)
    // ::::::::::::::::::::::::::: //

    this.setDimensions(width, height)

    return [graphSVG, xAxis, yAxis]
  }

  generateGrid(gridGroup, xAxis, yAxis, x, xRange, y, yRange, min, max) {
    const relativeXGridSize = (gridSizeX * xRange) / this.width
    const relativeYGridSize = (gridSizeY * yRange) / this.height
    const tempValues = [0.5, 1, 2.5, 5, 10]
    let ponder = 1
    const calculateXPoints = () => {
      const logarithmWithBase = (value, base) => Math.log(value) / Math.log(base)
      const gridTimeSpan = relativeXGridSize * timePonder * removeMillis
      // const minimum = this.lastPoint - this.sampleCount * timePonder * removeMillis
      const minimum = min
      let absPonder = 1
      let relPonder = 1
      let scale = ''
      let tempRange = gridTimeSpan
      const log10 = Math.log10(gridTimeSpan)
      if (log10 < 3) {
        absPonder *= 10 ** Math.floor(log10)
        scale = 'millisecond'
        // const relValues = [1, 2.5, 5, 10]
        const relValues = [2.5, 5, 10]
        const absValues = [...relValues]
          .map(e => e * absPonder)
          .filter(e => !(e - Math.trunc(e)))
        let i = 0
        while (absValues[i] <= gridTimeSpan) i++
        tempRange = absValues[i]
        relPonder = relValues[i] * 10 ** Math.floor(log10)
      } else {
        absPonder *= 1000
        const log60 = logarithmWithBase(gridTimeSpan / absPonder, 60)
        if (log60 < 2) {
          absPonder *= 60 ** Math.floor(log60)
          scale = log60 < 1 ? 'second' : 'minute'
          // const relValues = [1, 5, 10, 30, 60]
          const relValues = [5, 10, 30, 60]
          const absValues = [...relValues].map(e => e * absPonder)
          let i = 0
          while (absValues[i] <= gridTimeSpan) i++
          tempRange = absValues[i]
          relPonder = relValues[i]
        } else {
          absPonder *= 60 * 60
          if (gridTimeSpan < absPonder * 12) {
            scale = 'hour'
            // const relValues = [1, 3, 6, 12]
            const relValues = [3, 6, 12]
            const absValues = [...relValues].map(e => e * absPonder)
            let i = 0
            while (absValues[i] <= gridTimeSpan) i++
            tempRange = absValues[i]
            relPonder = relValues[i]
          } else {
            absPonder *= 24
            if (gridTimeSpan < absPonder * 14) {
              scale = 'date'
              const relValues = [1, 2, 3, 5, 7, 14]
              const absValues = [...relValues].map(e => e * absPonder)
              let i = 0
              while (absValues[i] <= gridTimeSpan) i++
              tempRange = absValues[i]
              relPonder = relValues[i]
            } else {
              scale = 'bigger'
            }
          }
        }
      }
      let startingPoint = minimum
      let points = []
      if (scale !== 'bigger') {
        startingPoint = moment(startingPoint).startOf(scale)
        const remainder = startingPoint[scale]()
        if (scale === 'date') {
          if (relPonder >= 7)
            startingPoint = moment(startingPoint.valueOf()).isoWeekday(8)
          else
            startingPoint = moment(startingPoint.valueOf()).add(
              relPonder - 1 - ((remainder - 1) % relPonder),
              'day'
            )
        } else {
          startingPoint = moment(startingPoint.valueOf()).add(
            relPonder - 1 - ((remainder - 1) % relPonder),
            scale
          )
        }
        points.push(startingPoint.valueOf())
        let lastPoint = points[points.length - 1]
        while (lastPoint < max) {
          const newPoint = lastPoint + tempRange
          points.push(newPoint)
          lastPoint = points[points.length - 1]
        }
      } else {
        absPonder *= 30
        if (gridTimeSpan < absPonder * 6) {
          scale = 'month'
          const relValues = [1, 3, 6]
          const absValues = [...relValues].map(e => e * absPonder)
          let i = 0
          while (absValues[i] <= gridTimeSpan) i++
          // tempRange = absValues[i]
          relPonder = relValues[i]
        } else {
          absPonder *= 365 / 30
          scale = 'year'
          const relValues = [1, 5, 10]
          let absValues = [...relValues].map(e => e * absPonder)
          let i = 0
          let j = 0
          while (absValues[i] <= gridTimeSpan) {
            i++
            if (i === absValues.length) {
              if (!j) {
                relValues.splice(1, 0, 2.5)
              }
              i = 0
              j++
              // eslint-disable-next-line no-loop-func
              absValues = [...relValues].map(e => e * 10 ** j * absPonder)
            }
          }
          // tempRange = absValues[i]
          relPonder = relValues[i] * 10 ** j
        }
        startingPoint = moment(minimum).startOf(scale).add(1, scale)
        const remainder = startingPoint[scale]()
        startingPoint = moment(startingPoint.valueOf()).add(
          relPonder - 1 - ((remainder - 1) % relPonder),
          scale
        )
        points.push(startingPoint.valueOf())
        let lastPoint = points[points.length - 1]
        while (lastPoint < max) {
          const newPoint = moment(lastPoint).add(relPonder, scale).valueOf()
          points.push(newPoint)
          lastPoint = points[points.length - 1]
        }
        points.pop()
      }
      if (scale === 'month' && relPonder > 1)
        points = [...points].map(point => moment(point).subtract(1, 'day').valueOf())
      return [
        points.map(point => ({
          x: (point - minimum) / timePonder / removeMillis,
          value: point,
        })),
        scale,
      ]
    }
    const calculateYPoints = (range, start) => {
      if (tempValues[tempValues.length - 1] * ponder > relativeYGridSize) {
        while (tempValues[tempValues.length - 1] * ponder > relativeYGridSize)
          ponder /= 10
        ponder *= 10
      }
      if (tempValues[0] * ponder < relativeYGridSize) {
        while (tempValues[0] * ponder < relativeYGridSize) ponder *= 10
        ponder /= 10
      }
      const values =
        rounding && ponder * tempNormalizer <= 1
          ? tempValues.filter(v => !rounding || v !== 2.5)
          : tempValues
      // eslint-disable-next-line prefer-const
      let [distance, add] = values.reduce(
        (acc, cur, i) => {
          return acc[0] * ponder > relativeYGridSize
            ? [acc[0], acc[1]]
            : [cur, i === 2] // 2.5 decimal option
        },
        [0, false]
      )
      let decimals = 0
      if (ponder) while (10 ** decimals < 1 / ponder) decimals++
      if (add) decimals++
      distance = Number(Number.parseFloat(distance * ponder).toFixed(decimals))
      const startingPoint =
        Number(
          Number.parseFloat(Math.ceil(start / distance) * distance).toFixed(decimals)
        ) || 0
      const points = []
      if (distance) {
        points.push(startingPoint)
        while (points[points.length - 1] + distance <= start + range) {
          const newPoint = Number(
            Number.parseFloat(points[points.length - 1] + distance).toFixed(decimals)
          )
          points.push(newPoint)
        }
      }
      return points
    }
    const [xPoints, xScale] = calculateXPoints(xRange * timePonder * removeMillis, 0)
    const yPoints = calculateYPoints(yRange, y)

    const fontSize = 12
    const xRatio = xRange / this.width
    const yRatio = yRange / this.height

    xPoints.forEach(({ x: xVal, value }) => {
      const tempGridLine = document.createElementNS(namespace, 'line')
      tempGridLine.classList.add('grid-line')
      tempGridLine.setAttributeNS(null, 'x1', xVal)
      tempGridLine.setAttributeNS(null, 'x2', xVal)
      tempGridLine.setAttributeNS(null, 'y1', y)
      tempGridLine.setAttributeNS(null, 'y2', y + yRange)
      tempGridLine.setAttributeNS(null, 'stroke-width', '1px')
      gridGroup.appendChild(tempGridLine)

      const getFormatFromScale = scale => {
        switch (scale) {
          case 'millisecond':
            return 'ss.SSS'
          case 'second':
            return 'mm:ss'
          case 'minute':
            return 'DD.MM HH:mm'
          case 'hour':
            return 'DD.MM HH:mm'
          case 'date':
            return 'DD-MM'
          case 'month':
            return 'DD-MM-YY'
          case 'year':
            return 'YYYY'
          default:
            return null
        }
      }

      const tempGridText = document.createElementNS(namespace, 'text')
      tempGridText.classList.add('xAxis-text')
      tempGridText.setAttributeNS(null, 'x', xVal)
      tempGridText.setAttributeNS(null, 'y', 0)
      tempGridText.setAttribute('font-size', `${fontSize * xRatio}`)
      tempGridText.setAttribute('dominant-baseline', 'hanging')
      tempGridText.setAttribute('text-anchor', 'middle')
      tempGridText.innerHTML = `${moment(value).format(getFormatFromScale(xScale))}`
      xAxis.appendChild(tempGridText)
    })
    yPoints.forEach(point => {
      const tempGridLine = document.createElementNS(namespace, 'line')
      tempGridLine.classList.add('grid-line')
      tempGridLine.setAttributeNS(null, 'x1', x)
      tempGridLine.setAttributeNS(null, 'x2', x + xRange)
      tempGridLine.setAttributeNS(null, 'y1', point)
      tempGridLine.setAttributeNS(null, 'y2', point)
      tempGridLine.setAttributeNS(null, 'stroke-width', '1px')
      gridGroup.appendChild(tempGridLine)

      const tempGridText = document.createElementNS(namespace, 'text')
      tempGridText.classList.add('yAxis-text')
      tempGridText.setAttributeNS(null, 'x', 0)
      tempGridText.setAttributeNS(null, 'y', point)
      tempGridText.setAttribute('font-size', `${fontSize * yRatio}`)
      tempGridText.setAttribute('dominant-baseline', 'middle')
      tempGridText.innerHTML = `${-point}`
      yAxis.appendChild(tempGridText)
    })
  }

  generateCandles(candleGroup) {
    this.parsedData.candleData.forEach((candle, i) => {
      const candleSpan = candle.close - candle.open
      const candleHeight = Math.abs(candleSpan)

      const tempCandle = document.createElementNS(namespace, 'rect')
      tempCandle.classList.add('candle-body')
      tempCandle.setAttributeNS(null, 'x', 0 + (i * timeRange) / timePonder)
      tempCandle.setAttributeNS(null, 'y', -Math.max(candle.close, candle.open))
      tempCandle.setAttributeNS(null, 'width', timeRange / timePonder)
      tempCandle.setAttributeNS(null, 'height', candleHeight)

      const tempWick = document.createElementNS(namespace, 'line')
      tempWick.classList.add('candle-wick')
      tempWick.setAttributeNS(null, 'x1', ((0.5 + i) * timeRange) / timePonder)
      tempWick.setAttributeNS(null, 'x2', ((0.5 + i) * timeRange) / timePonder)
      tempWick.setAttributeNS(null, 'y1', -candle.high)
      tempWick.setAttributeNS(null, 'y2', -candle.low)
      tempWick.setAttributeNS(null, 'stroke-width', '1px')

      if (candleSpan) {
        tempCandle.classList.add(`${candleSpan > 0 ? 'positive' : 'negative'}`)
        tempWick.classList.add(`${candleSpan > 0 ? 'positive' : 'negative'}`)
      }

      candleGroup.appendChild(tempCandle)
      candleGroup.appendChild(tempWick)
    })
  }

  generateVolumes(volumeGroup) {
    const maxVolume = this.parsedData.volumeData.reduce(
      (acc, { volume }) => Math.max(acc, volume),
      0
    )
    this.parsedData.volumeData.forEach(({ date, volume, color }, i) => {
      if (volume) {
        const height = (volume / maxVolume) * this.dataYRange * viewBoxYPaddingBottom
        const tempVolume = document.createElementNS(namespace, 'rect')
        tempVolume.classList.add('volume')
        tempVolume.setAttributeNS(null, 'x', 0 + (i * timeRange) / timePonder)
        tempVolume.setAttributeNS(null, 'y', this.dataY + this.dataYRange - height)
        tempVolume.setAttributeNS(null, 'width', timeRange / timePonder)
        tempVolume.setAttributeNS(null, 'height', height)
        tempVolume.classList.add(`${color}`)
        volumeGroup.appendChild(tempVolume)
      }
    })
  }

  createSignalPath(x, y, direction, color) {
    const signalSize = 16
    const signalOffset = 16
    const xRatio = this.dataXRange / this.width
    const yRatio = this.dataYRange / this.height
    const pathWidth = signalSize * xRatio
    const pathHeight = signalSize * yRatio
    const pathLeft = x - pathWidth / 2
    const pathTop =
      y - pathHeight / 2 + (direction === 'up' ? signalOffset * yRatio : 0)
    const tempSignal = document.createElementNS(namespace, 'g')
    tempSignal.classList.add('signal')

    // :::::::::: CIRC :::::::::: //
    const tempRing = document.createElementNS(namespace, 'circle')
    tempRing.classList.add('signal-ring')
    tempRing.setAttributeNS(null, 'cx', 50)
    tempRing.setAttributeNS(null, 'cy', 50)
    tempRing.setAttributeNS(null, 'r', 60)
    tempSignal.appendChild(tempRing)
    // :::::::::::::::::::::::::: //

    // :::::::::: MASK :::::::::: //
    const tempMask = document.createElementNS(namespace, 'mask')
    tempMask.id = 'holesMask'
    const maskRect = document.createElementNS(namespace, 'rect')
    maskRect.classList.add('mask-white')
    maskRect.setAttributeNS(null, 'x', 0)
    maskRect.setAttributeNS(null, 'y', 0)
    maskRect.setAttributeNS(null, 'width', 100)
    maskRect.setAttributeNS(null, 'height', 100)
    tempMask.appendChild(maskRect)
    const maskCircleLeft = document.createElementNS(namespace, 'circle')
    maskCircleLeft.classList.add('mask-black')
    maskCircleLeft.setAttributeNS(null, 'cx', 34.5)
    maskCircleLeft.setAttributeNS(null, 'cy', 71.5)
    maskCircleLeft.setAttributeNS(null, 'r', 1.5)
    tempMask.appendChild(maskCircleLeft)
    const maskCircleRight = document.createElementNS(namespace, 'circle')
    maskCircleRight.classList.add('mask-black')
    maskCircleRight.setAttributeNS(null, 'cx', 65.5)
    maskCircleRight.setAttributeNS(null, 'cy', 71.5)
    maskCircleRight.setAttributeNS(null, 'r', 1.5)
    tempMask.appendChild(maskCircleRight)
    tempSignal.appendChild(tempMask)
    // :::::::::::::::::::::::::: //

    // :::::::::: PATH :::::::::: //
    const buoyStem = document.createElementNS(namespace, 'path')
    buoyStem.classList.add('buoy-stem')
    buoyStem.setAttributeNS(null, 'd', 'M 47.5 15.5 L 48 24 L 52 24 L 52.5 15.5 Z')
    buoyStem.classList.add(color)
    tempSignal.appendChild(buoyStem)
    const buoyHead = document.createElementNS(namespace, 'circle')
    buoyHead.classList.add('buoy-head')
    buoyHead.setAttributeNS(null, 'cx', 50)
    buoyHead.setAttributeNS(null, 'cy', 10)
    buoyHead.setAttributeNS(null, 'r', 6)
    buoyHead.classList.add(color)
    tempSignal.appendChild(buoyHead)
    const buoyBody = document.createElementNS(namespace, 'path')
    buoyBody.classList.add('buoy-body')
    buoyBody.setAttributeNS(null, 'mask', 'url(#holesMask)')
    buoyBody.setAttributeNS(
      null,
      'd',
      // eslint-disable-next-line max-len
      'M 45 24 L 43 71.5 L 40 71.5 L 40.5 76 L 37 76 L 37.5 72 C 38 67, 31 67, 31.5 72 L 32 76 L 28.5 76 L 30.5 91 L 69.5 91 L 71.5 76 L 68 76 L 68.5 72 C 69 67, 62 67, 62.5 72 L 63 76 L 59.5 76 L 60 71.5 L 57 71.5 L 55 24 Z'
    )
    buoyBody.classList.add(color)
    const signalRatio = signalSize / 100
    tempSignal.setAttributeNS(
      null,
      'transform',
      `translate(${pathLeft} ${pathTop}) scale(${xRatio * signalRatio} ${
        yRatio * signalRatio
      })`
    )
    tempSignal.appendChild(buoyBody)
    // :::::::::::::::::::::::::: //

    // :::::::::: ANIM :::::::::: //
    const circle1 = document.createElementNS(namespace, 'circle')
    circle1.classList.add('buoy-circle')
    circle1.setAttributeNS(null, 'cx', 50)
    circle1.setAttributeNS(null, 'cy', 10)
    circle1.setAttributeNS(null, 'r', 6)
    circle1.classList.add(color)
    tempSignal.appendChild(circle1)
    const animR1 = document.createElementNS(namespace, 'animate')
    animR1.id = 'anim-r-1'
    animR1.setAttributeNS(null, 'attributeName', 'r')
    animR1.setAttributeNS(null, 'attributeType', 'XML')
    animR1.setAttributeNS(null, 'begin', 'anim-r-1.end + 3s')
    animR1.setAttributeNS(null, 'dur', '3.6s')
    animR1.setAttributeNS(null, 'from', '6')
    animR1.setAttributeNS(null, 'to', '128')
    circle1.appendChild(animR1)
    const animO1 = document.createElementNS(namespace, 'animate')
    animO1.id = 'anim-o-1'
    animO1.setAttributeNS(null, 'attributeName', 'opacity')
    animO1.setAttributeNS(null, 'attributeType', 'XML')
    animO1.setAttributeNS(null, 'begin', 'anim-r-1.begin + 0.1s')
    animO1.setAttributeNS(null, 'dur', '3s')
    animO1.setAttributeNS(null, 'from', '0.6')
    animO1.setAttributeNS(null, 'to', '0')
    animO1.setAttributeNS(null, 'fill', 'freeze')
    circle1.appendChild(animO1)

    const circle2 = document.createElementNS(namespace, 'circle')
    circle2.classList.add('buoy-circle')
    circle2.setAttributeNS(null, 'cx', 50)
    circle2.setAttributeNS(null, 'cy', 10)
    circle2.setAttributeNS(null, 'r', 6)
    circle2.classList.add(color)
    tempSignal.appendChild(circle2)
    const animR2 = document.createElementNS(namespace, 'animate')
    animR2.id = 'anim-r-2'
    animR2.setAttributeNS(null, 'attributeName', 'r')
    animR2.setAttributeNS(null, 'attributeType', 'XML')
    animR2.setAttributeNS(null, 'begin', 'anim-r-1.begin + 1s')
    animR2.setAttributeNS(null, 'dur', '3.6s')
    animR2.setAttributeNS(null, 'from', '6')
    animR2.setAttributeNS(null, 'to', '128')
    circle2.appendChild(animR2)
    const animO2 = document.createElementNS(namespace, 'animate')
    animO2.id = 'anim-o-2'
    animO2.setAttributeNS(null, 'attributeName', 'opacity')
    animO2.setAttributeNS(null, 'attributeType', 'XML')
    animO2.setAttributeNS(null, 'begin', 'anim-r-2.begin + 0.1s')
    animO2.setAttributeNS(null, 'dur', '3s')
    animO2.setAttributeNS(null, 'from', '0.6')
    animO2.setAttributeNS(null, 'to', '0')
    animO2.setAttributeNS(null, 'fill', 'freeze')
    circle2.appendChild(animO2)

    const circle3 = document.createElementNS(namespace, 'circle')
    circle3.classList.add('buoy-circle')
    circle3.setAttributeNS(null, 'cx', 50)
    circle3.setAttributeNS(null, 'cy', 10)
    circle3.setAttributeNS(null, 'r', 6)
    circle3.classList.add(color)
    tempSignal.appendChild(circle3)
    const animR3 = document.createElementNS(namespace, 'animate')
    animR3.id = 'anim-r-3'
    animR3.setAttributeNS(null, 'attributeName', 'r')
    animR3.setAttributeNS(null, 'attributeType', 'XML')
    animR3.setAttributeNS(null, 'begin', 'anim-r-2.begin + 1s')
    animR3.setAttributeNS(null, 'dur', '3.6s')
    animR3.setAttributeNS(null, 'from', '6')
    animR3.setAttributeNS(null, 'to', '128')
    circle3.appendChild(animR3)
    const animO3 = document.createElementNS(namespace, 'animate')
    animO3.id = 'anim-o-3'
    animO3.setAttributeNS(null, 'attributeName', 'opacity')
    animO3.setAttributeNS(null, 'attributeType', 'XML')
    animO3.setAttributeNS(null, 'begin', 'anim-r-3.begin + 0.1s')
    animO3.setAttributeNS(null, 'dur', '3s')
    animO3.setAttributeNS(null, 'from', '0.6')
    animO3.setAttributeNS(null, 'to', '0')
    animO3.setAttributeNS(null, 'fill', 'freeze')
    circle3.appendChild(animO3)

    if (typeof InstallTrigger === 'undefined') animR1.beginElement()
    // detect Firefox
    else
      setTimeout(function () {
        animR1.beginElement()
      }, 0)

    // const animate = document.createElementNS(namespace, 'animateTransform')
    // animate.setAttributeNS(null, 'attributeName', 'transform')
    // animate.setAttributeNS(null, 'attributeType', 'XML')
    // animate.setAttributeNS(null, 'additive', 'sum')
    // animate.setAttributeNS(null, 'type', 'rotate')
    // animate.setAttributeNS(null, 'begin', 'never')
    // animate.setAttributeNS(null, 'dur', '3s')
    // animate.setAttributeNS(null, 'values', '-20 50 70; 20 50 70; -20 50 70')
    // animate.setAttributeNS(null, 'calcMode', 'spline')
    // animate.setAttributeNS(null, 'keySplines', '0.7 0 0.3 1; 0.7 0 0.3 1')
    // animate.setAttributeNS(null, 'keyTimes', '0;0.5;1')
    // animate.setAttributeNS(null, 'repeatCount', 'indefinite')
    // tempSignal.appendChild(animate)
    // if (typeof InstallTrigger === 'undefined') animate.beginElement()
    // // detect Firefox
    // else
    //   setTimeout(function () {
    //     animate.beginElement()
    //   }, 0)
    // :::::::::::::::::::::::::: //

    return tempSignal
  }

  generateSignals(signalGroup) {
    const defs = document.createElementNS(namespace, 'defs')
    signalGroup.appendChild(defs)
    const signalGradientPositive = document.createElementNS(
      namespace,
      'linearGradient'
    )
    signalGradientPositive.id = 'signal-gradient-positive'
    defs.appendChild(signalGradientPositive)
    const beginP = document.createElementNS(namespace, 'stop')
    beginP.classList.add('signal-gradient-stop')
    beginP.classList.add('positive')
    beginP.setAttributeNS(null, 'offset', '0%')
    signalGradientPositive.appendChild(beginP)
    const endP = document.createElementNS(namespace, 'stop')
    endP.classList.add('signal-gradient-stop')
    endP.setAttributeNS(null, 'offset', '100%')
    signalGradientPositive.appendChild(endP)

    const signalGradientNegative = document.createElementNS(
      namespace,
      'linearGradient'
    )
    signalGradientNegative.id = 'signal-gradient-negative'
    defs.appendChild(signalGradientNegative)
    const beginN = document.createElementNS(namespace, 'stop')
    beginN.classList.add('signal-gradient-stop')
    beginN.classList.add('negative')
    beginN.setAttributeNS(null, 'offset', '0%')
    signalGradientNegative.appendChild(beginN)
    const endN = document.createElementNS(namespace, 'stop')
    endN.classList.add('signal-gradient-stop')
    endN.setAttributeNS(null, 'offset', '100%')
    signalGradientNegative.appendChild(endN)

    this.parsedData.signalData.forEach(({ x, buy, pos, direction }, i) => {
      const midX = ((x + 0.5) * timeRange) / timePonder
      // const midY = this.dataY + (this.dataYRange * viewBoxYPaddingTop) / 2
      const midY = -pos
      const signal = this.createSignalPath(
        midX,
        midY,
        direction,
        `${buy > 0 ? 'positive' : 'negative'}`
      )

      const signalLine = document.createElementNS(namespace, 'line')
      signalLine.classList.add('signal-line')
      signalLine.setAttributeNS(null, 'x1', midX)
      signalLine.setAttributeNS(null, 'x2', midX)
      signalLine.setAttributeNS(null, 'y1', this.dataY)
      signalLine.setAttributeNS(null, 'y2', this.dataY + this.dataYRange)
      signalLine.setAttributeNS(null, 'stroke-width', '1px')
      signalLine.classList.add(`${buy > 0 ? 'positive' : 'negative'}`)
      // signalLine.setAttributeNS(null, 'transform', 'translate(0.5 0)')
      signalGroup.appendChild(signalLine)

      let nextX = 500
      if (x < 500) {
        if (i < this.parsedData.signalData.length - 1)
          nextX = this.parsedData.signalData[i + 1].x
        const signalArea = document.createElementNS(namespace, 'rect')
        signalArea.classList.add('signal-area')
        signalArea.setAttributeNS(null, 'x', midX)
        signalArea.setAttributeNS(null, 'y', this.dataY)
        signalArea.setAttributeNS(null, 'width', nextX - x)
        signalArea.setAttributeNS(null, 'height', this.dataYRange)
        signalArea.setAttributeNS(
          null,
          'fill',
          `url(#signal-gradient-${buy > 0 ? 'positive' : 'negative'})`
        )
        // signalArea.classList.add(`${buy > 0 ? 'positive' : 'negative'}`)
        signalGroup.appendChild(signalArea)
      }

      signalGroup.appendChild(signal)
    })
  }

  generateProfit(profitGroup) {
    const start = this.profitData.startTime
    const end = this.profitData.endTime
    const data = this.profitData.profitData.map(e => ({
      ...e,
      date: (e.date - start) / timePonder,
    }))
    const [line, pos, neg] = data.reduce(
      (acc, cur, i) => {
        const cumulative = -cur.cumulative
        return [
          `${acc[0]}${i === 0 ? 'M' : ' L'} ${cur.date.toFixed(4)} ${
            acc[3]
          } L ${cur.date.toFixed(4)} ${cumulative.toFixed(4)}`,
          `${acc[1]}${i === 0 ? 'M' : ' L'} ${cur.date.toFixed(4)} ${
            acc[3] < 0 ? acc[3] : 0
          } L ${cur.date.toFixed(4)} ${cumulative < 0 ? cumulative.toFixed(4) : 0}${
            i === data.length - 1 ? ` L ${cur.date.toFixed(4)} 0` : ''
          }`,
          `${acc[2]}${i === 0 ? 'M' : ' L'} ${cur.date.toFixed(4)} ${
            acc[3] > 0 ? acc[3] : 0
          } L ${cur.date.toFixed(4)} ${cumulative > 0 ? cumulative.toFixed(4) : 0}${
            i === data.length - 1 ? ` L ${cur.date.toFixed(4)} 0` : ''
          }`,
          cumulative,
        ]
      },
      ['', '', '', 0]
    )

    const profit0Line = document.createElementNS(namespace, 'line')
    profit0Line.id = 'zero-line'
    profit0Line.setAttributeNS(null, 'x1', 0)
    profit0Line.setAttributeNS(null, 'x2', (end - start) / timePonder)
    profit0Line.setAttributeNS(null, 'y1', 0)
    profit0Line.setAttributeNS(null, 'y2', 0)
    profit0Line.setAttributeNS(null, 'stroke-width', '0.5px')
    profitGroup.appendChild(profit0Line)

    if (data.length) {
      const posPath = document.createElementNS(namespace, 'path')
      posPath.classList.add('path')
      posPath.classList.add('positive')
      posPath.setAttributeNS(null, 'd', `${pos} Z`)
      posPath.setAttributeNS(null, 'stroke-width', '1px')
      profitGroup.appendChild(posPath)

      const negPath = document.createElementNS(namespace, 'path')
      negPath.classList.add('path')
      negPath.classList.add('negative')
      negPath.setAttributeNS(null, 'd', `${neg} Z`)
      negPath.setAttributeNS(null, 'stroke-width', '1px')
      profitGroup.appendChild(negPath)

      const tempPath = document.createElementNS(namespace, 'path')
      tempPath.classList.add('path')
      tempPath.setAttributeNS(null, 'd', line)
      tempPath.setAttributeNS(null, 'stroke-width', '1px')
      profitGroup.appendChild(tempPath)
    }
  }

  populateDataSVG(svg, xAxis, yAxis, width, height) {
    const gridGroup = document.createElementNS(namespace, 'g')
    gridGroup.id = 'chart-grid-group'
    const candleGroup = document.createElementNS(namespace, 'g')
    candleGroup.id = 'chart-candle-group'
    // const pathGroup = document.createElementNS(namespace, 'g')
    // pathGroup.id = 'chart-path-group'
    const volumeGroup = document.createElementNS(namespace, 'g')
    volumeGroup.id = 'chart-volume-group'
    const signalGroup = document.createElementNS(namespace, 'g')
    signalGroup.id = 'chart-signal-group'
    svg.appendChild(gridGroup)
    svg.appendChild(candleGroup)
    // svg.appendChild(pathGroup)
    svg.appendChild(volumeGroup)
    svg.appendChild(signalGroup)
    const xSpan =
      (this.parsedData.endTime - this.parsedData.startTime + 300) / timePonder
    const x = 0
    const xRange = xSpan
    const ySpan = this.parsedData.candleMax - this.parsedData.candleMin
    const y = -this.parsedData.candleMax - viewBoxYPaddingTop * ySpan
    const yRange = ySpan * (1 + viewBoxYPaddingTop + viewBoxYPaddingBottom)
    this.setDataViewBox(x, y, xRange, yRange)
    const xAxisRatio = width / 30 / (this.profitXRange / 100)
    const yAxisRatio = 40 / height / (this.profitYRange / 100)
    svg.setAttributeNS(
      null,
      'viewBox',
      `${this.dataX} ${this.dataY} ${this.dataXRange} ${this.dataYRange}`
    )
    xAxis.setAttributeNS(null, 'viewBox', `${this.dataX} 0 ${this.dataXRange} 100`)
    xAxis.setAttributeNS(
      null,
      'preserveAspectRatio',
      `xMidYMin ${xAxisRatio > 1 ? 'slice' : 'meet'}`
    )
    yAxis.setAttributeNS(null, 'viewBox', `0 ${this.dataY} 100 ${this.dataYRange}`)
    yAxis.setAttributeNS(
      null,
      'preserveAspectRatio',
      `xMinYMid ${yAxisRatio < 1 ? 'slice' : 'meet'}`
    )
    if (this.parsedData?.data?.length) {
      this.generateGrid(
        gridGroup,
        xAxis,
        yAxis,
        this.dataX,
        this.dataXRange,
        this.dataY,
        this.dataYRange,
        this.lastPoint - this.sampleCount * timePonder * removeMillis,
        this.lastPoint
      )
      if (this.parsedData.candleData?.length) this.generateCandles(candleGroup)
      if (this.parsedData.volumeData?.length) this.generateVolumes(volumeGroup)
      if (this.parsedData.signalData?.length) this.generateSignals(signalGroup)
    }

    const chartArea = document.getElementById('chart-area')
    chartArea.scrollTo(this.width, 0)
  }

  populateProfitSVG(svg, xAxis, yAxis, width, height) {
    const gridGroup = document.createElementNS(namespace, 'g')
    gridGroup.id = 'chart-grid-group'
    const profitGroup = document.createElementNS(namespace, 'g')
    profitGroup.id = 'chart-profit-group'
    svg.appendChild(gridGroup)
    svg.appendChild(profitGroup)

    const xSpan = (this.profitData.endTime - this.profitData.startTime) / timePonder
    const x = 0
    const xRange = xSpan
    const ySpan = this.profitData.max - this.profitData.min
    const y = -this.profitData.max - viewBoxYPaddingTop * ySpan
    const yRange = ySpan * (1 + 2 * viewBoxYPaddingTop)
    this.setProfitViewBox(x, y, xRange, yRange)
    const xAxisRatio = width / 30 / (this.profitXRange / 100)
    const yAxisRatio = 40 / height / (this.profitYRange / 100)
    svg.setAttributeNS(
      null,
      'viewBox',
      `${this.profitX} ${this.profitY} ${this.profitXRange} ${this.profitYRange}`
    )
    xAxis.setAttributeNS(
      null,
      'viewBox',
      `${this.profitX} 0 ${this.profitXRange} 100`
    )
    xAxis.setAttributeNS(
      null,
      'preserveAspectRatio',
      `xMidYMin ${xAxisRatio > 1 ? 'slice' : 'meet'}`
    )
    yAxis.setAttributeNS(
      null,
      'viewBox',
      `0 ${this.profitY} 100 ${this.profitYRange}`
    )
    yAxis.setAttributeNS(
      null,
      'preserveAspectRatio',
      `xMinYMid ${yAxisRatio < 1 ? 'slice' : 'meet'}`
    )
    if (this.profitData?.profitData?.length) {
      this.generateGrid(
        gridGroup,
        xAxis,
        yAxis,
        this.profitX,
        this.profitXRange,
        this.profitY,
        this.profitYRange,
        this.profitData.startTime * removeMillis,
        this.profitData.endTime * removeMillis
      )
      if (this.profitData.profitData?.length) this.generateProfit(profitGroup)
    }
  }

  renderDataChart() {
    const chartArea = document.createElement('DIV')
    chartArea.id = 'chart-area'
    this.rootElement.innerHTML = ''
    this.rootElement.appendChild(chartArea)
    const width =
      (candleMinWidth / timeRange) *
      (this.parsedData.endTime - this.parsedData.startTime)
    const height = chartArea.getBoundingClientRect().height - 40 - 1 * scrollHeight
    const [svg, xAxis, yAxis] = this.generateSVGs(width, height)
    this.rootElement.appendChild(yAxis)
    chartArea.appendChild(svg)
    chartArea.appendChild(xAxis)
    this.populateDataSVG(svg, xAxis, yAxis, width, height)
  }

  renderProfitChart() {
    const chartArea = document.createElement('DIV')
    chartArea.id = 'chart-area'
    this.rootElement.innerHTML = ''
    this.rootElement.appendChild(chartArea)
    const { width } = chartArea.getBoundingClientRect()
    const height = chartArea.getBoundingClientRect().height - 40 - 0 * scrollHeight
    const [svg, xAxis, yAxis] = this.generateSVGs(width, height)
    this.rootElement.appendChild(yAxis)
    chartArea.appendChild(svg)
    chartArea.appendChild(xAxis)
    this.populateProfitSVG(svg, xAxis, yAxis, width, height)
  }
}

// eslint-disable-next-line unused-imports/no-unused-vars
const dataCharter = new Charter({
  root: document.getElementById('data-chart-wrapper'),
})
// eslint-disable-next-line unused-imports/no-unused-vars
const profitCharter = new Charter({
  root: document.getElementById('profit-chart-wrapper'),
})

class SignalPicker {
  constructor(htmlElement) {
    if (!htmlElement) throw Error('No root element passed to Signal Picker')
    this.rootHTML = htmlElement
    this.mounted = false
    this.pairs = []
    this.active = null
    this.data = null
    this.initialize()
    this.handlers = new Map()
  }

  setPairs(pairs) {
    if (pairs) {
      this.pairs = pairs
      this.render()
    }
  }

  initialize() {
    this.rootHTML.innerHTML = `
    <div id="signal-panel"></div>
      <div id="signals">
        <div id="charts">
          <div id="data-chart-wrapper"></div>
          <div id="profit-chart-wrapper"></div>
        </div>
        <div id="signal-controls">
          <button class="pair-control">
            <span>BTC/USDT</span>
          </button>
          <button class="pair-control active">
            <span>BTC/USDT</span>
          </button>
          <button class="pair-control">
            <span>BTC/USDT</span>
            <span>(delayed)</span>
            <div class="tooltip">You are not subscribed to this signal.</div>
          </button>
          <button class="pair-control">
            <span>BTC/USDT</span>
            <span>(delayed)</span>
            <div class="tooltip">You are not subscribed to this signal.</div>
          </button>
          <button class="pair-control active">
            <span>BTC/USDT</span>
            <span>(delayed)</span>
            <div class="tooltip">You are not subscribed to this signal.</div>
          </button>
        </div>
      </div>
    `
  }

  clearHandlers(root) {
    ;[...root.children].forEach(e => {
      if (this.handlers.has(e))
        e.removeEventListener(this.handlers.get(e)[0], this.handlers.get(e)[1])
      if (e.children.length) {
        ;[...e.children].forEach(this.clearHandlers.bind(this))
      }
    })
    if (this.handlers.has(root)) {
      root.removeEventListener(
        this.handlers.get(root)[0],
        this.handlers.get(root)[1]
      )
    }
  }

  render() {
    const menuRoot = document.getElementById('signal-controls')
    this.clearHandlers(menuRoot)
    menuRoot.innerHTML = ''
    this.pairs
      .map(e => {
        const { name, frequency, delayed } = e
        // CONTROL HTML
        const btn = document.createElement('BUTTON')
        btn.classList.add('pair-control')
        btn.setAttribute('type', 'button')

        // NAME HTML
        const nameSpan = document.createElement('SPAN')
        nameSpan.innerHTML = name
        btn.appendChild(nameSpan)

        if (delayed) {
          // DELAYED HTML ADDITION
          const delayedSpan = document.createElement('SPAN')
          delayedSpan.innerHTML = ' (delayed)'
          btn.appendChild(delayedSpan)

          // TOOLTIP HTML
          const tooltip = document.createElement('DIV')
          tooltip.classList.add('tooltip')
          tooltip.innerHTML = 'You are not subscribed to this signal.'
          btn.appendChild(tooltip)
        }

        const handler = event => {
          fetch(brainalyzed_wp.ajax_url, {
            headers: {
              accept: 'application/json',
            },
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
              action: 'data',
              pair: name,
              frequency,
              limit: 500,
            }),
          })
            .then(res => res.json())
            .then(data => dataCharter.setData(data))
          if (this.active) this.active.classList.remove('active')
          this.active = event.currentTarget
          this.active.classList.add('active')
        }
        const event = 'click'
        this.handlers.set(btn, [event, handler])
        btn.addEventListener(event, handler)

        return btn
      })
      .forEach(control => menuRoot.appendChild(control))
  }
}

const signalPicker = new SignalPicker(document.getElementById('signals-root'))
