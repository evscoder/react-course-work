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
    const [theme, setTheme] = useState<boolean>(false);
    const [isGrid, setIsGrid] = useState<boolean>(false);
    const rows = 30;
    const cols = 60;

    const onCreate = () => {
        const table = frameElement.current as HTMLTableElement;
        const cells = table.querySelectorAll('td');
        const totalCells = cells.length;
        const maxCells = totalCells * 0.35;

        const newArr: any = cellsActive;

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

        console.log(newArr);

        setCellsActive(newArr);
    }

    const onReset = () => {
        const arr: number[] = [];

        cellsActive.forEach(() => {
            arr.push(0);
        });

        setCellsActive(arr);
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
        const currentGenCells: number[][] = [];
        const nextGenCells: number[][] = [];

        for (let i = 0; i < rows; i++) {
            currentGenCells[i] = new Array(cols);
            nextGenCells[i] = new Array(cols);

            for (let j = 0; j < cols; j++) {
                currentGenCells[i][j] = 0;
                nextGenCells[i][j] = 0;
            }
        }
        setCellsActive(currentGenCells);

        debugger;

        console.log(cellsActive[0][3]);
    };

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
                onChangeTheme={onToggleTheme}
                onChangeGrid={onChangeGrid}
            />
        </div>
    );
};

export default Game;
