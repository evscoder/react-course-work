import {forwardRef, LegacyRef, ReactNode, useEffect} from "react";
import styles from './Frame.module.scss';
import Shape from "../Shape/Shape";

interface Props {
    status?: "reset" | "active";
}

const Frame = forwardRef<HTMLTableElement, Props>(({status}, frameElement) => {
    const rows: number[] = [];
    const cols: number[] = [];

    for (let row = 0; row < 30; row++) {
        rows.push(row + 1);
    }

    for (let col = 0; col < 60; col++) {
        cols.push(col + 1);
    }

    return (
        <table ref={frameElement} data-status={status} className={styles['frame']}>
            {rows.map(() => {
                return (
                    <tr>
                        {cols.map(() => {
                            return (
                                <Shape />
                            )
                        })}
                    </tr>
                );
            })}
        </table>
    )
})
export default Frame;
