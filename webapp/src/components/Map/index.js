import React from "react"
import styles from "./styles.module.css"
import { curry } from "ramda"

const Cell = ({ value, editable, onClick }) => (
  <div
    className={`${styles.cell} 
      ${value ? styles.liveCell : styles.deadCell}
      ${editable ? styles.editable : styles.nonEditable}
    `}
    onClick={onClick}
  ></div>
)

const Row = ({ cells = [], editable = false, onCellClick }) => (
  <div className={styles.row}>
    {cells.map((cellValue, index) => (
      <Cell
        editable={editable}
        value={cellValue}
        key={`cell_${index}`}
        onClick={() => {
          onCellClick(index)
        }}
      />
    ))}
  </div>
)

const Map = ({ mapRows = [], editable = false, onCellClick = () => {} }) => (
  <div className={styles.map}>
    {mapRows.map((rowCells, index) => (
      <Row
        editable={editable}
        cells={rowCells}
        key={`row_${index}`}
        onCellClick={curry(onCellClick)(index)}
      />
    ))}
  </div>
)

export default Map
