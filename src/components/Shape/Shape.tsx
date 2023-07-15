import {FC, MouseEventHandler} from "react";
import styles from './Shape.module.scss';
interface Props {
    onClick: MouseEventHandler<HTMLTableCellElement>;
}
const Shape: FC<Props> = ({ onClick }) => {
    return (
        <td className={styles['shape']} onClick={onClick}></td>
    );
};

export default Shape;
