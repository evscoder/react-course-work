import {forwardRef, useEffect, useState} from 'react';
import styles from './Frame.module.scss';
import Shape from '../Shape/Shape';

interface Props {
    status?: 'reset' | 'active';
    isElementsActive: number[][]
}

const Frame = forwardRef<HTMLTableElement, Props>(({status, isElementsActive}, frameElement) => {
    const [rows, setRows] = useState<number[]>([]);
    const [cols, setCols] = useState<number[]>([]);

    useEffect(() => {
        const arrRow: number[] = [];
        const arrCols: number[] = [];

        for (let row = 0; row < 30; row++) {
            arrRow.push(row + 1);
        }

        for (let col = 0; col < 60; col++) {
            arrCols.push(col + 1);
        }

        setRows(arrRow);
        setCols(arrCols);
    }, []);

    return (
        <table ref={frameElement} data-status={status} className={styles['frame']}>
            {rows.map((_, i: number) => {
                return (
                    <tr>
                        {cols.map((_, j: number ) => {
                            return (
                                <Shape id={`${i}_${j}`} isActive={!!isElementsActive[i][j]} />
                            )
                        })}
                    </tr>
                );
            })}
        </table>
    );
});
export default Frame;
