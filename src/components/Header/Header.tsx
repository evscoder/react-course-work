import styles from './Header.module.scss';
import {FC} from "react";
interface Props {
    title?: string
    text?: string
}

const Header: FC<Props> = () => {
    return (
        <div className={styles['page-header']}>
            <h1 className={styles['page-header__title']}>Gen Art with Conway's Game of Life</h1>
            <p className={styles['page-header__intro-text']}>Get started by clicking on the cells to create alive cells, or click on the 'create' button to randomly create a bunch of alive cells.</p>
        </div>
    )
}

export default Header;
