import {FC, useRef, useState} from "react";
import styles from './Shape.module.scss';
import cn from "clsx";

interface Props {
    classNames?: string;
}

const Shape: FC<Props> = () => {
    const [active, setActive] = useState(false);
    const shapeElement = useRef<HTMLTableCellElement>(null);
    const onClick = () => {
        setActive(!active);
    }
    return (
        <td ref={shapeElement} className={cn(styles['shape'], active && styles['is-active'])} onClick={onClick}></td>
    );
};

export default Shape;
