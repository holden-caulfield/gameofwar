const API_URL = "http://localhost:3030/cycle"

const getNextCycle = (map) =>
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ map })
  }).then((res) => res.json())

export { getNextCycle }
