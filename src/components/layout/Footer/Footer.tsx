import {FC} from 'react';
import styles from './Footer.module.scss';
interface Props {
    title?: string
}

const Footer: FC<Props> = ({title}) => {
    return (
        <footer className={styles.footer}>
            <p className={styles.credit}>
                <a href="https://evscoder.github.io/about.html" target={'_blank'}>{title ? title : 'Обо мне'}</a>
            </p>
            <p className={styles.credit}>
                Информация о игре <a href="https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D1%80%D0%B0_%C2%AB%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%C2%BB" target={'_blank'}>Wikipedia</a>
            </p>
        </footer>
    );
};

export default Footer;
