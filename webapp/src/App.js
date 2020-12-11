import React, { useState } from "react"
import { update } from "ramda"

import useInterval from "hooks/useInterval"
import Map from "components/Map"
import Button from "components/Button"

import { getNextCycle } from "api/cycles"

import "./App.css"

const INITIAL_STATE = {
  map: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  running: false
}

function App() {
  const [map, setMap] = useState(INITIAL_STATE.map)
  const [running, setRunning] = useState(INITIAL_STATE.running)

  useInterval(
    () => {
      getNextCycle(map).then(setMap)
    },
    running ? 1000 : null
  )

  const onCellClick = (row, column) => {
    if (!running) {
      const newMap = update(
        row,
        update(column, map[row][column] === 0 ? 1 : 0, map[row]),
        map
      )
      setMap(newMap)
    }
  }

  return (
    <div className="App">
      <Map mapRows={map} onCellClick={onCellClick} editable={!running} />
      <Button
        label={running ? "Stop" : "Start"}
        onClick={() => {
          setRunning(!running)
        }}
      />
    </div>
  )
}

export default App
