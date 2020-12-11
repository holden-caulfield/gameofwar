import React from "react"
import styles from "./styles.module.css"

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

const Map = ({ mapRows = [] }) => (
  <div className={styles.map}>
    {mapRows.map((rowCells, index) => (
      <Row cells={rowCells} key={`row_${index}`} />
    ))}
  </div>
)

export default Map
