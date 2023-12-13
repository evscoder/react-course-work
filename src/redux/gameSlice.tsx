import {createSlice} from '@reduxjs/toolkit';

type gameStateProps = {
    cellsActive: number[][],
    nextCells: number[][],
    gridSize: number[],
    start: boolean,
    activeShape: boolean,
    shape?: string,
    color?: string,
    evolve: boolean,
    theme: boolean,
    grid: boolean,
    timeSpeed: number,
}

const initialState: gameStateProps = {
    cellsActive: [],
    nextCells: [],
    gridSize: [30, 60],
    start: false,
    activeShape: false,
    shape: 'square',
    color: 'purple',
    evolve: false,
    theme: false,
    grid: false,
    timeSpeed: 200
};

const gameSlice = createSlice({
    name: 'gameSlice',
    initialState: initialState,
    reducers: {
        createArray: (state) => {
            const currentCells: number[][] = [];
            const nextCells: number[][] = [];
            const rows = state.gridSize[0];
            const cols = state.gridSize[1];

            for (let i = 0; i < rows; i++) {
                currentCells[i] = [cols];
                nextCells[i] = [cols];

                for (let j = 0; j < cols; j++) {
                    currentCells[i][j] = 0;
                    nextCells[i][j] = 0;
                }
            }

            state.cellsActive = currentCells;
            state.nextCells = nextCells;
        },
        gameCreate: (state, { payload }) => {
            const cells = document.querySelectorAll('.shape');
            const totalCells = payload.totalCells;
            const maxCells = totalCells * 0.35;
            const uniqueSet = new Set();
            const rows = state.gridSize[0];
            const cols = state.gridSize[1];

            for (let i = 0; i < rows; i++) {
                state.cellsActive[i] = [cols];
                state.nextCells[i] = [cols];

                for (let j = 0; j < cols; j++) {
                    state.cellsActive[i][j] = 0;
                    state.nextCells[i][j] = 0;
                }
            }

            state.cellsActive = [...state.cellsActive];
            state.nextCells = [...state.nextCells];

            while (uniqueSet.size < maxCells) {
                const random = Math.floor(Math.random() * totalCells);
                uniqueSet.add(random);

                cells.forEach((el, i: number) => {
                    const cellId = el.id.split('_');
                    const row = +cellId[0];
                    const col = +cellId[1];

                    if (i === random) {
                        state.cellsActive[row][col] = 1;
                    }
                });
            }

            state.start = true;
            state.cellsActive = [...state.cellsActive];
        },
        gameEvolve: (state) => {
            for (const row in state.cellsActive) {
                for (const col in state.cellsActive[row]) {
                    let nCount = 0;
                    const rows = state.gridSize[0];
                    const cols = state.gridSize[1];
                    const nRow = +row;
                    const nCol = +col;

                    if (nRow - 1 >= 0) {
                        if (state.cellsActive[nRow - 1][nCol] === 1) {
                            nCount++;
                        }
                    }

                    if (nRow - 1 >= 0 && nCol - 1 >= 0) {
                        if (state.cellsActive[nRow - 1][nCol - 1] === 1) {
                            nCount++;
                        }
                    }

                    if (nRow - 1 >= 0 && nCol + 1 < cols) {
                        if (state.cellsActive[nRow - 1][nCol + 1] === 1) {
                            nCount++;
                        }
                    }

                    if (nCol - 1 >= 0) {
                        if (state.cellsActive[nRow][nCol - 1] === 1) {
                            nCount++;
                        }
                    }

                    if (nCol + 1 < cols) {
                        if (state.cellsActive[nRow][nCol + 1] === 1) {
                            nCount++;
                        }
                    }

                    if (nRow + 1 < rows && nCol - 1 >= 0) {
                        if (state.cellsActive[nRow + 1][nCol - 1] === 1) {
                            nCount++;
                        }
                    }

                    if (nRow + 1 < rows && nCol + 1 < cols) {
                        if (state.cellsActive[nRow + 1][nCol + 1] === 1) {
                            nCount++;
                        }
                    }

                    if (nRow + 1 < rows) {
                        if (state.cellsActive[nRow + 1][nCol] === 1) {
                            nCount++;
                        }
                    }

                    if (state.cellsActive[row][col] === 1) {
                        if (nCount < 2) {
                            state.nextCells[row][col] = 0;
                        } else if (nCount === 2 || nCount === 3) {
                            state.nextCells[row][col] = 1;
                        } else if (nCount > 3) {
                            state.nextCells[row][col] = 0;
                        }
                    } else if (state.cellsActive[row][col] === 0) {
                        if (nCount === 3) {
                            state.nextCells[row][col] = 1;
                        }
                    }
                }
            }

            state.nextCells = [...state.nextCells];

            for (const row in state.cellsActive) {
                for (const col in state.cellsActive[row]) {
                    state.cellsActive[row][col] = state.nextCells[row][col];
                    state.nextCells[row][col] = 0;
                }
            }
        },
        gameReset: (state) => {
            state.start = false;
            state.activeShape = false;
        },
        gameToggleEvolve: (state, { payload }) => {
            state.evolve = payload;
        },
        gameToggleShape: (state, { payload }) => {
            state.activeShape = false;

            if (!state.cellsActive[payload.row][payload.col]) {
                state.cellsActive[payload.row][payload.col] = 1;
            } else {
                state.cellsActive[payload.row][payload.col] = 0;
            }

            for (let i = 0; i < state.cellsActive.length; i++) {
                for (let j = 0; j < state.cellsActive[i].length; j++) {
                    if (state.cellsActive[i][j]) {
                        state.activeShape = true;
                    }
                }
            }

            state.cellsActive = [...state.cellsActive];
        },
        gameToggleTheme: (state, { payload }) => {
            state.theme = payload;
            document.body.dataset.mode = !state.theme ? 'dark' : 'light';
        },
        gameChangeShape: (state, { payload }) => {
            state.shape = payload.shape;
            state.color = payload.color;
        },
        gameToggleGrid: (state) => {
            state.grid = !state.grid;
        },
        gameChangeGridSize: (state, { payload }) => {
            state.gridSize = [payload.sizeX, payload.sizeY];
        },
        gameToggleSpeed: (state, { payload }) => {
            state.timeSpeed = payload;
        }
    }
});

export const {
    gameCreate,
    gameToggleShape,
    gameReset,
    createArray,
    gameEvolve,
    gameChangeShape,
    gameChangeGridSize,
    gameToggleEvolve,
    gameToggleTheme,
    gameToggleGrid,
    gameToggleSpeed
} = gameSlice.actions;

export default gameSlice.reducer;
