# SCV's Game Of War

In a perversion of the Conway’s Game of Life, we created SCV’s Game of War. Almost the same rules with a twist for the pessimistic:

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

Additional rules:

- All cells have a team
- Previous rules only applies to same team cells
- After previous rules have been applied, a cell with more opposite team cells next to it than the same team, will be assassinated and die forever.
- In case a cell has a contested reproduction, the strongest team (greatest amount of living cell) will win.
- In case, the rules encounter an unsolvable contradiction, destroy every cell. Paradoxes are not tolerated.

# Running the code

## Backend

Go to the backend subdirectory:

    cd backend

Once there, first of all install the dependencies by issuing:

    npm install

To run the backend server

    npm start

The backend will be served on http://localhost:3000

If you want to run the tests first

    npm test

OR

    npm test -- --watch

To run them on watch/interactive mode
