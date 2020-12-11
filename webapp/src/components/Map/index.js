import React, { useState } from "react"
import useInterval from "hooks/useInterval"
import { getNextCycle } from "api/cycles"

import styles from "./styles.module.css"

const INITAL_ROWS = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

const Cell = ({ value }) => (
  <div
    className={`${styles.cell} ${value ? styles.liveCell : styles.deadCell}`}
  ></div>
)

const Row = ({ cells = [] }) => (
  <div className={styles.row}>
    {cells.map((cellValue, index) => (
      <Cell value={cellValue} key={`cell_${index}`} />
    ))}
  </div>
)

const Map = () => {
  const [rows, setRows] = useState(INITAL_ROWS)

  useInterval(() => {
    getNextCycle(rows).then(setRows)
  }, 1000)

  return (
    <div className={styles.map}>
      {rows.map((rowCells, index) => (
        <Row cells={rowCells} key={`row_${index}`} />
      ))}
    </div>
  )
}

export default Map
