import styles from './Header.module.scss';
import {FC} from 'react';
interface Props {
    title?: string
    text?: string
}

const Header: FC<Props> = () => {
    return (
        <div className={styles.pageHeader}>
            <h1 className={styles.pageHeader__title}>Conway's Game of Life</h1>
            <p className={styles.pageHeader__introText}>Чтобы начать нажмите на поле для активации клеток, или нажмите кнопку "create", чтобы создать клетки автоматически</p>
        </div>
    );
};

export default Header;
