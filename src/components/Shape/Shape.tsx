import {FC, useEffect, useRef, useState} from 'react';
import styles from './Shape.module.scss';
import cn from 'clsx';

interface Props {
    classNames?: string;
    isActive: boolean;
}

const Shape: FC<Props> = ({ isActive }) => {
    const [active, setActive] = useState<boolean>(false);
    const shapeElement = useRef<HTMLTableCellElement>(null);

    useEffect(() => {
        setActive(isActive);
    }, [isActive]);

    const onClick = () => {
        setActive(!active);
    };

    return (
        <div ref={shapeElement} className={cn(styles['shape'], active && styles['is-active'])} onClick={onClick}></div>
    );
};

export default Shape;
