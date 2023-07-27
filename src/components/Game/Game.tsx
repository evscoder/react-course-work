import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './Game.module.scss';
import Frame from '../Frame/Frame';
import Interface from '../Interface/Interface';

interface Props {
    title?: string
}

const Game: FC<Props> = () => {
    const [shape, setShape] = useState<string | undefined>('square');
    const [color, setColor] = useState<string | undefined>('purple');
    const gameElement = useRef<HTMLDivElement>(null);
    const frameElement = useRef<HTMLTableElement>(null);
    const [cellsActive, setCellsActive] = useState<number[][]>([]);
    const [nextCells, setNextCells] = useState<number[][]>([])
    const [theme, setTheme] = useState<boolean>(false);
    const [isGrid, setIsGrid] = useState<boolean>(false);
    const [rows] = useState<number>(30);
    const [cols] = useState<number>(60);

    const onCreate = () => {
        const table = frameElement.current as HTMLTableElement;
        const cells = table.querySelectorAll('td');
        const totalCells = cells.length;
        const maxCells = totalCells * 0.35;

        const newArr: number[][] = cellsActive;

        const uniqueSet = new Set();
        while (uniqueSet.size < maxCells) {
            const random = Math.floor(Math.random() * totalCells);
            uniqueSet.add(random);

            cells.forEach((el: HTMLTableCellElement, i: number) => {
                const cellStatus = el.id.split("_");
                const row = Number(cellStatus[0]);
                const col = Number(cellStatus[1]);

                if (i === random) {
                    newArr[row][col] = 1;
                }
            });
        }

        setCellsActive([...newArr]);
    }

    const onReset = () => {
        createArray();
    };

    const onChangeShape = (event: React.ChangeEvent<HTMLInputElement>) => {
        const button = event.target;
        const buttonType: string | undefined = button.dataset.type;
        const buttonColor: string | undefined = button.dataset.color;
        const gameEl = gameElement.current as HTMLDivElement;

        const shapeData = gameEl.dataset;

        shapeData.shape = buttonType;
        shapeData.color = buttonColor;

        setShape(shapeData.shape);
        setColor(shapeData.color);
    };

    const onChangeGrid = () => {
        setIsGrid(!isGrid);
    };

    const createArray = () => {
        const currentCells: number[][] = [];
        const nextCells: number[][] = [];

        for (let i = 0; i < rows; i++) {
            currentCells[i] = new Array(cols);
            nextCells[i] = new Array(cols);

            for (let j = 0; j < cols; j++) {
                currentCells[i][j] = 0;
                nextCells[i][j] = 0;
            }
        }

        setCellsActive(currentCells);
        setNextCells(nextCells);
    };

    const getNeighborCount = (row: string, col: string) => {
        let nCount = 0;
        const nRow = Number(row);
        const nCol = Number(col);

        if (nRow - 1 >= 0) {
            if (cellsActive[nRow - 1][nCol] === 1) {
                nCount++;
            }
        }

        if (nRow - 1 >= 0 && nCol - 1 >= 0) {
            if (cellsActive[nRow - 1][nCol - 1] === 1) {
                nCount++;
            }
        }

        if (nRow - 1 >= 0 && nCol + 1 < cols) {
            if (cellsActive[nRow - 1][nCol + 1] === 1) {
                nCount++;
            }
        }

        if (nCol - 1 >= 0) {
            if (cellsActive[nRow][nCol - 1] === 1) {
                nCount++;
            }
        }

        if (nCol + 1 < cols) {
            if (cellsActive[nRow][nCol + 1] === 1) {
                nCount++;
            }
        }

        if (nRow + 1 < rows && nCol - 1 >= 0) {
            if (cellsActive[nRow + 1][nCol - 1] === 1) {
                nCount++;
            }
        }

        if (nRow + 1 < rows && nCol + 1 < cols) {
            if (cellsActive[nRow + 1][nCol + 1] === 1) {
                nCount++;
            }
        }

        if (nRow + 1 < rows) {
            if (cellsActive[nRow + 1][nCol] === 1) {
                nCount++;
            }
        }

        return nCount;
    };
    const createNextGenerationArr = () => {
        const nextArr = nextCells;

        for (const row in cellsActive) {
            for (const col in cellsActive[row]) {
                const neighbors = getNeighborCount(row, col);

                if (cellsActive[row][col] === 1) {
                    if (neighbors < 2) {
                        nextArr[row][col] = 0;
                    } else if (neighbors === 2 || neighbors === 3) {
                        nextArr[row][col] = 1;
                    } else if (neighbors > 3) {
                        nextArr[row][col] = 0;
                    }
                } else if (cellsActive[row][col] === 0) {
                    if (neighbors === 3) {
                        nextArr[row][col] = 1;
                    }
                }
            }
        }

        setNextCells([...nextArr]);
    }

    const updateCurrGenerationArr = () => {
        for (const row in cellsActive) {
            for (const col in cellsActive[row]) {
                cellsActive[row][col] = nextCells[row][col];
                nextCells[row][col] = 0;
            }
        }
    }
    const onEvolve = () => {
        createNextGenerationArr();
        updateCurrGenerationArr();
        setTimeout(() => onEvolve(), 250);
    }

    useEffect(() => {
        document.body.dataset.mode = theme ? 'light' : 'dark';

        createArray();
    }, []);

    const onToggleTheme = () => {
        setTheme(!theme);
        document.body.dataset.mode = theme ? 'light' : 'dark';
    };

    return (
        <div ref={gameElement} data-shape={'square'} data-color={'purple'} data-grid={isGrid ? 'off' : 'on'} data-testid={'container'} className={styles['game']}>
            <Frame ref={frameElement} isElementsActive={cellsActive} />
            <Interface
                isStateTheme={theme}
                isStateGrid={isGrid}
                onChangeShape={onChangeShape}
                type={shape}
                color={color === 'emoji' ? 'purple' : color}
                onCreate={onCreate}
                onReset={onReset}
                onEvolve={onEvolve}
                onChangeTheme={onToggleTheme}
                onChangeGrid={onChangeGrid}
            />
        </div>
    );
};

export default Game;
