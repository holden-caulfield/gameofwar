/*
  From: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
  These rules, which compare the behavior of the automaton to real life, 
  can be condensed into the following:

  Any live cell with two or three live neighbours survives. 
  Any dead cell with three live neighbours becomes a live cell.
  All other live cells die in the next generation. Similarly, all other dead cells stay dead.
*/

const R = require("ramda")
const { getNeighbours } = require("./neighbours")

const getNeighboursCount = (map, cell) => {
  const neighbours = getNeighbours(
    { rows: map.length, columns: R.head(map).length },
    cell
  )
  return R.pipe(
    R.map(([row, column]) => map[row][column]),
    R.filter(R.equals(1)),
    R.length
  )(neighbours)
}

const survivalRule = [
  (cellValue, neighboursCount) =>
    cellValue === 1 && [2, 3].includes(neighboursCount),
  R.always(1)
]

const reproductionRule = [
  (cellValue, neighboursCount) => cellValue === 0 && neighboursCount === 3,
  R.always(1)
]

const defaultDeathRule = [R.T, R.always(0)]

const applyRulesToCell = (cell, map) => {
  const [row, column] = cell,
    cellValue = map[row][column],
    neighboursCount = getNeighboursCount(map, cell)
  return R.cond([survivalRule, reproductionRule, defaultDeathRule])(
    cellValue,
    neighboursCount
  )
}

const applyRulesToMap = (map) => {
  const numRows = map.length,
    numColumns = R.head(map).length,
    rowsRange = R.range(0, numRows),
    columnsRange = R.range(0, numColumns),
    cells = R.splitEvery(numColumns, R.xprod(rowsRange, columnsRange))
  processRow = R.map((cell) => applyRulesToCell(cell, map))
  return R.map(processRow, cells)
}

module.exports = {
  applyRulesToCell,
  applyRulesToMap
}
