
import Shape from "../Shape/Shape";
import {FC} from "react";
import styles from './Frame.module.scss';
interface Props {
    onClick?: void
}

const Frame: FC<Props> = () => {
    const rows: number[] = [];
    const cols: number[] = [];

    for (let row = 0; row < 30; row++) {
        rows.push(row + 1);
    }

    for (let col = 0; col < 60; col++) {
        cols.push(col + 1);
    }

    const onClick = () => {
        //
    }

    return (
        <table className={styles['frame']}>
            {rows.map(() => {
                return (
                    <tr>
                        {cols.map(() => {
                            return (
                                <Shape onClick={onClick} />
                            )
                        })}
                    </tr>
                );
            })}
        </table>
    )
}
export default Frame;
