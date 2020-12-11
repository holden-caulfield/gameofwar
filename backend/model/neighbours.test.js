const { getNeighbours } = require("./neighbours")

const expectNeighbours = ([row, colum], expectedNeighbours) => {
  const result = getNeighbours({ rows: 4, columns: 4 }, [row, colum])
  expect(result.length).toBe(expectedNeighbours.length)
  expect(result).toEqual(expect.arrayContaining(expectedNeighbours))
}

test("properly gets neighbours on a middle cell", () => {
  const cell = [1, 1]
  expectedNeighbours = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2]
  ]
  expectNeighbours(cell, expectedNeighbours)
})

test("properly gets neighbours on a top edge cell", () => {
  const cell = [0, 1]
  const expectedNeighbours = [
    [0, 0],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2]
  ]
  expectNeighbours(cell, expectedNeighbours)
})

test("properly gets neighbours on a left edge cell", () => {
  const cell = [1, 0]
  const expectedNeighbours = [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 0],
    [2, 1]
  ]
  expectNeighbours(cell, expectedNeighbours)
})

test("properly gets neighbours on a bottom edge cell", () => {
  const cell = [3, 1]
  const expectedNeighbours = [
    [2, 0],
    [2, 1],
    [2, 2],
    [3, 0],
    [3, 2]
  ]
  expectNeighbours(cell, expectedNeighbours)
})

test("properly gets neighbours on a right edge cell", () => {
  const cell = [1, 3]
  const expectedNeighbours = [
    [0, 2],
    [0, 3],
    [1, 2],
    [2, 2],
    [2, 3]
  ]
  expectNeighbours(cell, expectedNeighbours)
})

test("properly gets neighbours on a top-left corner", () => {
  const cell = [0, 0]
  const expectedNeighbours = [
    [0, 1],
    [1, 0],
    [1, 1]
  ]
  expectNeighbours(cell, expectedNeighbours)
})

test("properly gets neighbours on a bottom-left corner", () => {
  const cell = [3, 0]
  const expectedNeighbours = [
    [3, 1],
    [2, 0],
    [2, 1]
  ]
  expectNeighbours(cell, expectedNeighbours)
})

test("properly gets neighbours on a bottom-right corner", () => {
  const cell = [3, 3]
  const expectedNeighbours = [
    [3, 2],
    [2, 3],
    [2, 2]
  ]
  expectNeighbours(cell, expectedNeighbours)
})

test("properly gets neighbours on a top-right corner", () => {
  const cell = [0, 3]
  const expectedNeighbours = [
    [0, 2],
    [1, 3],
    [1, 2]
  ]
  expectNeighbours(cell, expectedNeighbours)
})
