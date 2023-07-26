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
    const [cellsActive, setCellsActive] = useState<boolean[]>([]);
    const [theme, setTheme] = useState<boolean>(false);
    const [isGrid, setIsGrid] = useState<boolean>(false);

    const onCreate = () => {
        const table = frameElement.current as HTMLDivElement;
        const cells = table.querySelectorAll('div');
        const totalCells: number = cells.length;
        const maxCells = totalCells * 0.35;
        const activeCells: boolean[] = [];

        cells.forEach(() => {
            activeCells.push(false);
        });

        const uniqueSet = new Set();
        while (uniqueSet.size < maxCells) {
            const random = Math.floor(Math.random() * totalCells);
            uniqueSet.add(random);

            cells.forEach((_, i: number) => {
                if (i === random) {
                    activeCells[i] = true;
                }
            });
        }

        setCellsActive(activeCells);
    };

    const onReset = () => {
        const arr: boolean[] = [];

        cellsActive.forEach(() => {
            arr.push(false);
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

    useEffect(() => {
        document.body.dataset.mode = theme ? 'light' : 'dark';
    });

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
