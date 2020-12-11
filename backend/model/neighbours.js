R = require("ramda")

const getNeighbours = (mapSize, [row, column]) => {
  const rowIndexes = R.range(
      Math.max(row - 1, 0),
      Math.min(row + 2, mapSize.rows)
    ),
    columnIndexes = R.range(
      Math.max(column - 1, 0),
      Math.min(column + 2, mapSize.columns)
    )
  return R.without([[row, column]], R.xprod(rowIndexes, columnIndexes))
}

module.exports = {
  getNeighbours
}
