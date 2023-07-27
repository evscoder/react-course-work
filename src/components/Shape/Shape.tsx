import {FC, useEffect, useRef, useState} from 'react';
import styles from './Shape.module.scss';
import cn from 'clsx';

interface Props {
    id: string
    classNames?: string;
    isActive: boolean;
}

const Shape: FC<Props> = ({ id, isActive }) => {
    const [active, setActive] = useState<boolean>(false);
    const shapeElement = useRef<HTMLTableCellElement>(null);

    useEffect(() => {
        setActive(isActive);
    }, [isActive]);

    const onClick = () => {
        setActive(!active);
    };

    return (
        <td ref={shapeElement} id={id} className={cn(styles['shape'], active && styles['is-active'])} onClick={onClick}></td>
    );
};

export default Shape;
