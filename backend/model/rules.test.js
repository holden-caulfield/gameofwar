const { applyRulesToCell, applyRulesToMap } = require("./rules")

const map = [
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 1]
]

test("Any live cell with fewer than two live neighbours dies, as if by underpopulation", () => {
  expect(applyRulesToCell([2, 0], map)).toBe(0)
})

test("Any live cell with two or three live neighbours lives on to the next generation", () => {
  expect(applyRulesToCell([0, 3], map)).toBe(1)
})

test("Any live cell with more than three live neighbours dies, as if by overpopulation", () => {
  expect(applyRulesToCell([1, 3], map)).toBe(0)
})

test("Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction", () => {
  expect(applyRulesToCell([1, 0], map)).toBe(1)
})

test("Properly applies rules to an entire map", () => {
  const expectedNextMap = [
    [0, 1, 0, 1],
    [1, 0, 0, 0],
    [0, 0, 0, 1]
  ]
  expect(applyRulesToMap(map)).toEqual(expectedNextMap)
})
